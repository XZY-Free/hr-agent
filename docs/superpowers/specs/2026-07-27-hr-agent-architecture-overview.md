# 人力 AI 智能体（新系统）运行讲解

> 本文是新系统的"运行说明"——讲它建成后长什么样、怎么跑、和旧系统有何不同。
> 配套文档：
> - 《迁移梳理/业务细节与实现逻辑.md》——旧系统在做什么（验收基准）
> - 《specs/2026-07-25-hr-agent-design.md》——新系统为什么这么设计（规约）
> - 《plans/2026-07-25-hr-agent-phase1/2.md》——怎么造（施工手册）

---

## 文档导航

本项目共 7 份文档，按"看什么"分三类，建议第一次按顺序读：

| 你想了解 | 读哪份 | 一句话定位 |
|---|---|---|
| 新系统建成后长什么样、怎么跑 | **本文**（architecture-overview） | 运行讲解——俯瞰、调用链、运行流程、新旧对照 |
| 新系统为什么这么设计 | `specs/2026-07-25-hr-agent-design.md` | 设计规约——拓扑、工具边界、决策记录（D1–D9） |
| 新系统怎么造出来的 | `plans/2026-07-25-hr-agent-phase1.md` / `phase2.md` | 施工手册——逐任务 TDD 步骤与代码 |
| 旧系统在做什么、业务规则是什么 | `迁移梳理/业务细节与实现逻辑.md` | 验收基准——每条规则标【新系统承接】 |
| 旧系统的结构与资产盘点 | `迁移梳理/FastGPT工作流迁移梳理报告.md` | 全景盘点——应用树、知识库、模型、接口 |
| 盖亚接口的精确字段 | `迁移梳理/接口适配清单.md` | 接口字典——7 个接口的请求/响应字段 |
| 外部材料到位后怎么核验 | `hr-agent/docs/CHECKLIST.md` | 核验 runbook——A 模型Key / B 知识库 / C 提交链路（已闭环）/ D 部署 |

> 阅读顺序建议：**本文（看新系统全貌）→ 业务细节文档（对照旧系统预期行为）→ design.md（看设计取舍）**。施工细节和接口字段按需查阅。

---

## 一、一句话定位

**一个部署在火山 AgentKit 上的全闭环对话智能体**：后端把用户消息和业务身份变量送进来，它自己理解意图、自己调盖亚接口查数据、自己调提交工具办请假、用自然语言回复用户——不再是"输出 JSON 让后端去办"的工作流了。

> 注意一个根本性的转变：旧系统是**工作流**（固定流程、穷举分支、最后吐 JSON 给后端去调接口）；新系统是**智能体**（模型自主决策、自己调接口、直接用自然语言回结果）。本文讲的就是这个新形态建成后的样子。

---

## 二、调用链（从后端到用户看到回复）

```
后端
  │  POST Runtime/run_sse
  │  body: { session_id, message, state:{employeeId,corp_id,client_secret,grant_type}, files? }
  ▼
AgentKit Runtime（全托管，serverless 秒级扩缩）
  ▼
root_agent（主 Agent，模型 doubao-seed-1.6）
  │  ─ 意图理解 & 分发
  │  ─ 自己直接处理：页面跳转 / 转人工 / 寒暄 / 余额·医疗期·年假查询
  │  ─ transfer ─────► leave_agent（请假）
  │  └─ transfer ─────► consult_agent（咨询）
  ▼
工具层（function tools）
  │  盖亚 API ×5 + submit_leave（干跑）+ 跳休推算 + 年假折算 + kb_search + parse_document + page_jump
  ▼
after_model_callback（jump_marker）
  │  检测到 page_jump 成功 → 在回复末尾注入 [[JUMP:code]]
  ▼
SSE 流式回 → 后端 → 用户
```

关键点：业务变量（employeeId 等）注入 ADK **session state**，所有工具从 state 读，**密钥从不进 prompt、不进模型上下文**。

---

## 三、Agent 拓扑

以下是代码里的真实挂载关系（见 `agents/main_agent.py` / `leave_agent.py` / `consult_agent.py`）：

