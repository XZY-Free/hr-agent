# 人力 AI 智能体项目设计（FastGPT → veADK / AgentKit 迁移）

> 日期：2026-07-25（2026-07-27 修订：§4.2/§5.2 工具挂载与代码对齐，补文档导航）
> 前置文档：《迁移梳理/FastGPT工作流迁移梳理报告.md》（业务逻辑与规则资产来源）、《迁移梳理/接口适配清单.md》（盖亚接口详情）
> 本文是经业务方逐节确认的设计定稿，实现计划以本文为准。

## 文档导航

| 文档 | 定位 |
|---|---|
| `specs/2026-07-27-hr-agent-architecture-overview.md` | **新系统怎么跑**——俯瞰、调用链、运行时序、新旧对照（推荐先读） |
| **本文** | 新系统为什么这么设计——拓扑、工具边界、决策记录 |
| `plans/2026-07-25-hr-agent-phase1.md` / `phase2.md` | 怎么造——逐任务 TDD 施工手册 |
| `迁移梳理/业务细节与实现逻辑.md` | 旧系统在做什么——验收基准 |
| `hr-agent/docs/CHECKLIST.md` | 外部材料核验 runbook |

> 看完本文设计取舍后，建议读《architecture-overview》看建成后的实际运行形态。

---

## 1. 背景与目标

现有人力 AI 助手（考勤请假 + 人力咨询）构建在 FastGPT 工作流上：24 份导出、21 个独立应用、60 个 LLM 节点、177 个变量节点、150 个判断节点。复杂性主要来自"固定流程无法让 AI 自主决策，只能穷举分支"。

目标：重写为 **veADK（Python）智能体项目，部署到火山 AgentKit Runtime**。不做 1:1 工作流复刻——提取业务规则与话术资产，流程决策交给模型自主编排。

**成功标准**：对话层评测集（取自旧系统真实分支样本）全部通过；新旧系统同题双跑对照行为可接受；规则层单测全绿。

## 2. 关键决策记录（业务方已拍板）

| # | 决策 |
|---|------|
| D1 | 框架/平台：veADK（Python）+ AgentKit Runtime；核心按 Google ADK 范式组织，保留未来跨平台（阿里 AgentRun 等）可迁移性 |
| D2 | 拓扑：主 Agent + 领域子 Agent（请假 Agent、咨询 Agent），查询/跳转/转人工/寒暄留在主 Agent |
| D3 | 输出形态：**纯自然语言聊天**。请假单 JSON 降级为内部工具入参；唯一结构化例外是页面跳转标记（见 §6） |
| D4 | 闭环：智能体**自己调用全部接口**，包括请假提交（接口文档由业务方获取，到位前工具做干跑模式）；不再依赖后端解析输出、代调接口 |
| D5 | 范围：设计覆盖全量，实现分两期。一期：主 + 请假 + 查询 + 跳转；二期：咨询知识库 + 文档解析 |
| D6 | 知识库：文档导入 AgentKit Knowledge 平台侧，不自建向量库；检索参数不照抄旧值，平台侧重新调优 |
| D7 | 业务变量（employeeId / corp_id / client_secret / grant_type）由调用方每会话传入，沿用现有取值 |
| D8 | 盖亚接口环境（生产/沙箱混用）、tenant 硬编码、grant_type 先按工作流导出原样 |
| D9 | `_transparent_data_` 表单回填输入协议保留；语音输入归前端，智能体不承接；文件/图片进入时已是腾讯云 COS 公共链接，无需存储 |

## 3. 系统边界与调用链

```
调用方（App/前端体系）
   │  session_id + 用户消息 + 业务变量 + 可选 COS 文件链接
   ▼
AgentKit Runtime（HTTP API，全托管）
   ▼
主 Agent ──transfer──► 请假 Agent（一期）
   │       └─────────► 咨询 Agent（二期）
   ▼
工具层 ──► 盖亚 OpenAPI（查询 ×5 + 提交 ×1）
```

