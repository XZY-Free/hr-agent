# FastGPT Workflow - answerNode 节点完整清单

> 生成时间: 2026/7/30 15:25:18
> 数据来源: `/Users/sunshine/IdeaProjects/人力agent/fastgpt相关的json文件`
> 总计: **97** 个 answerNode 节点，分布在 **22** 个文件中

---

## 统计摘要

| 类型 | 数量 | 占比 |
|------|------|------|
| **JSON模板输出** | 22 | 22.7% |
| **文本/动态模板输出** | 39 | 40.2% |
| **动态引用输出** | 36 | 37.1% |
| **总计** | **97** | 100% |

---

## 一、JSON格式输出的节点 ⭐ 重点关注

以下节点的输出内容为 **JSON格式**（可能包含变量引用 `{{variable}}`），需要特别注意：

### 📁 工作流: 主流程-1.json

#### 指定回复#4
- **文件路径**: `主流程-1.json`
- **节点ID**: `oHlMHjt05AILvDu2`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$e0R84B4Wu0AfosQg.answerText$}}
```

---
#### 指定回复#10
- **文件路径**: `主流程-1.json`
- **节点ID**: `lgzf2TfzUazMhR0a`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$qsBLZ4thwmiXIjl2.system_text$}}
```

---
#### 指定回复#11
- **文件路径**: `主流程-1.json`
- **节点ID**: `mbskoCmlbM85T7L1`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$eUgmlwoXsXWJx79C.qLUQfhG0ILRX$}}
```

---
#### 指定回复#11
- **文件路径**: `主流程-1.json`
- **节点ID**: `m17JnfA2zLyXr8dh`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$lSu1uLWZwjnoukKS.ygLCJWKqY1aEF4cI$}}
```

---
#### 指定回复#13
- **文件路径**: `主流程-1.json`
- **节点ID**: `wC2qwxrqZcw5AAcr`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$qCyJ9XHxfe0Eo5Jl.qLUQfhG0ILRX$}}
```

---
### 📁 工作流: 主流程里的测试-AI助手能力拓展 .json

#### 我的异常#13
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `xh2XCD3ZgELGZ3l9`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "exception"
}
```

---
#### 销假申请#12
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `dy1nArkgUPhvAh7i`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "request-sick-leave"
}
```

---
#### 我的信息#12
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `qrINWieMEyv76rat`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "my-info"
}
```

---
#### 假期余额查询#12
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `yT1mOke1Gvas8isg`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "leave-quota"
}
```

---
#### 团队考勤#12
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `y3ZirpPQVzy0nc0y`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "team-attendance"
}
```

---
#### 移动排班#13
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `mChm0J5AlWsC9ahq`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "mobile-schedule"
}
```

---
#### 打卡明细#13
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `nZEOxbEMZrWh64zk`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "punch-details"
}
```

---
#### 原始打卡记录#13
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `bOP9IoueGJKgJbu0`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "punch-card-records"
}
```

---
#### 我的排班#13
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `gpLWK5uJrirntajE`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": " scheduling"
}
```

---
#### 考勤统计#12
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `liQcOI8XbEwgYTp0`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "attendance-statistics"
}
```

---
#### 加班申请#12
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `vb84CAsQHVdsQKuV`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "request-overtime"
}
```

---
#### 我的表单#12
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `rhwJWYlg7rpdvTUu`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{
   "businessType": "page_jump",
   "permissionCode": "my-forms"
}
```

---
#### 指定回复#14
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `nqwZmHi4WMOcHMcv`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$rxZI6yQI4ilogLkp.qLUQfhG0ILRX$}}
```

---
### 📁 工作流: 主流程里面的人力AI咨询（新）.json

#### 指定回复#11
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `nYWg9evhHwlx0QpD`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$xFY0I79PdRIi1XID.qLUQfhG0ILRX$}}
```

---
#### 指定回复#11
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `i9wVJb677g7EytBq`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$uaGHhWtZ3ktjuBOg.answerText$}}
```

---
#### 指定回复#13
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `zXPTgZjIuzehCCxu`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$dHUerGSIc10JiRF2.answerText$}}
```

---
### 📁 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json

#### 指定回复#4
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json`
- **节点ID**: `tK1WdNmjablgw1Ni`
- **输出类型**: JSON模板
- **原始输出内容**:
```json
{{$yVrvE5iWz4YmAQjd.rGeaSR$}}
```

---
## 二、动态引用输出的节点

以下节点的输出内容来自其他节点的动态引用（通常是代码节点的 `system_rawResponse`）：

### 📁 工作流: 主流程-1.json

#### 指定回复
- **文件路径**: `主流程-1.json`
- **节点ID**: `ouXmpBkQil0R`
- **输出类型**: 动态引用
- **引用来源**: 节点 `448745` 的输出字段 `userChatInput`
- **引用表达式**: `["448745", "userChatInput"]`

---
#### 指定回复#5
- **文件路径**: `主流程-1.json`
- **节点ID**: `fuEnHrTKnBKfEezh`
- **输出类型**: 动态引用
- **引用来源**: 节点 `zoz4731LcSLcvtkD` 的输出字段 `system_rawResponse`
- **引用表达式**: `["zoz4731LcSLcvtkD", "system_rawResponse"]`