```
root_agent（主 Agent，model=doubao-seed-1.6）
├── tools:  [page_jump, get_leave_balance, get_medical_period, calc_annual_leave]
│   └─ calc_annual_leave 内部组合调用 get_employee_info + 余额查询
├── after_model_callback: jump_marker_callback   ← 注入 [[JUMP:code]] 标记
└── sub_agents
    │
    ├── leave_agent（请假 Agent）
    │   └── tools: [get_leave_permissions, get_leave_balance, get_schedule, submit_leave]
    │       └─ submit_leave 内部串联调用：
    │            get_leave_permissions → get_employee_info → get_schedule
    │            → get_leave_balance → calc_end_date（27类跳休推算，纯函数，非工具）
    │
    └── consult_agent（咨询 Agent，二期）
        └── tools: [kb_search, parse_document, get_leave_balance, get_medical_period, calc_annual_leave]
```

每个 Agent 的分工：
- **主 Agent**：意图分发 + 单轮问答（查询/跳转/转人工/寒暄）。不碰请假流程细节，不碰知识库。模型每轮重新判意图，不会被历史锁定在某个分支。
- **请假 Agent**：请假全流程——提槽、缺槽追问、复述确认、提交。挂的正是它直接调用的 4 个工具。
- **咨询 Agent**：检索知识库、解析文档、专家回答、末尾附追问。除 kb_search/parse_document 外，还挂了查询类工具（个人数据类问题不走知识库）。

分工原则是 **prompt 聚焦、工具集对齐职责**——每个 Agent 的 prompt 只写自己那一域的规则，工具只挂自己要用的，模型选择准确率高，改一处不全局回归。

> **为什么 `calc_end_date`（27 类跳休推算）不是独立工具？** 它是纯确定性规则函数，没有外呼、没有副作用，是 `submit_leave` 校验链的末步（用来校正 end_date）。把它做成独立工具反而给模型一个"可不调用就走捷径"的机会——确定性规则必须在代码链里强制执行，模型绕不过去。这正是"模型管解和决策，代码管规则和事实"原则的体现。同理 `calc_annual_leave` 作为独立工具是因为它本身就是一个"组合查询动作"（工龄折算+余额），模型需要主动决定何时查年假。

---

## 四、工具层（按目录分层）

```
tools/gaia/                 ← 盖亚 OpenAPI（外呼）
  client.py                 JWT 缓存 + 统一请求（生产/沙箱按原样）
  leave_query.py            get_leave_balance / get_leave_permissions
  employee_query.py         get_medical_period / get_employee_info
  schedule_query.py         get_schedule
  submit.py                 submit_leave（校验链 + 干跑，接口待接）

tools/rules/                ← 纯规则（无外呼，确定性）
  leave_dates.py            calc_end_date（27 类跳休推算）
  annual_leave.py           calc_annual_leave（工龄折算）
  page_jump.py              page_jump（13 类码表）
  kb_search.py              kb_search（scope 5 档）
  parse_document.py         parse_document（COS 链接→文本）

knowledge/                  ← 知识库抽象（二期）
  backend.py                KnowledgeBackend 接口 + 工厂
  local_stub.py             本地桩（开发/评测）
  agentkit_backend.py       真库占位（NotImplementedError，待库 ID）

constants/                  ← 业务规则资产（原文，一字不改）
  leave_rules.py            27 类跳休表 / typeCode / 性别限假
  page_codes.py             12 类跳转码
  phrases.py                固定话术

callbacks/jump_marker.py    ← 跳转标记注入（代码层，非模型输出）
schemas/                    ← ok/err 统一结构 + LeaveForm
```

**核心原则：模型管解和决策，代码管规则和事实。** 凡是"有标准答案"的东西（27 类跳休、性别限假、年假折算舍入、跳转码表）全在代码层，模型绕不过去；模型只管理解、追问、说话术。

---

## 五、状态流与会话记忆

### 5.1 session state 承载一切
```
后端注入 ─► session state ──┬──► employeeId/corp_id/client_secret/grant_type（只读，工具取用）
                             ├──► typeName/startDate/...（槽位，跨轮累积）
                             └──► pending_jump（page_jump 写入，回调消费后清除）
```

旧系统 20+ 个全局变量 + tag 状态机，全部收敛到 **ADK session state** 一个地方，跨 Agent 共享。多轮对话的"记住"由 state 承担，不再需要"变量更新节点"。

### 5.2 session state 的读写时机（代码层细节）

state 里存三类东西，读写时机各不相同：

