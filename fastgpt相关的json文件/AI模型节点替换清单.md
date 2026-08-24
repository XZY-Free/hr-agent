# AI 模型节点替换清单

> 生成日期：2026-08-14 ｜ 全量扫描三类模型节点：**AI对话 / 内容提取 / 问题分类**，共 60 个节点

## 可用模型列表

| 模型 | 定位 |
|---|---|
| DeepSeek-V4-Pro | 旗舰，Agent/深度推理 |
| DeepSeek-V4-Flash | 高效经济，高频对话 |
| Qwen3.7-Max | 通义旗舰，深度推理 |
| Qwen3.7-Plus | 通义中端，多模态全能主力 |
| Qwen3.7-Flash | 通义轻量，极速低成本 |
| qwen-plus | 保留 |
| qwen-max | 保留 |

## 一、映射总览

| 原模型(显示名) | 原模型ID | 次数 | 推荐替换 | 理由 |
|---|---|---|---|---|
| qwen-plus | `qwen-plus` | 29 | **Qwen3.7-Plus** | 通义中端主力 |
| qwen-max | `qwen-max` | 10 | **Qwen3.7-Max** | 通义旗舰 |
| qwen3-235b-a22b-instruct-2507 | `qwen3-235b-a22b-instruct-2507` | 9 | **Qwen3.7-Max** | 通义开源大模型(235B MoE) |
| qwen3-max | `qwen3-max` | 4 | **Qwen3.7-Max** | 通义旗舰 |
| 阿里-DeepSeek-v3.2 | `ali_deepseek-v3.2` | 2 | **DeepSeek-V4-Pro** | 阿里托管的DeepSeek第三方，按旗舰能力替换 |
| ERNIE-4.0-Turbo-128K | `ERNIE-4.0-Turbo-128K` | 2 | **Qwen3.7-Flash** | 文心字段提取，纯结构化输出，轻量档足够 |
| Doubao-lit-4k | `ep-20241225182328-2pz7p` | 1 | **DeepSeek-V4-Flash** | 寒暄对话，轻量高频，用高效经济档 |
| qwen3.7-max | `qwen3.7-max` | 1 | **Qwen3.7-Max** | 已是新模型 |
| qwen3.6-plus | `qwen3.6-plus` | 1 | **Qwen3.7-Plus** | 通义中端 |
| glm-4.7 | `glm-4.7` | 1 | **DeepSeek-V4-Pro** | 智谱第三方旗舰，Agent能力对标，旗舰替换 |

## 二、按流程明细（60 条）

### 主流程-1.json（2 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| AI对话 | AI 对话 | qwen-plus | **Qwen3.7-Plus** |
| 问题分类 | 问题分类 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里的测试-AI助手能力拓展 .json（3 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 问题分类 | 问题分类 | 阿里-DeepSeek-v3.2 | **DeepSeek-V4-Pro** |
| 问题分类 | 问题分类#2 | qwen-plus | **Qwen3.7-Plus** |
| 问题分类 | 问题分类#3 | 阿里-DeepSeek-v3.2 | **DeepSeek-V4-Pro** |