---
#### 指定回复#6
- **文件路径**: `主流程-1.json`
- **节点ID**: `eOK5YasTrChOzy26`
- **输出类型**: 动态引用
- **引用来源**: 节点 `448745` 的输出字段 `userChatInput`
- **引用表达式**: `["448745", "userChatInput"]`

---
### 📁 工作流: 主流程里的测试-AI助手能力拓展 中的AI考勤-查询假期余额.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里的测试-AI助手能力拓展 中的AI考勤-查询假期余额.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里的测试-AI助手能力拓展 中的AI考勤-查询假期余额.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `j1tTgGRaVr9g` 的输出字段 `system_rawResponse`
- **引用表达式**: `["j1tTgGRaVr9g", "system_rawResponse"]`

---
### 📁 工作流: 主流程里的测试-AI助手能力拓展中的测试-AI考勤-获取用户假期权限.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里的测试-AI助手能力拓展中的测试-AI考勤-获取用户假期权限.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里的测试-AI助手能力拓展中的测试-AI考勤-获取用户假期权限.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `ociBmoebXRv9XjJt` 的输出字段 `qLUQfhG0ILRX`
- **引用表达式**: `["ociBmoebXRv9XjJt", "qLUQfhG0ILRX"]`

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（下周a5） .json

#### 指定回复#7
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（下周a5） .json`
- **节点ID**: `q8xHkcZ7tppqdiDl`
- **输出类型**: 动态引用
- **引用来源**: 节点 `y69Re8zt9qFadFTR` 的输出字段 `system_rawResponse`
- **引用表达式**: `["y69Re8zt9qFadFTR", "system_rawResponse"]`

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（今天a1）.json

#### 指定回复#7
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（今天a1）.json`
- **节点ID**: `q8xHkcZ7tppqdiDl`
- **输出类型**: 动态引用
- **引用来源**: 节点 `y69Re8zt9qFadFTR` 的输出字段 `system_rawResponse`
- **引用表达式**: `["y69Re8zt9qFadFTR", "system_rawResponse"]`

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（后天a3）.json

#### 指定回复#7
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（后天a3）.json`
- **节点ID**: `q8xHkcZ7tppqdiDl`
- **输出类型**: 动态引用
- **引用来源**: 节点 `y69Re8zt9qFadFTR` 的输出字段 `system_rawResponse`
- **引用表达式**: `["y69Re8zt9qFadFTR", "system_rawResponse"]`

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（大后天a4）  .json

#### 指定回复#7
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（大后天a4）  .json`
- **节点ID**: `q8xHkcZ7tppqdiDl`
- **输出类型**: 动态引用
- **引用来源**: 节点 `y69Re8zt9qFadFTR` 的输出字段 `system_rawResponse`
- **引用表达式**: `["y69Re8zt9qFadFTR", "system_rawResponse"]`

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（明天a2）.json

#### 指定回复#7
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（明天a2）.json`
- **节点ID**: `q8xHkcZ7tppqdiDl`
- **输出类型**: 动态引用
- **引用来源**: 节点 `y69Re8zt9qFadFTR` 的输出字段 `system_rawResponse`
- **引用表达式**: `["y69Re8zt9qFadFTR", "system_rawResponse"]`

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（昨天前天B）.json

#### 指定回复#7
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（昨天前天B）.json`
- **节点ID**: `q8xHkcZ7tppqdiDl`
- **输出类型**: 动态引用
- **引用来源**: 节点 `y69Re8zt9qFadFTR` 的输出字段 `system_rawResponse`
- **引用表达式**: `["y69Re8zt9qFadFTR", "system_rawResponse"]`

---
### 📁 工作流: 主流程里的测试-AI考勤-获取用户假期权限.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里的测试-AI考勤-获取用户假期权限.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里的测试-AI考勤-获取用户假期权限.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `ociBmoebXRv9XjJt` 的输出字段 `qLUQfhG0ILRX`
- **引用表达式**: `["ociBmoebXRv9XjJt", "qLUQfhG0ILRX"]`

---
### 📁 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-查询医疗假期余额.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-查询医疗假期余额.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-查询医疗假期余额.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `hdcoUgJnAlZSZvH5` 的输出字段 `system_rawResponse`
- **引用表达式**: `["hdcoUgJnAlZSZvH5", "system_rawResponse"]`

---
### 📁 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-查询年假余额.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-查询年假余额.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-查询年假余额.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `hdcoUgJnAlZSZvH5` 的输出字段 `system_rawResponse`
- **引用表达式**: `["hdcoUgJnAlZSZvH5", "system_rawResponse"]`

---
### 📁 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `hdcoUgJnAlZSZvH5` 的输出字段 `system_rawResponse`
- **引用表达式**: `["hdcoUgJnAlZSZvH5", "system_rawResponse"]`

---
### 📁 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数中的AI考勤-查询年假余额.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数中的AI考勤-查询年假余额.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数中的AI考勤-查询年假余额.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `hdcoUgJnAlZSZvH5` 的输出字段 `system_rawResponse`
- **引用表达式**: `["hdcoUgJnAlZSZvH5", "system_rawResponse"]`

---
### 📁 工作流: 主流程里面的人力AI咨询（新）中的AI考勤-查询育儿假.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里面的人力AI咨询（新）中的AI考勤-查询育儿假.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询（新）中的AI考勤-查询育儿假.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `hdcoUgJnAlZSZvH5` 的输出字段 `system_rawResponse`
- **引用表达式**: `["hdcoUgJnAlZSZvH5", "system_rawResponse"]`