| state 字段 | 谁写 | 谁读 | 何时 |
|---|---|---|---|
| `employeeId` / `corp_id` / `client_secret` / `grant_type` | **调用方**（后端创建会话时注入） | 所有工具经 `from_state(state)` / `state["employeeId"]` | 每次工具调用时只读取出，从不修改 |
| `pending_jump` | `page_jump` 工具调用成功后写入 | `jump_marker_callback` 读出并注入标记后 **清除** | 单轮内写→下一轮回调消费 |
| 槽位（typeName/日期…） | 模型从对话历史提取后存入 | 跨轮累积，工具按需读取 | 整个会话期间 |

**关键点 · 业务变量的读取路径**：
```python
# tools/gaia/employee_query.py 实际写法
state = tool_context.state
client = from_state(state)                          # 用 corp_id/client_secret/grant_type 构造 JWT
body = client.request("prod", "GET", ".../medical/period/info/get",
                      params={"employeeId": state["employeeId"]},   # employeeId 单独传
                      tenant=state["corp_id"])
```
注意 `from_state()` 只取三个密钥相关字段构造 client，`employeeId` 是工具调用时单独从 state 取的——**密钥只用于获取 JWT，绝不进 prompt、绝不进模型上下文**。这是设计文档 D7/D9 和安全约束在代码里的落地。

**关键点 · pending_jump 的生命周期**：
```
模型决定跳转 → 调 page_jump("punch-details") → 工具校验码表合法 → 写 state["pending_jump"]="punch-details"
   ↓
模型生成话术（"已为您打开打卡明细"）→ after_model_callback 触发
   ↓
jump_marker_callback：
   1. state.get("pending_jump") 取到 code
   2. 检查本轮 llm_response 是否含 function_call part → 有则跳过（模型还在调工具，等下一轮）
   3. 找最后一个 text part，追加 "\n[[JUMP:punch-details]]"
   4. 清除 pending_jump，防止重复注入（ADK 的 State 没有 pop()，置 None 清除；
      回调用 getattr 容错兼容普通 dict 的 pop，故单测与真机都正确）
   ↓
返回带标记的最终文本 → SSE 流给后端 → 前端正则识别跳页并剥离
```
这套机制保证标记**由代码注入而非模型输出**——模型只需决定"跳哪+说什么"，不会因为模型忘了输出标记而导致跳转失效。

### 5.3 会话记忆：有短期，无长期
| 记忆类型 | 新系统 | 旧系统 |
|---|---|---|
| 短期记忆（同一会话对话历史） | ✅ ADK session 自带 | ⚠️ 55/60 节点 history=0，靠全局变量硬记 |
| 跨会话长期记忆 | ❌ 没有，也不需要 | ❌ 没有 |
| 业务槽位 | ✅ session state | ✅ 全局变量 |

新系统**有完整的短期记忆**——同一会话里用户说过的每句话、智能体回过的每句话，模型下一轮都能看到。这一点比旧系统还强。

**为什么旧系统要 history=0？** 它是"节点级单次调用"的工作流形态——每个分类/提取节点只想知道当前输入做判断，不想被历史干扰。新系统是"Agent 级持续对话"，历史是它的眼睛。

**新旧记忆方式的本质区别**：
- 旧系统：模型每轮只看到当前这一句，"记得上文"全靠工作流把信息提取出来写进全局变量，下一轮再塞回 prompt——所以才有 20+ 全局变量和 177 个变量更新节点，记忆是被工作流硬编码搬来搬去的。
- 新系统：模型每轮自动看到完整对话历史，槽位由模型从历史里自主提取存进 state 给工具用。

### 5.4 多轮追问的完整时序（含工具调用）

以一个缺槽补全场景走一遍，看 state 和历史如何配合：

```
轮1  用户："下周想请假"
     ├─ root_agent：带历史（首轮为空）→ 判意图=请假 → transfer leave_agent
     ├─ leave_agent：从这句理解到"下周请假"，但缺 typeName（哪种假）和具体日期
     ├─ 追问："好的，请问想请哪种假？年假、事假还是其他？"
     └─ state：槽位部分填充（请假意图已明确）；历史追加本轮对话

轮2  用户："年假，周三到周五"
     ├─ leave_agent（带历史：能看到轮1的"下周想请假"）→ 提槽全齐：
     │     typeName=年休假、startDate=下周三、endDate=下周五、leaveDays=3
     ├─ 复述确认："已为您准备下周三到周五的年休假 3 天，事由默认填'个人事务'，确认提交吗？"
     └─ state：槽位齐；等待用户确认

轮3  用户："确认"
     ├─ leave_agent → 调 submit_leave(type_name="年休假", start_date=..., end_date=..., leave_days=3, ...)
     │     ├─ get_leave_permissions → 年休假在权限列表 ✓
     │     ├─ get_employee_info → 性别不限 ✓
     │     ├─ get_schedule(下周三, 下周三) → 非休息日 ✓
     │     ├─ get_leave_balance("年休假") → 余额 4 天 ≥ 3 ✓
     │     ├─ calc_end_date → 按跳休规则校正 endDate（年假跳过休息日）
     │     └─ 干跑：返回模拟成功
     └─ 回复："已为您提交下周三到周五的年休假申请，用了 3 天，剩余年假 1 天。"
```