### 主流程里的测试-AI助手能力拓展 中的AI考勤-查询假期余额.json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 文本内容提取 | ERNIE-4.0-Turbo-128K | **Qwen3.7-Flash** |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（下周a5） .json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 请假理由提取-4#7 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（今天a1）.json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 请假理由提取-4#7 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（后天a3）.json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 请假理由提取-4#7 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（大后天a4）  .json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 请假理由提取-4#7 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（明天a2）.json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 请假理由提取-4#7 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（昨天前天B）.json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 请假理由提取-4#7 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里的测试-请假意图判断 .json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 问题分类 | 问题分类 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里面的人力AI咨询（新）.json（31 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| AI对话 | AI寒暄 | Doubao-lit-4k | **DeepSeek-V4-Flash** |
| AI对话 | 迟到计算 | qwen-max | **Qwen3.7-Max** |
| AI对话 | AI 回答#10 | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| 问题分类 | 问题分类#3 | qwen-plus | **Qwen3.7-Plus** |
| AI对话 | 早退计算-core | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| AI对话 | 迟到计算#12 | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| AI对话 | 早退计算#13 | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| AI对话 | AI 回答#13 | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| AI对话 | AI 回答#14 | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| AI对话 | AI 对话#15 | qwen-plus | **Qwen3.7-Plus** |
| AI对话 | AI 对话#16 | qwen3-max | **Qwen3.7-Max** |
| AI对话 | AI 对话#17 | qwen3.7-max | **Qwen3.7-Max** |
| 问题分类 | 问题分类#5 | qwen-plus | **Qwen3.7-Plus** |
| 问题分类 | 问题分类#4 | qwen-plus | **Qwen3.7-Plus** |
| AI对话 | AI 对话#15 | qwen-plus | **Qwen3.7-Plus** |
| AI对话 | AI 对话#15 | qwen3-max | **Qwen3.7-Max** |
| AI对话 | AI 对话#16 | qwen3-max | **Qwen3.7-Max** |
| AI对话 | AI 对话#18 | qwen-plus | **Qwen3.7-Plus** |
| AI对话 | AI 对话#16 | qwen-max | **Qwen3.7-Max** |
| AI对话 | AI 对话#18 | qwen3-max | **Qwen3.7-Max** |
| AI对话 | 早退计算 | qwen-max | **Qwen3.7-Max** |
| AI对话 | 早退计算-complementary | qwen-max | **Qwen3.7-Max** |
| AI对话 | 迟到计算-complementary | qwen-max | **Qwen3.7-Max** |
| AI对话 | 迟到计算-core | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| AI对话 | 早退回答-final | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| AI对话 | 迟到回答-final | qwen3-235b-a22b-instruct-2507 | **Qwen3.7-Max** |
| AI对话 | 问题改写 | qwen-plus | **Qwen3.7-Plus** |
| AI对话 | 名词解释#25 | qwen-plus | **Qwen3.7-Plus** |
| AI对话 | AI 对话#26 | qwen3.6-plus | **Qwen3.7-Plus** |
| AI对话 | 生成追问#27 | qwen-max | **Qwen3.7-Max** |
| AI对话 | AI 对话_用户问题与非人力关键词的语义比较 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json（14 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 问题分类 | workflow:question_classification | qwen-max | **Qwen3.7-Max** |
| 内容提取 | 时间提取-3 | qwen-plus | **Qwen3.7-Plus** |
| 内容提取 | 日期提取-2 | qwen-plus | **Qwen3.7-Plus** |
| 内容提取 | 休假类型提取-1 | qwen-max | **Qwen3.7-Max** |
| 内容提取 | 请假理由提取-4 | qwen-plus | **Qwen3.7-Plus** |
| AI对话 | AI 对话 | glm-4.7 | **DeepSeek-V4-Pro** |
| 内容提取 | 请假理由提取-4#7 | qwen-plus | **Qwen3.7-Plus** |
| 内容提取 | 真实时间提取-3#7 | qwen-max | **Qwen3.7-Max** |
| AI对话 | AI 对话#2 | qwen-plus | **Qwen3.7-Plus** |
| 内容提取 | 真实时间提取-3#8 | qwen-plus | **Qwen3.7-Plus** |
| 内容提取 | 休假类型提取-1#8 | qwen-plus | **Qwen3.7-Plus** |
| 问题分类 | 问题分类#2 | qwen-plus | **Qwen3.7-Plus** |
| 内容提取 | 日期提取-2#9 | qwen-plus | **Qwen3.7-Plus** |
| 内容提取 | 修改时间提取-2#10 | qwen-plus | **Qwen3.7-Plus** |

### 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的AI考勤-查询假期余额#4.json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 文本内容提取 | ERNIE-4.0-Turbo-128K | **Qwen3.7-Flash** |

### 根据休假类型去判断是否跳过休息日.json（1 个）

| 节点类型 | 节点名称 | 原模型 | 推荐替换 |
|---|---|---|---|
| 内容提取 | 休假类型提取-1#2 | qwen-max | **Qwen3.7-Max** |