---
### 📁 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json

#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json`
- **节点ID**: `e8J8YlWvppOw`
- **输出类型**: 动态引用
- **引用来源**: 节点 `bsnwNg6imbvL` 的输出字段 `system_rawResponse`
- **引用表达式**: `["bsnwNg6imbvL", "system_rawResponse"]`

---
#### 指定回复#3
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json`
- **节点ID**: `regWAI6exZZ2`
- **输出类型**: 动态引用
- **引用来源**: 节点 `zu6rftVNKe1U` 的输出字段 `system_rawResponse`
- **引用表达式**: `["zu6rftVNKe1U", "system_rawResponse"]`

---
#### 指定回复#6
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json`
- **节点ID**: `d9gUlO3XNk9aEZql`
- **输出类型**: 动态引用
- **引用来源**: 节点 `hbdOFKKuQNsg6lft` 的输出字段 `system_rawResponse`
- **引用表达式**: `["hbdOFKKuQNsg6lft", "system_rawResponse"]`

---
### 📁 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的AI考勤-查询假期余额#4.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的AI考勤-查询假期余额#4.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的AI考勤-查询假期余额#4.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `j1tTgGRaVr9g` 的输出字段 `system_rawResponse`
- **引用表达式**: `["j1tTgGRaVr9g", "system_rawResponse"]`

---
### 📁 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json

#### 指定回复 - 获取权限失败
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json`
- **节点ID**: `dylA9Asv4HcV`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aeUxxnVwVjEv` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aeUxxnVwVjEv", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json`
- **节点ID**: `c1FozIAhHX17`
- **输出类型**: 动态引用
- **引用来源**: 节点 `j1tTgGRaVr9g` 的输出字段 `system_rawResponse`
- **引用表达式**: `["j1tTgGRaVr9g", "system_rawResponse"]`