要点：
- **历史是眼睛**：轮2 模型能看到轮1 的"下周想请假"，所以"年假"才接得上——如果像旧系统 history=0，轮2 模型只看到"年假，周三到周五"会一脸懵。
- **state 是工作内存**：槽位累积在 state 里，但实际本轮模型也能从历史里重新提取——state 更多是给工具用的结构化数据。
- **确认后才提交**：prompt 规定"提交前复述确认，用户确认后才调 submit_leave"——防止误操作。
- **submit_leave 失败不重试**：防重复提交，失败就如实转述给用户。

### 5.5 分发为何每轮重做

用户可能在中途切换意图，这是工作流形态最难处理、智能体形态最自然的场景：

```
轮1  用户："我还有几天年假"
     → root_agent 判意图=查询 → 调 get_leave_balance → 回复"您还有 4 天年假"
轮2  用户："那帮我请一天"
     → root_agent 重新判意图（不被轮1的"查询"锁定）→ 判意图=请假 → transfer leave_agent
```

旧系统反而更易在这种场景出问题——它靠 `tag` 变量标记"当前在请假流程中"，一旦 tag 设错或上一轮没清零，就会卡在错误的状态机分支里出不来。新系统每轮重判意图，状态靠历史自然延续而非硬编码标记。

### 5.6 部署时的记忆后端注意
代码现在是 `ShortTermMemory(backend="local")`（存当前进程内存）。两个隐含前提：
1. **单实例够用**：local 后端意味着多实例间会话不共享。一期流量小没问题；**多实例/弹性扩缩要换数据库后端**（veADK 支持，官方有 vikingmem 示例）。
2. **重启会丢**：进程重启历史清空。短会话场景影响不大，但心里有数。
**部署到 AgentKit 第一件事：确认记忆后端是否要换**（见 CHECKLIST.md D 步）。

---

## 六、与旧系统对照——消失了什么

| 旧系统 | 新系统 |
|---|---|
| 24 份导出、21 个应用、60 个 LLM 节点 | 3 个 Agent + ~13 个工具 |
| 快捷 a1–a5/B 七个同构子流程（只差日期偏移） | **删除**——模型理解口语日期 + get_schedule 查证 |
| 非快捷 C 线 126 节点状态机 + 4 个提取节点 + 合并 JSON | 请假 Agent：模型一次提槽 + 缺槽追问 |
| 150 个 ifElse 判断节点 + 177 个 variableUpdate | 模型自主决策 + session state |
| 10 种模型按节点各配一套 | 一个 doubao-seed-1.6（thinking 缺省关闭；模型与 thinking 档位可按 agent 覆盖，见 `agents/model_config.py`）|
| 组装 JSON 吐给后端去提交 | submit_leave 跑完整校验链后输出请假单 JSON，**仍由后端提交**（业务确认的调用链，见 §9.3）|
| 11 个知识库检索节点 + 3 个合并节点 | kb_search 一个工具按 scope 定向 |
| 每次调用重新 oauth | JWT 缓存 25 分钟 |

**复杂性从"穷举分支"转移到了"模型理解"**——这正是迁移初衷：FastGPT 的繁琐来自工作流形态不能让 AI 自主决策，智能体形态下同样业务逻辑一两句规则就表达完了。

---

## 七、旧系统节点如何整合进新系统（关键）

旧系统 60 个 LLM 节点 + 169 个代码节点，按"它到底在做什么"分三类处理：

| 类型 | 旧系统里是什么 | 整合方式 |
|---|---|---|
| **A. 业务规则判断** | 27 类跳休、性别限假、权限校验、年假折算、码表 | **落成代码，不让模型碰** |
| **B. 语言理解/对话** | 意图分类、槽位提取、追问、问题改写、专家回答 | **改写成 Agent prompt，但不照搬** |
| **C. 工作流胶水** | 4 提取节点合并 JSON、变量更新、ifElse、节点间传参 | **直接丢弃** |