**输入**：
- `session_id`：调用方生成并维持，同一会话多轮复用
- `message`：用户消息文本；以 `_transparent_data_` 开头时先解析回填槽位再走正常流程
- 业务变量：注入 ADK session state；**工具从 state 读取，密钥不进 prompt、不进模型上下文**
- `files`：可选，COS 公链数组（二期文档解析用）

**输出**：自然语言文本（可含 markdown）。多轮追问（缺槽）也是普通对话文本。

**会话历史说明**：新架构 Agent 天然携带完整会话历史（与旧系统多数节点 history=0 不同）。这是新形态的特性而非缺陷——行为正确性以评测集为准，不做节点级等价。

## 4. Agent 拓扑与职责

### 4.1 主 Agent
- 模型：doubao-seed-1.6（`config.yaml` 可配，全部 Agent 同源配置）
- 职责：意图理解与分发；直接处理**页面跳转**（13 类）、**转人工**（回复引导语，保留旧话术）、**寒暄兜底**、**余额/权限/医疗期/年假折算查询**（挂查询类工具，单轮问答无需子 Agent）
- 请假申请/修改意图 → transfer 请假 Agent；**取消请假** → 主 Agent 直接回复固定引导话术（保留旧话术，不进请假流程）；制度/政策/操作咨询 → transfer 咨询 Agent（二期未上线时回复"咨询服务敬请期待"类话术）

### 4.2 请假 Agent（一期核心）
- 职责：自然语言请假全流程——槽位提取（假期类型/日期/时间/理由）→ 缺槽追问 → 复述确认 → 工具校验 → 调用 `submit_leave` 提交 → 自然语言告知结果
- 直接挂载工具：`get_leave_permissions`、`get_leave_balance`、`get_schedule`、`submit_leave`
- `submit_leave` 内部串联调用（非独立工具）：`get_employee_info`（仅限假命中时）、`calc_end_date`（27 类跳休推算纯函数）。确定性规则必须在代码链里强制执行，故不暴露为独立工具给模型选择
- prompt 承载软规则：一次只能申请一种假期（多种 → 请分开提交）；"提前 1 小时下班" = 调休假特例；口语日期理解（今天/明天/后天/大后天/下周X/昨天/前天补登）；上半天/下半天/全天 → 0.5/1 天；提交前复述确认，用户确认后直接调 `submit_leave`，校验（权限/性别/排班/余额/天数）全部由 `submit_leave` 内部完成，不在提交前自行重复查余额/排班绕过校验链
- **今天日期注入**：`main_agent` / `leave_agent` 构造时把 `date.today()` 经 `{today}` 占位符拼进 instruction（进程启动时确定）。口语日期换算必须有今天锚点，否则模型只能从排班 shiftDate 反推，多轮间易漂移（评测首轮 `quick_tomorrow` 即因此把"明天"在 07-27/07-28 间漂移致 submit 失败）。生产进程一天内通常不重启，日期稳定；重启自动更新
- 旧系统快捷 a1–a5/B 七个同构应用的逻辑全部由"模型理解日期 + 排班工具查证"覆盖，不再存在

### 4.3 咨询 Agent（二期）
- 工具：`kb_search`（AgentKit Knowledge 检索，参数含库范围）、`parse_document`（COS 链接 → 文本）
- prompt 承载：非人力问题过滤（引导咨询其他部门）、名词标准化与问题改写（并入单次对话，不再是独立节点）、专家回答风格、生成追问
- 旧系统"名词解释 → 问题改写 → 11 节点多路检索 → 合并"管线收敛为：模型自主改写 + 检索工具内多库策略
- 知识库导入注意：薪酬福利库内置职级术语对照表（餐补=膳食福利、P5=M2 等）随库一并导入

### 4.4 状态管理
多轮槽位（typeName / startDate / endDate / startTime / endTime / reasons / leaveDays）全部放 **ADK session state**，跨 Agent 共享——替代旧系统 20+ 个全局变量与 tag 状态机。业务变量同在 state（只读）。