---
#### 指定回复#5
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json`
- **节点ID**: `mvzztIGcvaSP3wFc`
- **输出类型**: 动态引用
- **引用来源**: 节点 `k1ndGpyrqzf7usl8` 的输出字段 `system_rawResponse`
- **引用表达式**: `["k1ndGpyrqzf7usl8", "system_rawResponse"]`

---
### 📁 工作流: 根据休假类型去判断是否跳过休息日.json

#### 指定回复
- **文件路径**: `根据休假类型去判断是否跳过休息日.json`
- **节点ID**: `yEL6kZLy5l2sssW5`
- **输出类型**: 动态引用
- **引用来源**: 节点 `eBsHzoQjPPGnAtdu` 的输出字段 `system_rawResponse`
- **引用表达式**: `["eBsHzoQjPPGnAtdu", "system_rawResponse"]`

---
#### 指定回复#2
- **文件路径**: `根据休假类型去判断是否跳过休息日.json`
- **节点ID**: `dxwa2Jc2cQTlT06q`
- **输出类型**: 动态引用
- **引用来源**: 节点 `ecpaeWzu4aBxfDZD` 的输出字段 `system_rawResponse`
- **引用表达式**: `["ecpaeWzu4aBxfDZD", "system_rawResponse"]`

---
#### 指定回复#3
- **文件路径**: `根据休假类型去判断是否跳过休息日.json`
- **节点ID**: `c4xHwZjGqnctIMHN`
- **输出类型**: 动态引用
- **引用来源**: 节点 `aGR8SJl7UyhFQFSA` 的输出字段 `system_rawResponse`
- **引用表达式**: `["aGR8SJl7UyhFQFSA", "system_rawResponse"]`

---
## 三、文本/其他格式输出的节点

以下节点的输出内容为普通文本或包含变量的文本模板：

### 📁 工作流: 主流程-1.json

#### 指定回复#8
- **文件路径**: `主流程-1.json`
- **节点ID**: `fbim2PjzSwwRe5Kg`
- **输出类型**: 文本模板
- **原始输出内容**:
```
抱歉{{$VARIABLE_NODE_ID.typeName$}}只限女性申请
```

---
#### 指定回复#9
- **文件路径**: `主流程-1.json`
- **节点ID**: `dFvgUWGYfzdXdmDM`
- **输出类型**: 文本模板
- **原始输出内容**:
```
抱歉{{$VARIABLE_NODE_ID.typeName$}}只限男性申请
```

---
#### 指定回复#12
- **文件路径**: `主流程-1.json`
- **节点ID**: `lU620E7VjZzzLa8x`
- **输出类型**: 文本模板
- **原始输出内容**:
```
你无权申请该假期
```

---
#### 指定回复#12
- **文件路径**: `主流程-1.json`
- **节点ID**: `aaGnTp0dtXNqTmCd`
- **输出类型**: 文本模板
- **原始输出内容**:
```
你输入的内容为空
```

---
#### 指定回复#13
- **文件路径**: `主流程-1.json`
- **节点ID**: `qaEHCV1mYF2hGuMi`
- **输出类型**: 文本模板
- **原始输出内容**:
```
{
    "businessType": "consult",
    "result": "{{$eF9aQCT1KXpnipeq.qLUQfhG0ILRX$}}"
}
```

---
#### 指定回复#14
- **文件路径**: `主流程-1.json`
- **节点ID**: `nUugFb47qTIh32jN`
- **输出类型**: 文本模板
- **原始输出内容**:
```
很抱歉没帮上忙！为尽快解决，请您回复“转人工”，人工同事马上为您服务。感谢理解！
```

---
#### 指定回复#15
- **文件路径**: `主流程-1.json`
- **节点ID**: `nrueFKmldKo5QpU0`
- **输出类型**: 文本模板
- **原始输出内容**:
```
转人工
```

---
### 📁 工作流: 主流程里的测试-AI助手能力拓展 .json

#### 指定回复#14
- **文件路径**: `主流程里的测试-AI助手能力拓展 .json`
- **节点ID**: `b8IUIj6ZysBUSvJc`
- **输出类型**: 文本模板
- **原始输出内容**:
```
咨询服务敬请期待，人力AI助手在努力学习中
```

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（下周a5） .json

#### 指定回复#8
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（下周a5） .json`
- **节点ID**: `tUHCiQcct38I6hpK`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间为正常休息时间，不用请假哦
```

---
#### 指定回复#3
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（下周a5） .json`
- **节点ID**: `iaMqfVYoyIZjfoxN`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间未排班，请联系排班人员
```

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（今天a1）.json

#### 指定回复#8
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（今天a1）.json`
- **节点ID**: `tUHCiQcct38I6hpK`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间为正常休息时间，不用请假哦
```

---
#### 指定回复#3
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（今天a1）.json`
- **节点ID**: `nfRvB5WzKOsVn8Mm`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间还没有排班，请您在排班后再试
（哆啦小贴士✨ 排班可以问问您的直接上级领导）
```

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（后天a3）.json

#### 指定回复#8
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（后天a3）.json`
- **节点ID**: `tUHCiQcct38I6hpK`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间为正常休息时间，不用请假哦
```

---
#### 指定回复#3
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（后天a3）.json`
- **节点ID**: `pUbfPFeAgoJM3GY2`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间还没有排班，请您在排班后再试
（哆啦小贴士✨ 排班可以问问您的直接上级领导）
```

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（大后天a4）  .json

#### 指定回复#8
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（大后天a4）  .json`
- **节点ID**: `tUHCiQcct38I6hpK`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间为正常休息时间，不用请假哦
```

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（明天a2）.json

#### 指定回复#8
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（明天a2）.json`
- **节点ID**: `tUHCiQcct38I6hpK`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间为正常休息时间，不用请假哦
```

---
#### 指定回复#3
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（明天a2）.json`
- **节点ID**: `vDZnU7xKzcTYmLar`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间还没有排班，请您在排班后再试
（哆啦小贴士✨ 排班可以问问您的直接上级领导）
```

---
### 📁 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（昨天前天B）.json

#### 指定回复#3
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（昨天前天B）.json`
- **节点ID**: `wFvLh6HMq9p6X8IA`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间为正常休息时间，不用请假哦
```

---
#### 指定回复#3
- **文件路径**: `主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（昨天前天B）.json`
- **节点ID**: `zBfMzlMzn25WXjff`
- **输出类型**: 文本模板
- **原始输出内容**:
```
你没有输入具体日期
```

---
### 📁 工作流: 主流程里的测试-请假意图判断 .json

#### 指定回复
- **文件路径**: `主流程里的测试-请假意图判断 .json`
- **节点ID**: `kUPrfVLvKzFoj05b`
- **输出类型**: 文本模板
- **原始输出内容**:
```
请假意图
```

---
#### 指定回复#2
- **文件路径**: `主流程里的测试-请假意图判断 .json`
- **节点ID**: `bp2cNHUvkYXcrxGX`
- **输出类型**: 文本模板
- **原始输出内容**:
```
其他意图
```

---
#### 指定回复#3
- **文件路径**: `主流程里的测试-请假意图判断 .json`
- **节点ID**: `krJLEMRXaZXD0oy5`
- **输出类型**: 文本模板
- **原始输出内容**:
```
咨询意图
```

---
### 📁 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数.json

#### 指定回复#3
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数.json`
- **节点ID**: `kodz6riInwGQJbWc`
- **输出类型**: 文本模板
- **原始输出内容**:
```
{{$hdcoUgJnAlZSZvH5.yybgLQQrz2Wm8J3H$}}月{{$hdcoUgJnAlZSZvH5.piY5Z2h7nKXKBKMe$}}日前年休假按5天折算，折算后为{{$pxcIhxN5acuZIZHA.qLUQfhG0ILRX$}}天，{{$hdcoUgJnAlZSZvH5.yybgLQQrz2Wm8J3H$}}月{{$hdcoUgJnAlZSZvH5.piY5Z2h7nKXKBKMe$}}日后按10天折算，折算后为{{$pxcIhxN5acuZIZHA.gR0mkQpJ4Og8$}}天，合计本年可休年休假{{$slrdeAuOdLlwQrce.gR0mkQpJ4Og8$}}天（不足1天的不享受），已休{{$slrdeAuOdLlwQrce.zhhq4GOz2uP9c6lG$}}天，剩余{{$slrdeAuOdLlwQrce.ymHjf1cMNCMj3hAy$}}天。
```