### 7.1 A 类：不进 prompt，落成代码
有标准答案、不允许模型自由发挥的东西。例——27 类跳休规则：
- 旧：JavaScript 代码节点（三路径：>27天收缩 / 跳过休息日 / 连续自然日）。
- 新：`calc_end_date` 纯函数 + `SKIP_RESTDAY_MAP` 常量，**逐行移植，一字未改**（函数名在实现时定为 `calc_end_date`，含义为"校正结束日期"）。
- **为什么不进 prompt**：确定性规则不能让模型某次算错。模型管解和决策，代码管规则和事实。

属于这类的还有：性别限假表、typeCode 编码、13 类跳转码、年假折算 floor 舍入、submit_leave 校验链顺序。**全部代码，模型绕不过去。**

### 7.2 B 类：进 prompt，但不照搬
**没有照搬，也不能照搬**，三个原因：

**原因 1 · 范式不同**：旧意图分类是"单次调用只输出标签"（history=0）；新 Agent 是持续对话，照搬"只输出标签"就没法多轮对话了。→ **保留判断规则（一票否决、四分类优先级），丢弃"只输出标签"范式。**

**原因 2 · 多步合并成一次**：旧 C 线用 4 个 contentExtract 节点并行提取 + 合并 JSON；新请假 Agent 一次调用提全槽位。→ **保留提取规则（严格匹配假期名、口语日期理解），丢弃"4 节点并行合并"结构。**

**原因 3 · 角色定位冲突**：旧"问题改写"节点 prompt 写"你绝对不是问答机器人"——在独立节点合理，但咨询 Agent 是完整对话角色，照搬就没法回答了。→ **改写能力融进咨询 Agent 整体 prompt，不设单独改写步骤和角色禁令。**

### 7.3 C 类：直接丢弃
纯粹因"工作流没法让 AI 自主决策"才存在的节点：177 个 variableUpdate、150 个 ifElse、快捷 7 子流程、4 提取+合并、tag 状态机。**这类节点没有业务逻辑，只有工作流形态的妥协，存在本身就是要被消除的。**

### 7.4 整合判断标准
```
这个节点在做什么？
  ├─ 有标准答案的业务规则？ → 落代码，不进 prompt
  ├─ 是语言理解或对话行为？ → 提取判断规则，丢弃调用范式
  └─ 只是工作流胶水？       → 丢弃
```
一句话：**业务规则代码化，理解能力 prompt 化（但不照搬范式），工作流胶水丢弃。**

### 7.5 B 类整合怎么验证对错
最主观、最难验证——光看代码看不出来，**必须靠评测集跑**。22 条 case 里有"一票否决""纯类型归咨询""追问基于知识库"等断言，专门验证 B 类整合有没有漏掉规则。

---

## 八、走一遍例子：「明天请一天年假」

```
用户："明天请一天年假"
  ▼
root_agent：意图=请假 → transfer leave_agent
  ▼
leave_agent：
  • 从消息理解：typeName=年休假、日期=明天、leaveDays=1
  • 复述确认："已为您准备明天（如 7-28）的年休假 1 天，事由默认'个人事务'，确认提交吗？"
  │  用户："确认"
  ▼
  • 调 submit_leave(type_name="年休假", start_date="2026-07-28", end_date="2026-07-28",
                    start_time="09:00", end_time="18:00", leave_days=1, reasons="个人事务")
      校验链（按 submit.py 实际顺序，任一失败即返回对应 err）：
      ① get_leave_permissions → 年休假在可申请列表 ✓ （不在 → no_permission）
      ② 年休假不在性别限假表内 → 跳过 get_employee_info （仅限假命中时才查性别）
      ③ get_schedule(7-28, 7-28) → 首班非 00:00，非休息日 ✓ （00:00 → rest_day；空 → not_scheduled）
      ④ get_leave_balance("年休假") → 余额 4 天 ≥ 1 ✓ （不足 → insufficient_balance）
      ⑤ leave_days=1 是 0.5 整数倍且 >0 ✓
      ⑥ get_schedule(7-28, 7-28) 全范围 + calc_end_date 校正 end_date（年假跳休，1天=当天）
      ⑦ 干跑：打印 payload，返回 {submitted:false, dry_run:true, form:...}
  • 回复："已为您提交 7 月 28 日的年休假申请，用了 1 天，剩余年假 3 天。"
  ▼
后端收到 SSE 流 → 展示给用户
```