## 5. 工具层与确定性边界

**原则：模型管理解和决策，代码管规则和事实。**

| 归模型（prompt） | 归代码（工具/回调） |
|---|---|
| 意图理解、分发决策 | 全部盖亚 API 调用、JWT 获取与缓存 |
| 槽位提取、口语日期理解 | 日期格式校验、夜班跨天 endDate+1 |
| 缺槽追问措辞 | 27 类假期跳休推算（查表 + 排班） |
| 回答与话术生成 | 权限/性别/余额硬校验、防重复提交 |
| 决定是否跳转、跳哪 | 跳转标记注入、13 类码表校验 |

### 5.1 盖亚 API 工具（`tools/gaia/`）
| 工具 | 盖亚接口（详见接口适配清单） |
|------|------|
| `get_leave_balance(leave_type?)` | getemployeeleaveremaindata，按类型过滤在工具内做 |
| `get_leave_permissions()` | getEmployeeCanApplyLeaveType |
| `get_medical_period()` | medical/period/info/get |
| `get_employee_info()` | person/search-effective（工龄） |
| `get_schedule(start, end)` | getScheduleData |
| `submit_leave(type_name, start_date, end_date, start_time, end_time, leave_days, reasons, tool_context)` | **外部依赖：接口文档待业务方获取**。到位前为干跑模式（即 mock）：校验链全量执行，提交动作打日志返回模拟成功；**业务确认先用 mock 无限期替代**。接口到位后仅替换 `_do_submit` 实现 |

共用 `gaia_client` 内部模块（非工具）：JWT 按有效期缓存（旧系统每次重取，迁移即优化）、30s 超时 + 1 次重试（提交类除外）、生产/沙箱地址按 D8 配置化、清理 Apifox 残留请求头。employeeId 等一律从 session state 取。

### 5.2 规则工具（`tools/rules/`）
- `calc_end_date(type_name, start_date, days, schedule)`：27 类假期"是否跳过休息日"映射表推算（数据源：迁移梳理报告 §3.7，含 >27 天工作日收缩模式、按排班 OFF 班次跳休、自然日连续三种路径），纯函数。**不作为独立工具挂载**，由 `submit_leave` 校验链末步调用
- `calc_annual_leave()`：组合工具——员工信息 → 参工/本单位工龄 → 5/10 天档位折算 → 查余额 → 结构化结果
- `page_jump(permission_code)`：13 类码表校验（数据源：迁移梳理报告 §3.5），返回成功后写入 `state["pending_jump"]`，由回调注入跳转标记

### 5.3 submit_leave 内部校验链（顺序执行，任一不过即返回结构化原因）
1. 假期类型在员工可申请列表内（无权 → 告知）
2. 性别限假校验（产假/陪产假等清单）
3. 余额充足
4. 日期/时间合法性（0.5/1 天粒度、跨天修正、排班核对：首班 00:00 = 休息日/未排班 → "正常休息不用请假"/"还未排班"话术）
5. 全部通过 → 提交（干跑期打日志）

## 6. 输出形态与页面跳转标记

- 默认输出：自然语言。
- 页面跳转：回复文本末尾追加 `[[JUMP:<permissionCode>]]`，前端正则 `\[\[JUMP:([a-z-]+)\]\]` 识别后自动跳页并剥离标记。
- **标记不依赖模型自觉输出**：`callbacks/` 中的响应后回调检测到 `page_jump` 工具成功调用后，以代码方式在最终响应文本追加标记。模型只负责决定调工具与生成话术。

## 7. 错误处理与安全

- 工具异常统一返回 `{success: false, error_type, message}`；模型按 prompt 指引转述（不暴露技术细节），连续失败引导转人工。
- `submit_leave` 失败**绝不自动重试**（防重复提交），明确告知用户结果。
- 空输入/表情等异常输入由模型自然应对（旧系统的空判断节点不再需要）。
- 密钥（client_secret 等）仅在 session state 与工具层流转，不进 prompt。
- 工具与知识库返回内容一律视为数据而非指令（提示注入防护写入各 Agent prompt）。