---
#### 指定回复#5
- **文件路径**: `主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数.json`
- **节点ID**: `ph3oDda5Il6aEhND`
- **输出类型**: 文本模板
- **原始输出内容**:
```
{{$hdcoUgJnAlZSZvH5.yybgLQQrz2Wm8J3H$}}月{{$hdcoUgJnAlZSZvH5.piY5Z2h7nKXKBKMe$}}日前年休假按10天折算，折算后为{{$dXvO48AYPUwzy29C.qLUQfhG0ILRX$}}天，{{$hdcoUgJnAlZSZvH5.yybgLQQrz2Wm8J3H$}}月{{$hdcoUgJnAlZSZvH5.piY5Z2h7nKXKBKMe$}}日后按15天折算，折算后为{{$dXvO48AYPUwzy29C.gR0mkQpJ4Og8$}}天，合计本年可休年休假{{$gqGxhpskgFK7nRcj.gR0mkQpJ4Og8$}}天（不足1天的不享受），已休{{$gqGxhpskgFK7nRcj.zhhq4GOz2uP9c6lG$}}天，剩余{{$gqGxhpskgFK7nRcj.ymHjf1cMNCMj3hAy$}}天。
```

---
### 📁 工作流: 主流程里面的人力AI咨询（新）.json

#### 指定回复#2
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `tCdSyRN2bisgirrD`
- **输出类型**: 文本模板
- **原始输出内容**:
```
{{$qmtFAJUwCqkIqflp.answerText$}}

单次10分钟（含）以内的迟到，全月累计不超过2次的，不扣工资；单次10分钟（含）以内的迟到全月超过2次的，或者单次迟到超过10分钟但未达60分钟的，每10分钟扣工资20元，不足10分钟以10分钟计；迟到达1小时（含）不足4小时的，记旷工0.5天。

```

---
#### 指定回复#4
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `diEpItuNLRMWMsts`
- **输出类型**: 文本模板
- **原始输出内容**:
```
新入职员工年休假天数按入职天数折算，折算后不足1天的部分不享受，折算后本年年休假可休{{$iYKUTYU66HAxQf5o.eL7q33ulrgzeGF9h$}}天，已休{{$iYKUTYU66HAxQf5o.zhhq4GOz2uP9c6lG$}}天，剩余{{$iYKUTYU66HAxQf5o.ymHjf1cMNCMj3hAy$}}天，请在次年3月31日前休完。


```

---
#### 指定回复#7
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `i7m2rRZ0nBs9aWHf`
- **输出类型**: 文本模板
- **原始输出内容**:
```
根据您的参工年限及在本单位工龄，可享受医疗期{{$sIaq89O3mE80Mnfm.fwbMLg8xslaVufo3$}}天
```

---
#### 指定回复#8
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `tZ4JCfXIeiAm60rI`
- **输出类型**: 文本模板
- **原始输出内容**:
```
本年年休假天数按在职天数折算，折算后不足1天的部分不享受折算后本年年假可休{{$iYKUTYU66HAxQf5o.gR0mkQpJ4Og8$}}天，已休{{$iYKUTYU66HAxQf5o.zhhq4GOz2uP9c6lG$}}天，剩余{{$iYKUTYU66HAxQf5o.ymHjf1cMNCMj3hAy$}}天，请在离职前休完
```

---
#### 指定回复#10
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `krRcWHAnL4UnQJ7q`
- **输出类型**: 文本模板
- **原始输出内容**:
```
本年年假可休{{$iYKUTYU66HAxQf5o.gR0mkQpJ4Og8$}}天，已休{{$iYKUTYU66HAxQf5o.zhhq4GOz2uP9c6lG$}}天，剩余{{$iYKUTYU66HAxQf5o.ymHjf1cMNCMj3hAy$}}天，请在次年3月31日前休完。
```

---
#### 指定回复#10
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `cdPPWp9L5oBONKVe`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的育儿假已使用{{$pJ8mMFbX9jvnYJ5Y.xxm4VgKH9r4ERJTu$}}天，还剩{{$pJ8mMFbX9jvnYJ5Y.jzdfLiIdiaC0mOON$}}天