对比旧系统：同样的请求要走主流程分类 → 请假意图判断 → "是否最快捷"代码判断 → a2（明天）子流程 → 文本拼接排班 → 休息日判断 → 半天判断 → 权限/性别/余额校验 → 组装 JSON → 指定回复，**十几个节点链路压缩成 2 次模型调用 + 若干次工具调用**。

注意校验链的两个设计细节：
- **性别校验是条件触发**：只有当 `type_name` 命中 `LEAVE_GENDER_MAP`（9 类限假）才调 `get_employee_info` 查性别。年假这种不限性别的假期省一次接口调用。
- **排班查两次**：第一次只查首日判断是否休息日/未排班（早失败省后续调用）；第二次查完整范围供跳休推算校正 end_date。

---

## 九、当前状态与待接外部点

代码全部就位（一期 14 任务 + 二期 8 任务，共 22 个 commit；`uv run pytest` 82 个单测全绿）。外部接入进展：

| 项 | 现状 | 到位后做什么 | 核验清单 |
|---|---|---|---|
| ✅ 模型 Key | 方舟 Key 已配 `.env`，22 条评测 **22/22 通过、全量 128.7s**（关 thinking 后连跑三轮稳定全绿）。修了 6 个真实 bug（详见下方）+ 评测断言的系统性缺陷 | 断言已改验语义而非枚举措辞；回归成本已降到 2 分钟，可连跑多轮验稳定 | CHECKLIST A |
| ✅ 知识库真检索 | **已接通**：`KB_BACKEND=agentkit` + 火山 AK/SK，4 个 Viking 知识库按 scope 定向检索（绕过 veADK 封装拿原始 score/doc_name），三库端到端验证通过 | 已知内容缺口与检索质量问题记入 CHECKLIST B.6（病假工资缺失、"加班调休"召回育儿假、top1 常不相关且 score 普遍 0.2~0.3），需业务补文档 + 控制台调分段 | CHECKLIST B |
| ✅ 请假提交 | **无需接口——智能体侧本就不提交**：2026-07-25 业务确认调用链为「后端 → 智能体」，智能体只输出请假单 JSON，后端拿到后自行调盖亚接口提交（见 `迁移梳理/接口适配清单.md` §8、迁移报告 §9.3）。故 `GAIA_DRY_RUN=true` 返回 form payload 就是交付形态，此前把本项列为"待接口文档"是记录错误 | 若将来改为智能体直连，`_do_submit` 已有可运行示例实现（`GAIA_DRY_RUN=false` 启用，3 条 mock 单测），拿到文档核对路径/字段名/成功判定三处 | CHECKLIST C |
| 部署 | 待火山云账号 | 本地 client 验证 state 传参 + JUMP 透传 → 部署 | CHECKLIST D |

> 知识库接入的两个实现细节（写进 `agentkit_backend.py`）：① veADK 的 `KnowledgeBase.search()` 会丢 score 和 doc_name，故绕过它直接调底层 `VikingKnowledgeBaseService.search_knowledge()` 取原始 `result_list`；② VikingDB 免费档有 QPS 限制，瞬时限流时等 1.2s 重试一次。

> 评测首轮暴露并修复的 bug（评测之前一直 skip 待 Key，从未真跑过）：① `conftest` 不加载 `.env`，真实 Key 被 dummy 覆盖致评测永远 skip；② `run_async` 不自动建 session，须先 `create_session`（对齐 `Runner.run()` 内部）；③ `_collect_event_data` 未过滤 `part.thought`，doubao-seed-1.6 的推理链污染关键词断言（对齐 `Runner.run()` 用 `not part.thought`）；④ `jump_marker_callback` 用 `state.pop()`，但 ADK `State` 无 `pop` 方法，改为 getattr 容错（dict 走 pop、State 置 None）；⑤ 今天日期未注入 prompt，模型靠排班 shiftDate 反推致口语日期漂移，改为构造时 `date.today()` 经 `{today}` 占位符注入；⑥ 评测 stub 排班不过滤日期范围致 submit 误判休息日，改为按 `startDate/endDate` 过滤。另有 `kb_search` 单测依赖全局 `.env` 后端，真库配置下误走真库，改为显式挂桩。

### 9.6 评测方法论（2026-07-30，代价换来的经验）