## 8. 测试与验收（三层）

1. **规则层**：pytest 表驱动——27 类跳休推算、年假折算档位、跨天修正、校验链各分支。纯函数全量覆盖。
2. **工具层**：`gaia_client` 对沙箱环境/mock 测试（认证、超时、错误响应解析）。
3. **对话层**：评测集 30–50 条，取自旧系统真实分支样本（快捷日期 5 类、过去补登、多假种拒绝、性别限假、无权限、余额不足、休息日请假、13 类跳转、转人工、`_transparent_data_` 回填、咨询样例〔二期〕），断言"调用了哪个工具 + 回复要点 + 跳转标记"。veADK eval 扩展或 pytest 驱动。
4. **上线策略**：与旧系统并行灰度，同题双跑对照。

## 9. 项目结构

```
hr-agent/
  agents/        # main_agent / leave_agent / consult_agent（prompt + 工具挂载）
  tools/gaia/    # 盖亚 API 工具 + gaia_client（JWT 缓存）
  tools/rules/   # calc_end_date（跳休推算，非独立工具）/ calc_annual_leave / page_jump
  constants/     # 27 类跳休映射表、13 类码表、性别限假清单、固定话术
  callbacks/     # 跳转标记注入、日志
  schemas/       # 请假单内部 schema、工具返回结构
  tests/         # 规则单测 + 对话评测集
  config.yaml    # 模型/环境（生产/沙箱）配置
  deploy/        # AgentKit 部署配置（agentkit-sdk-python）
```

## 10. 分期计划

- **一期**：项目骨架 + 主 Agent + 请假 Agent + 查询/跳转工具 + `submit_leave` 干跑 + 规则单测 + 一期评测集 + 部署跑通（含两个首验证项）
- **二期**：咨询 Agent + AgentKit Knowledge 接入与调优 + `parse_document` + 咨询评测集
- 两期互不阻塞；二期启动依赖知识库文档从 FastGPT 后台导出（按迁移梳理报告第四章对照表）。

## 11. 风险与开发首验证项

| 项 | 说明 | 验证时机 |
|----|------|---------|
| Runtime 传参 | 业务变量注入 session state 的确切调用格式 | hello_world 部署阶段 |
| 跳转标记透传 | `[[JUMP:…]]` 经 Runtime 响应链路是否完整不变形 | hello_world 部署阶段 |
| 模型效果 | 全系换 doubao 后槽位提取/意图效果需评测集验证；不达标再调 prompt 或换档位 | 一期评测阶段 |
| 知识库效果 | 平台检索参数需重调，旧阈值不可照抄 | 二期调优阶段 |

## 12. 外部依赖清单（非开发项）

| # | 依赖项 | 当前状态 | 到位后做什么 | 核验清单 |
|---|---|---|---|---|
| 1 | 请假**提交**接口文档（业务方向盖亚/相关方获取） | 业务确认先用 mock 无限期替代；`submit_leave` 干跑即 mock | 实现 `_do_submit`，换掉干跑 | CHECKLIST C |
| 2 | 知识库原始文档导出（FastGPT 后台，按对照表定位 5 类库） | **已完成**：75 个文件已去重重分类到「知识库-已整理」4 目录 | 上传 AgentKit 建 4 个库，把库 ID 反馈后实现真检索 | CHECKLIST B |
| 3 | AgentKit 工作空间与方舟模型开通、盖亚沙箱可用性 | 方舟模型 Key 已配置；AgentKit 工作空间待开通 | 本地验证 state 传参 + JUMP 透传 → 部署 | CHECKLIST D |
| 4 | 评测集样本：旧系统各分支真实对话记录收集 | 22 条评测 case 已就位（一期 12 + 二期 10） | 跑 `pytest -m eval`，迭代 prompt 到全绿 | CHECKLIST A |