```

---
#### 指定回复#10
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `yS4YgJHfum5GqpRV`
- **输出类型**: 文本模板
- **原始输出内容**:
```
{{$xLXIwkrrr1JLEeFc.answerText$}}
月度内，每次早退不足60分钟的，按每10分钟扣发工资20元，不足10分钟以10分钟计。
```

---
#### 指定回复#11
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `xkX9ePww2wNO0YO2`
- **输出类型**: 文本模板
- **原始输出内容**:
```
{{$wgKeNlX9gkqIl2m0.answerText$}}
1. 单次10分钟（含）以内的迟到，全月累计不超过2次的，不扣工资；单次10分钟（含）以内的迟到全月超过2次的，或者单次迟到超过10分钟但未达60分钟的，每10分钟扣工资20元，不足10分钟以10分钟计；迟到达1小时（含）不足4小时的，记旷工0.5天。
2. 月度内，每次早退不足60分钟的，按每10分钟扣发工资20元，不足10分钟以10分钟计。
```

---
#### 指定回复#12
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `vtRDBcIJ1FyCLT1N`
- **输出类型**: 文本模板
- **原始输出内容**:
```
据我分析判断这个不属于人力资源的业务范畴，建议您咨询其他企业部门。
```

---
#### 指定回复#14
- **文件路径**: `主流程里面的人力AI咨询（新）.json`
- **节点ID**: `jqSQFSarPbvLUFwp`
- **输出类型**: 文本模板
- **原始输出内容**:
```
{{$dHUerGSIc10JiRF2.answerText$}}{#¥followUpQuestion¥#}{{$aYDGUSStLrPidCJd.answerText$}}
```

---
### 📁 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json

#### 指定回复#4
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json`
- **节点ID**: `cQFCSAuVKzms`
- **输出类型**: 文本模板
- **原始输出内容**:
```
如需申请多种假期或者不连续时间段，请分开提交申请~这样哆啦可以更好地帮您处理😊
```

---
#### 指定回复#4
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json`
- **节点ID**: `g4OyQLGuOi2Kpk0h`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间为正常休息时间，不用请假哦
```

---
#### 指定回复#5
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json`
- **节点ID**: `iqgnnX8VkMzLonyn`
- **输出类型**: 文本模板
- **原始输出内容**:
```
 您的请假时间还没有排班，请您在排班后再试
（哆啦小贴士✨ 排班可以问问您的直接上级领导）
```

---
#### 指定回复#7
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json`
- **节点ID**: `qWTIYvpRlL9Gk42i`
- **输出类型**: 文本模板
- **原始输出内容**:
```
 您的请假时间还没有排班，请您在排班后再试
（哆啦小贴士✨ 排班可以问问您的直接上级领导）
```

---
### 📁 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json

#### 指定回复#3
- **文件路径**: `主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json`
- **节点ID**: `aBpJHrMJZjRwIxMj`
- **输出类型**: 文本模板
- **原始输出内容**:
```
您的请假时间还没有排班，请您在排班后再试
（哆啦小贴士✨ 排班可以问问您的直接上级领导） 
```

---
## 四、完整节点列表（按文件分组）

### 主流程-1.json (15个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 | `ouXmpBkQil0R` | 🔗 动态引用 | ["448745", "userChatInput"] |
| 指定回复#5 | `fuEnHrTKnBKfEezh` | 🔗 动态引用 | ["zoz4731LcSLcvtkD", "system_rawResponse"] |
| 指定回复#6 | `eOK5YasTrChOzy26` | 🔗 动态引用 | ["448745", "userChatInput"] |
| 指定回复#4 | `oHlMHjt05AILvDu2` | ⭐ JSON模板 | {{$e0R84B4Wu0AfosQg.answerText$}} |
| 指定回复#8 | `fbim2PjzSwwRe5Kg` | 📝 文本模板 | 抱歉{{$VARIABLE_NODE_ID.typeName$}}只限女性申请 |
| 指定回复#9 | `dFvgUWGYfzdXdmDM` | 📝 文本模板 | 抱歉{{$VARIABLE_NODE_ID.typeName$}}只限男性申请 |
| 指定回复#10 | `lgzf2TfzUazMhR0a` | ⭐ JSON模板 | {{$qsBLZ4thwmiXIjl2.system_text$}} |
| 指定回复#11 | `mbskoCmlbM85T7L1` | ⭐ JSON模板 | {{$eUgmlwoXsXWJx79C.qLUQfhG0ILRX$}} |
| 指定回复#12 | `lU620E7VjZzzLa8x` | 📝 文本模板 | 你无权申请该假期 |
| 指定回复#11 | `m17JnfA2zLyXr8dh` | ⭐ JSON模板 | {{$lSu1uLWZwjnoukKS.ygLCJWKqY1aEF4cI$}} |
| 指定回复#12 | `aaGnTp0dtXNqTmCd` | 📝 文本模板 | 你输入的内容为空 |
| 指定回复#13 | `wC2qwxrqZcw5AAcr` | ⭐ JSON模板 | {{$qCyJ9XHxfe0Eo5Jl.qLUQfhG0ILRX$}} |
| 指定回复#13 | `qaEHCV1mYF2hGuMi` | 📝 文本模板 | {
    "businessType": "consult",
    "result": "{{... |
| 指定回复#14 | `nUugFb47qTIh32jN` | 📝 文本模板 | 很抱歉没帮上忙！为尽快解决，请您回复“转人工”，人工同事马上为您服务。感谢理解！ |
| 指定回复#15 | `nrueFKmldKo5QpU0` | 📝 文本模板 | 转人工 |

### 主流程里的测试-AI助手能力拓展 .json (14个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 我的异常#13 | `xh2XCD3ZgELGZ3l9` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 销假申请#12 | `dy1nArkgUPhvAh7i` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 我的信息#12 | `qrINWieMEyv76rat` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 假期余额查询#12 | `yT1mOke1Gvas8isg` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 团队考勤#12 | `y3ZirpPQVzy0nc0y` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 移动排班#13 | `mChm0J5AlWsC9ahq` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 打卡明细#13 | `nZEOxbEMZrWh64zk` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 原始打卡记录#13 | `bOP9IoueGJKgJbu0` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 我的排班#13 | `gpLWK5uJrirntajE` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 考勤统计#12 | `liQcOI8XbEwgYTp0` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 加班申请#12 | `vb84CAsQHVdsQKuV` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 我的表单#12 | `rhwJWYlg7rpdvTUu` | ⭐ JSON模板 | {
   "businessType": "page_jump",
   "permissionCo... |
| 指定回复#14 | `nqwZmHi4WMOcHMcv` | ⭐ JSON模板 | {{$rxZI6yQI4ilogLkp.qLUQfhG0ILRX$}} |
| 指定回复#14 | `b8IUIj6ZysBUSvJc` | 📝 文本模板 | 咨询服务敬请期待，人力AI助手在努力学习中 |

### 主流程里的测试-AI助手能力拓展 中的AI考勤-查询假期余额.json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["j1tTgGRaVr9g", "system_rawResponse"] |

### 主流程里的测试-AI助手能力拓展中的测试-AI考勤-获取用户假期权限.json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["ociBmoebXRv9XjJt", "qLUQfhG0ILRX"] |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（下周a5） .json (3个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复#7 | `q8xHkcZ7tppqdiDl` | 🔗 动态引用 | ["y69Re8zt9qFadFTR", "system_rawResponse"] |
| 指定回复#8 | `tUHCiQcct38I6hpK` | 📝 文本模板 | 您的请假时间为正常休息时间，不用请假哦 |
| 指定回复#3 | `iaMqfVYoyIZjfoxN` | 📝 文本模板 | 您的请假时间未排班，请联系排班人员 |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（今天a1）.json (3个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复#7 | `q8xHkcZ7tppqdiDl` | 🔗 动态引用 | ["y69Re8zt9qFadFTR", "system_rawResponse"] |
| 指定回复#8 | `tUHCiQcct38I6hpK` | 📝 文本模板 | 您的请假时间为正常休息时间，不用请假哦 |
| 指定回复#3 | `nfRvB5WzKOsVn8Mm` | 📝 文本模板 | 您的请假时间还没有排班，请您在排班后再试 （哆啦小贴士✨ 排班可以问问您的直接上级领导） |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（后天a3）.json (3个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复#7 | `q8xHkcZ7tppqdiDl` | 🔗 动态引用 | ["y69Re8zt9qFadFTR", "system_rawResponse"] |
| 指定回复#8 | `tUHCiQcct38I6hpK` | 📝 文本模板 | 您的请假时间为正常休息时间，不用请假哦 |
| 指定回复#3 | `pUbfPFeAgoJM3GY2` | 📝 文本模板 | 您的请假时间还没有排班，请您在排班后再试 （哆啦小贴士✨ 排班可以问问您的直接上级领导） |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（大后天a4）  .json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复#7 | `q8xHkcZ7tppqdiDl` | 🔗 动态引用 | ["y69Re8zt9qFadFTR", "system_rawResponse"] |
| 指定回复#8 | `tUHCiQcct38I6hpK` | 📝 文本模板 | 您的请假时间为正常休息时间，不用请假哦 |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（明天a2）.json (3个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复#7 | `q8xHkcZ7tppqdiDl` | 🔗 动态引用 | ["y69Re8zt9qFadFTR", "system_rawResponse"] |
| 指定回复#8 | `tUHCiQcct38I6hpK` | 📝 文本模板 | 您的请假时间为正常休息时间，不用请假哦 |
| 指定回复#3 | `vDZnU7xKzcTYmLar` | 📝 文本模板 | 您的请假时间还没有排班，请您在排班后再试 （哆啦小贴士✨ 排班可以问问您的直接上级领导） |

### 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（昨天前天B）.json (3个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复#7 | `q8xHkcZ7tppqdiDl` | 🔗 动态引用 | ["y69Re8zt9qFadFTR", "system_rawResponse"] |
| 指定回复#3 | `wFvLh6HMq9p6X8IA` | 📝 文本模板 | 您的请假时间为正常休息时间，不用请假哦 |
| 指定回复#3 | `zBfMzlMzn25WXjff` | 📝 文本模板 | 你没有输入具体日期 |

### 主流程里的测试-AI考勤-获取用户假期权限.json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["ociBmoebXRv9XjJt", "qLUQfhG0ILRX"] |

### 主流程里的测试-请假意图判断 .json (3个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 | `kUPrfVLvKzFoj05b` | 📝 文本模板 | 请假意图 |
| 指定回复#2 | `bp2cNHUvkYXcrxGX` | 📝 文本模板 | 其他意图 |
| 指定回复#3 | `krJLEMRXaZXD0oy5` | 📝 文本模板 | 咨询意图 |

### 主流程里面的人力AI咨询(新)里面的AI考勤-查询医疗假期余额.json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["hdcoUgJnAlZSZvH5", "system_rawResponse"] |

### 主流程里面的人力AI咨询(新)里面的AI考勤-查询年假余额.json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["hdcoUgJnAlZSZvH5", "system_rawResponse"] |

### 主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数.json (4个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["hdcoUgJnAlZSZvH5", "system_rawResponse"] |
| 指定回复#3 | `kodz6riInwGQJbWc` | 📝 文本模板 | {{$hdcoUgJnAlZSZvH5.yybgLQQrz2Wm8J3H$}}月{{$hdcoUgJ... |
| 指定回复#5 | `ph3oDda5Il6aEhND` | 📝 文本模板 | {{$hdcoUgJnAlZSZvH5.yybgLQQrz2Wm8J3H$}}月{{$hdcoUgJ... |

### 主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数中的AI考勤-查询年假余额.json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["hdcoUgJnAlZSZvH5", "system_rawResponse"] |

### 主流程里面的人力AI咨询（新）.json (13个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复#2 | `tCdSyRN2bisgirrD` | 📝 文本模板 | {{$qmtFAJUwCqkIqflp.answerText$}}

单次10分钟（含）以内的迟到，... |
| 指定回复#4 | `diEpItuNLRMWMsts` | 📝 文本模板 | 新入职员工年休假天数按入职天数折算，折算后不足1天的部分不享受，折算后本年年休假可休{{$iYKUT... |
| 指定回复#7 | `i7m2rRZ0nBs9aWHf` | 📝 文本模板 | 根据您的参工年限及在本单位工龄，可享受医疗期{{$sIaq89O3mE80Mnfm.fwbMLg8x... |
| 指定回复#8 | `tZ4JCfXIeiAm60rI` | 📝 文本模板 | 本年年休假天数按在职天数折算，折算后不足1天的部分不享受折算后本年年假可休{{$iYKUTYU66H... |
| 指定回复#10 | `krRcWHAnL4UnQJ7q` | 📝 文本模板 | 本年年假可休{{$iYKUTYU66HAxQf5o.gR0mkQpJ4Og8$}}天，已休{{$iY... |
| 指定回复#10 | `cdPPWp9L5oBONKVe` | 📝 文本模板 | 您的育儿假已使用{{$pJ8mMFbX9jvnYJ5Y.xxm4VgKH9r4ERJTu$}}天，还... |
| 指定回复#11 | `nYWg9evhHwlx0QpD` | ⭐ JSON模板 | {{$xFY0I79PdRIi1XID.qLUQfhG0ILRX$}} |
| 指定回复#11 | `i9wVJb677g7EytBq` | ⭐ JSON模板 | {{$uaGHhWtZ3ktjuBOg.answerText$}} |
| 指定回复#10 | `yS4YgJHfum5GqpRV` | 📝 文本模板 | {{$xLXIwkrrr1JLEeFc.answerText$}}
月度内，每次早退不足60分钟的，... |
| 指定回复#11 | `xkX9ePww2wNO0YO2` | 📝 文本模板 | {{$wgKeNlX9gkqIl2m0.answerText$}}
1. 单次10分钟（含）以内的迟... |
| 指定回复#12 | `vtRDBcIJ1FyCLT1N` | 📝 文本模板 | 据我分析判断这个不属于人力资源的业务范畴，建议您咨询其他企业部门。 |
| 指定回复#13 | `zXPTgZjIuzehCCxu` | ⭐ JSON模板 | {{$dHUerGSIc10JiRF2.answerText$}} |
| 指定回复#14 | `jqSQFSarPbvLUFwp` | 📝 文本模板 | {{$dHUerGSIc10JiRF2.answerText$}}{#¥followUpQuesti... |

### 主流程里面的人力AI咨询（新）中的AI考勤-查询育儿假.json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["hdcoUgJnAlZSZvH5", "system_rawResponse"] |

### 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json (7个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复#2 | `e8J8YlWvppOw` | 🔗 动态引用 | ["bsnwNg6imbvL", "system_rawResponse"] |
| 指定回复#3 | `regWAI6exZZ2` | 🔗 动态引用 | ["zu6rftVNKe1U", "system_rawResponse"] |
| 指定回复#4 | `cQFCSAuVKzms` | 📝 文本模板 | 如需申请多种假期或者不连续时间段，请分开提交申请~这样哆啦可以更好地帮您处理😊 |
| 指定回复#4 | `g4OyQLGuOi2Kpk0h` | 📝 文本模板 | 您的请假时间为正常休息时间，不用请假哦 |
| 指定回复#5 | `iqgnnX8VkMzLonyn` | 📝 文本模板 |  您的请假时间还没有排班，请您在排班后再试 （哆啦小贴士✨ 排班可以问问您的直接上级领导） |
| 指定回复#6 | `d9gUlO3XNk9aEZql` | 🔗 动态引用 | ["hbdOFKKuQNsg6lft", "system_rawResponse"] |
| 指定回复#7 | `qWTIYvpRlL9Gk42i` | 📝 文本模板 |  您的请假时间还没有排班，请您在排班后再试 （哆啦小贴士✨ 排班可以问问您的直接上级领导） |

### 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的AI考勤-查询假期余额#4.json (2个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["j1tTgGRaVr9g", "system_rawResponse"] |

### 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json (5个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 - 获取权限失败 | `dylA9Asv4HcV` | 🔗 动态引用 | ["aeUxxnVwVjEv", "system_rawResponse"] |
| 指定回复#2 | `c1FozIAhHX17` | 🔗 动态引用 | ["j1tTgGRaVr9g", "system_rawResponse"] |
| 指定回复#3 | `aBpJHrMJZjRwIxMj` | 📝 文本模板 | 您的请假时间还没有排班，请您在排班后再试 （哆啦小贴士✨ 排班可以问问您的直接上级领导）  |
| 指定回复#4 | `tK1WdNmjablgw1Ni` | ⭐ JSON模板 | {{$yVrvE5iWz4YmAQjd.rGeaSR$}} |
| 指定回复#5 | `mvzztIGcvaSP3wFc` | 🔗 动态引用 | ["k1ndGpyrqzf7usl8", "system_rawResponse"] |

### 根据休假类型去判断是否跳过休息日.json (3个节点)

| 节点名称 | 节点ID | 输出类型 | 输出预览 |
|----------|--------|----------|----------|
| 指定回复 | `yEL6kZLy5l2sssW5` | 🔗 动态引用 | ["eBsHzoQjPPGnAtdu", "system_rawResponse"] |
| 指定回复#2 | `dxwa2Jc2cQTlT06q` | 🔗 动态引用 | ["ecpaeWzu4aBxfDZD", "system_rawResponse"] |
| 指定回复#3 | `c4xHwZjGqnctIMHN` | 🔗 动态引用 | ["aGR8SJl7UyhFQFSA", "system_rawResponse"] |