**断言全绿 ≠ 答得对。必须读执行轨迹。** 评测已落盘完整轨迹到 `tests/eval/logs/`
（每轮工具调用+入参+返回、各 agent 思考字数、耗时、相对跑批开始的时间偏移、
断言失败的具体原因）。只看断言时漏掉的真问题：

- `calc_annual_leave`（二期专门实现、含跨档年分段折算）在"我的年假是怎么折算的"
  这种最典型问法下**根本没被触发**——被当成制度咨询去查了知识库。根因是 prompt
  里"个人数据"规则埋在第 3 条第 3 小点，而"人力范畴→kb_search"在第 2 条，模型先
  匹配到前面的。提为第 1 条 a) 分支后修复
- `policy_sick_pay` 断言全过（调了 kb_search、不含"敬请期待"），实际回答是"暂时
  没有查到病假工资制度"。查证真库确实没这块内容（三种问法 top score ≤0.29），
  于是这条 case 验的其实是拒答（已由 kb_empty_honest 覆盖），验不到目标能力

**断言要验语义，不要枚举措辞。** 枚举完整短语必然漏同义变体，导致每轮全量都有
1~2 条不同 case 因措辞假失败——而这类假失败会被记成"模型随机性"，进而掩盖真缺陷。
实例：断言写"已提交/提交成功"，模型说"已成功提交"（字序不同）；断言写"什么类型"，
模型说"类型是什么"。改法：用单字/词级必含词（"提交"、"类型"），严格性靠
`expect_tool` 保证；数字断言补中文变体。

**多轮 case 的结论可能出现在任意一轮。** `final_text` 只保留最后一轮，会把"模型
更早给出结论"误判为失败——`rest_day` 关 thinking 后第 1 轮就识别休息日并告知
（6.5s，且省掉一次明知会失败的 submit），比开 thinking 时快 8 倍，却因为第 2 轮
的追问覆盖了"休息"二字而掉红。若只看分数会误判成"关 thinking 降低能力"而放弃
这个降 79% 延迟的优化。已加 `expect_keywords_anywhere` / `expect_any_keyword_anywhere`
在各轮回复拼接上断言：验"说过某结论"用 `_anywhere`，验"最终回复必须是什么"用
`final_text`。

**评测桩的日期必须相对今天生成。** 排班桩曾硬编码 `07-27..07-31`，随日期推移必然
失效——"明天"某天就落到桩范围外，模型查不到排班会反复重试直至卡死（`gender_mismatch`
曾因此卡死 6 次 get_schedule）。已改为 `today-7..today+14`、`today-2` 为休息日，
case 文本支持 `<today>/<tomorrow>/<yesterday>/<rest_day>` 占位符。

**基础设施故障要能与模型行为问题区分。** litellm 偶发
`InternalServerError: Connection error`，曾连续两轮命中末尾三条，一度误判为"必然
在末尾崩"（实为间歇性，重跑即过）。轨迹日志的"异常中断于第 N 轮 + 时间偏移"可区分
它与断言失败。

外部材料按 `hr-agent/docs/CHECKLIST.md` 顺序核验。模型、知识库、提交链路均已就位，**唯一外部阻塞是部署所需的火山云账号（D）**；代码侧不再有阻塞。

---

## 十、验收检查点

评测时拿这些"预期行为"对照（源自《业务细节与实现逻辑.md》第八章）：

1. "我要请年假和事假" → 拒绝，要求分开提交
2. "请假会扣钱吗" → 走咨询，不发起请假（一票否决）
3. "我想休年假，系统卡了" → 咨询（异常一票否决）
4. 请休息日的假 → "正常休息不用请假"，不出请假单
5. 女员工请陪产假 → 拒绝（性别门）
6. 无权限假期 → "你无权申请该假期"（权限门）
7. 余额不足 → 拒绝（余额门）
8. 周五开始请 3 天年假 vs 3 天婚假 → 结束日期不同（跳休 vs 连续）
9. "育儿假有几天"没说省份 → 先追问省份
10. 问迟到扣款 → 引用制度原文数字，不编造
11. "打开打卡明细" → 回复末尾带 `[[JUMP:punch-details]]`
12. "转人工" → 回复转人工引导话术
13. "取消明天的请假" → 回复固定取消话术，不进请假流程
14. "明天" → 走请假（纯时间要素）
15. "年假" → 走咨询（纯类型无动词）
