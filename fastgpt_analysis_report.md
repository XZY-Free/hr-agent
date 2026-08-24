# FastGPT工作流分析报告

## 概述

本目录包含 24 个FastGPT工作流导出文件

---

## 工作流: 主流程-1.json

**节点数量**: 63
**边数量**: 74

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| grant_type | grant_type | string | 固定值，客户端模式 |
| corp_id | corp_id | string | 企业Code即为每个企业都拥有的一个唯一的corpid |
| client_secret | client_secret | string | 创建应用时候自动生成(应用秘钥) |
| holiday_type | holiday_type | string | 假期类型 |
| schedule_str | schedule_str | string | 排班字符串，如08:00~12:00, 12:00~17:00 |
| schedule_startTime | schedule_startTime | string | 排班开始时间，如：08:00 |
| schedule_endTime | schedule_endTime | string | 排班结束时间，如：17:00 |
| schedule_middleTime | schedule_middleTime | string | 排班中间时间 |
| schedule_startTime2 | schedule_startTime2 | string | 中间开始时间 |
| schedule_endTime2 | schedule_endTime2 | string | 中间结束时间 |
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| tag | tag | string |  |
| formData | formData | string | 通过 formData 变量将前端修改后的表单数据通过 JSON 字符串传递过来 |
| schedule_startTime1 | schedule_startTime1 | string | 最后一天的开始时间 |
| schedule_endTime1 | schedule_endTime1 | string | 最后一天的结束时间 |
| mealBeginTime1 | mealBeginTime1 | string | 第一天上午结束时间 |
| mealEndtime1 | mealEndtime1 | string | 第一天下午开始时间 |
| mealEndtime2 | mealEndtime2 | string | 最后一天上午开始时间 |
| mealBeginTime2 | mealBeginTime2 | string | 最后一天上午结束时间 |
| schedule_list | schedule_list | string | 最近5天排版信息 |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |
| pfN5Hb3O | userInfo | string | 个人信息：性别，职位
男：{"sex":"M"}
女：{"sex":"M"} |
| ya5XSRkx | intention | string | 意图参数：值为 consult 表示咨询，人工human,请假意图leaveIntention |
| s3TEbqJO | form_variable_name | string | 表单需要信息 |
| wxuxIYoG | form_ldap | string |  |
| vF8xwDFS | allAuthCodes | string |  |
| dxEueIk6 | followUpQuestion | string | 咨询追问 |
| yt0jqYYJ | resources | object | 文件地址 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)
  - `userFiles` (arrayString) - app:workflow.user_file_input

**3. 判断器**
- 节点ID: `n7Kmbt6Ecdcl`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**4. 指定回复**
- 节点ID: `ouXmpBkQil0R`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**5. 代码运行#5**
- 节点ID: `zoz4731LcSLcvtkD`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**6. 指定回复#5**
- 节点ID: `fuEnHrTKnBKfEezh`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. 判断器#18**
- 节点ID: `jZqKhYlNPLbkXIvT`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**8. 判断器#18**
- 节点ID: `iFgB92M5qnwm99mg`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**9. 变量更新#22**
- 节点ID: `sYJ12EW7BJTDa1Q6`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**10. 变量更新#23**
- 节点ID: `q3WSQvBeheo2lkh9`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**11. 变量更新#24**
- 节点ID: `ctXmprftsCxDCOjZ`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**12. 变量更新#25**
- 节点ID: `gEandQK964YsWfHy`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**13. 变量更新#26**
- 节点ID: `cwkUmcXdGiGeNdaV`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**14. 代码运行#6**
- 节点ID: `yRUaMvTPJxBXpgbx`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `reasons` (string) [动态] - reasons
  - `endDate` (string) [动态] - endDate
  - `startDate` (string) [动态] - startDate
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime

**15. 判断器#19**
- 节点ID: `wEIrgcK2GAyW664y`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**16. 指定回复#6**
- 节点ID: `eOK5YasTrChOzy26`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**17. 变量更新#15**
- 节点ID: `z0XkBZYJTQp0eHTh`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**18. 记录上次开始时间和结束时间**
- 节点ID: `q6Gz0EfG01gMuDJE`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result1` (string) [动态] - result1
  - `result2` (string) [动态] - result2

**19. 记录理由**
- 节点ID: `dLYgHIlKAS9Gi1Z0`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**20. 变量更新#16**
- 节点ID: `f2abFhV8v5pRNGJI`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**21. 判断器#11**
- 节点ID: `kPrZU4M5bmmd8CDQ`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**22. 判断器#12**
- 节点ID: `isydIwQCR6u0NmhQ`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**23. 指定回复#4**
- 节点ID: `oHlMHjt05AILvDu2`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**24. 判断是否走最快捷#5**
- 节点ID: `dk0EdUX0OcAU7VVY`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**25. 判断器#15**
- 节点ID: `yW2ZAbnTN4EwSXc4`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**26. 变量更新#16**
- 节点ID: `iWTB4qkgncnObO8y`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**27. 变量更新#17**
- 节点ID: `nT9cHbIfh4zHZo9h`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**28. AI 对话**
- 节点ID: `sB1qQQ8zDXXDCaL7`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**29. 文本拼接**
- 节点ID: `qsBLZ4thwmiXIjl2`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**30. 男女假期权限#6**
- 节点ID: `jqVBq5BCcMLJKNyH`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `sex` (string) [动态] - sex

**31. 判断器#10**
- 节点ID: `lTfLGghZYPuFIqUZ`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**32. 判断器#11**
- 节点ID: `nl42HZAxkovBJexx`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**33. 指定回复#8**
- 节点ID: `fbim2PjzSwwRe5Kg`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**34. 指定回复#9**
- 节点ID: `dFvgUWGYfzdXdmDM`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**35. 指定回复#10**
- 节点ID: `lgzf2TfzUazMhR0a`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**36. 代码运行#7**
- 节点ID: `eUgmlwoXsXWJx79C`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**37. 判断器#12**
- 节点ID: `ubWEgF0HRUuyAqeG`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**38. 指定回复#11**
- 节点ID: `mbskoCmlbM85T7L1`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**39. 指定回复#12**
- 节点ID: `lU620E7VjZzzLa8x`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**40. 检查typeCode是否正常#8**
- 节点ID: `lSu1uLWZwjnoukKS`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data1` (string) [动态] - data1

**41. 判断器#11**
- 节点ID: `yNddm5g21se1xpEb`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**42. 指定回复#11**
- 节点ID: `m17JnfA2zLyXr8dh`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**43. 指定回复#12**
- 节点ID: `aaGnTp0dtXNqTmCd`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**44. 记录类型**
- 节点ID: `rDNAHM4EmcNvvSEF`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**45. 记录上次开始日期和结束日期**
- 节点ID: `pBMvRqiix5dsXLXw`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result1` (string) [动态] - result1
  - `result2` (string) [动态] - result2

**46. 变量更新#10**
- 节点ID: `v5pri4pXYzcF5DJp`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**47. 变量更新#11**
- 节点ID: `zi4w6XpCjsO5Ea10`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**48. 判断器#12**
- 节点ID: `qnoicIxCeHiuISSL`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**49. 代码运行#11**
- 节点ID: `xGlHpKzM1DGq5ltF`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime

**50. 代码运行#13**
- 节点ID: `qCyJ9XHxfe0Eo5Jl`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**51. 指定回复#13**
- 节点ID: `wC2qwxrqZcw5AAcr`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**52. 人力AI咨询（新）**
- 节点ID: `hrbNulupkzfW6Dcb`
- 节点类型: `appModule`
- 说明: 当前版本支持考勤咨询（增加了薪酬福利）
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**53. 代码运行#13**
- 节点ID: `eF9aQCT1KXpnipeq`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**54. 指定回复#13**
- 节点ID: `qaEHCV1mYF2hGuMi`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**55. 测试-请假意图判断 **
- 节点ID: `e0R84B4Wu0AfosQg`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**56. 测试-AI助手能力拓展 **
- 节点ID: `gOqjVqPbM5PdrZ5A`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**57. 测试-AI考勤-获取用户假期权限**
- 节点ID: `pMlguWT0BluG3NHM`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**58. 测试-AI考勤-快捷（主AB）**
- 节点ID: `bpzmSDnygAQ5ksUJ`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**59. 测试-Al-考勤非快捷（C）**
- 节点ID: `enRmweF0elmnWE7Y`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**60. 文件附件**
- 节点ID: `z68h5O6vc88Hnx8c`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**61. 问题分类**
- 节点ID: `hMOjbFuYlBcLA1tI`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**62. 指定回复#14**
- 节点ID: `nUugFb47qTIh32jN`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**63. 指定回复#15**
- 节点ID: `nrueFKmldKo5QpU0`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

---

## 工作流: 主流程里的测试-AI助手能力拓展 .json

**节点数量**: 26
**边数量**: 24

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 创建应用时候自动生成(应用秘钥) |
| corp_id | corp_id | string | 企业Code即为每个企业都拥有的一个唯一的corpid |
| grant_type | grant_type | string | 固定值，客户端模式 |
| oKrPKK1A | form_ldap | string | 账号名字 |
| wCJ2RCGE | allAuthCodes | string |  |
| xMiOwrAj | followUpQuestion | string | 咨询追问 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 问题分类**
- 节点ID: `rUbxt6b3uXDmi3W8`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**4. 问题分类#2**
- 节点ID: `rUu17XsNflrhtxB7`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**5. 我的异常#13**
- 节点ID: `xh2XCD3ZgELGZ3l9`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**6. 销假申请#12**
- 节点ID: `dy1nArkgUPhvAh7i`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. 我的信息#12**
- 节点ID: `qrINWieMEyv76rat`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**8. 假期余额查询#12**
- 节点ID: `yT1mOke1Gvas8isg`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**9. 团队考勤#12**
- 节点ID: `y3ZirpPQVzy0nc0y`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 移动排班#13**
- 节点ID: `mChm0J5AlWsC9ahq`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**11. 打卡明细#13**
- 节点ID: `nZEOxbEMZrWh64zk`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**12. 原始打卡记录#13**
- 节点ID: `bOP9IoueGJKgJbu0`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**13. 我的排班#13**
- 节点ID: `gpLWK5uJrirntajE`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**14. 考勤统计#12**
- 节点ID: `liQcOI8XbEwgYTp0`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**15. 加班申请#12**
- 节点ID: `vb84CAsQHVdsQKuV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**16. 我的表单#12**
- 节点ID: `rhwJWYlg7rpdvTUu`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**17. 问题分类#3**
- 节点ID: `rXe9UlcMP7Vncltb`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**18. AI考勤-查询假期余额#2**
- 节点ID: `bLS51pGxn1323EEI`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**19. 判断器**
- 节点ID: `jONYKu4i2evpkYoM`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**20. 代码运行**
- 节点ID: `rxZI6yQI4ilogLkp`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**21. 指定回复#14**
- 节点ID: `nqwZmHi4WMOcHMcv`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**22. 代码运行#2**
- 节点ID: `i1rrhTKOc0WGSLQf`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**23. 判断器#2**
- 节点ID: `i3qLTcFTAnjznwpv`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**24. 指定回复#14**
- 节点ID: `b8IUIj6ZysBUSvJc`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**25. 测试-AI考勤-获取用户假期权限**
- 节点ID: `sB6VhTFnQjNyTrkz`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**26. 人力AI咨询（新）**
- 节点ID: `ew6iImBkbNtY3xCz`
- 节点类型: `appModule`
- 说明: 当前版本支持考勤咨询（增加了薪酬福利）
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

---

## 工作流: 主流程里的测试-AI助手能力拓展 中的AI考勤-查询假期余额.json

**节点数量**: 11
**边数量**: 14

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取假期余额**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 代码运行#2 解析假期余额**
- 节点ID: `j1tTgGRaVr9g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**9. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**11. 文本内容提取**
- 节点ID: `eHP6Zb5TLtZC`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `typeName` (string) - 提取结果-typeName

---

## 工作流: 主流程里的测试-AI助手能力拓展中的测试-AI考勤-获取用户假期权限.json

**节点数量**: 11
**边数量**: 11

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取假期余额**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 代码运行#2 解析假期余额**
- 节点ID: `j1tTgGRaVr9g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (string) [动态] - flag
  - `result` (string) [动态] - result
  - `errorMsg` (string) [动态] - errorMsg

**9. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**11. 假期整合#4**
- 节点ID: `ociBmoebXRv9XjJt`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

---

## 工作流: 主流程里的测试-AI考勤-快捷（主AB）.json

**节点数量**: 5
**边数量**: 4

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| schedule_list | schedule_list | string |  |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 判断器#12**
- 节点ID: `s9WJYYrUK8Sc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**4. 测试-AI考勤-快捷（昨天前天B）**
- 节点ID: `rxItT4AdHp2Ze5xj`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**5. 测试-AI考勤-快捷（今天之后A）**
- 节点ID: `ynejtwjWx0yTzPp7`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

---

## 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）.json

**节点数量**: 8
**边数量**: 6

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| schedule_list | schedule_list | string |  |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 判断器#25**
- 节点ID: `y07Q9mcw8l5nrr2s`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**4. 测试-AI考勤-快捷（今天a1）**
- 节点ID: `hied6AOV7N48UJNj`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**5. 测试-AI考勤-快捷（明天a2）**
- 节点ID: `w5z0NXJNg8hBLkcU`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**6. 测试-AI考勤-快捷（大后天a4）  **
- 节点ID: `cpvU66W0zKuWjicA`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**7. 测试-AI考勤-快捷（下周a5） **
- 节点ID: `h2kpWTZHvjMp0pIP`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**8. 测试-AI考勤-快捷（后天a3）**
- 节点ID: `bR4FRGY9IYWOwPVJ`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

---

## 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（下周a5） .json

**节点数量**: 57
**边数量**: 77

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| schedule_list | schedule_list | string |  |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 排班表（前30天，后30天）**
- 节点ID: `nfwAbCZJ0dLynUeu`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**4. 代码运行#17**
- 节点ID: `y69Re8zt9qFadFTR`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**5. 指定回复#7**
- 节点ID: `q8xHkcZ7tppqdiDl`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**6. 判断器#30**
- 节点ID: `ygmRDXxcH9Eg5mwn`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**7. 变量更新#45**
- 节点ID: `eGeWM0QwxZOeRbe5`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**8. 变量更新#46**
- 节点ID: `ehLIfkhaP54CHIoy`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**9. 变量更新#47**
- 节点ID: `pH3opE31lI0zEmue`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**10. 变量更新#48**
- 节点ID: `x56MUgbAplddasOZ`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**11. 判断开始时间和结束时间大小#19**
- 节点ID: `lS4hqWz5JapB3UcJ`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (number) [动态] - result
  - `data2` (string) [动态] - data2

**12. 判断器#31**
- 节点ID: `uatTVnY1YgUJemXo`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**13. 判断器#32**
- 节点ID: `aLRq0ZtdcwNmsWnw`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**14. 变量更新#49**
- 节点ID: `oTCLvfMrRIclhDFg`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**15. 结束时间增加一天#20**
- 节点ID: `pgkyIW4irdSsr8PW`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**16. 结束时间增加一天变量更新#50**
- 节点ID: `uFVNvbb4jnvtJbuH`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**17. 判断器#33**
- 节点ID: `peeScd30qhxrkUuN`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**18. 开始时间变更为中间时间#51**
- 节点ID: `rUXdtZ6oWriAkKyF`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**19. 开始日期增加一天变量更新#52**
- 节点ID: `dim9R6fOiEIZqVSy`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**20. 变量更新#55**
- 节点ID: `wFoVhGauN8N4fgbr`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**21. 请假理由提取-4#7**
- 节点ID: `oYH6ppSxDzYy88nW`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `reasons` (string) - 提取结果-reasons
  - `leaveDays` (string) - 提取结果-leaveDays

**22. 判断器#38**
- 节点ID: `sYJWVxcFmdF7bWQc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**23. 变量更新#65**
- 节点ID: `fj23g1fAHlZpWOte`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**24. 变量更新#76**
- 节点ID: `yraBjgGYFGP8U1bj`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**25. 指定回复#8**
- 节点ID: `tUHCiQcct38I6hpK`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**26. 判断器#19**
- 节点ID: `snBdKUenht6splWi`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**27. 变量更新#33**
- 节点ID: `adRWQHP1TnBtjJTu`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**28. 判断器#20**
- 节点ID: `bMpmvYdJjCA1ZLgK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**29. 今日提前1小时下班#15**
- 节点ID: `xiF2Vx9uoZ807zBN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**30. 变量更新#34**
- 节点ID: `lkyqSm7wkx7ox2X8`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**31. 今日上班推迟0.5小时#16**
- 节点ID: `w7yDsEdGWYOBbnqw`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**32. 变量更新#35**
- 节点ID: `pzvyHX6lw2owLzPp`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**33. 判断器#22**
- 节点ID: `mT263BlPWiYnqQ9v`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**34. 今日推迟一小时上班#8**
- 节点ID: `nQdRgrkFYWxADlRq`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**35. 变量更新#18**
- 节点ID: `ijfSoACYa1zxhnTq`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**36. 提取每天排版信息#10**
- 节点ID: `kuF3L8FJbvDjlif0`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result1` (string) [动态] - result1
  - `result2` (string) [动态] - result2
  - `result3` (string) [动态] - result3
  - `result4` (string) [动态] - result4
  - `result5` (string) [动态] - result5
  - `result6` (string) [动态] - result6
  - `result7` (string) [动态] - result7
  - `result8` (string) [动态] - result8
  - `result9` (string) [动态] - result9
  - `result10` (string) [动态] - result10
  - `result11` (string) [动态] - result11
  - `result12` (string) [动态] - result12
  - `result13` (string) [动态] - result13
  - `result14` (string) [动态] - result14

**37. 提取用户日期排版#12**
- 节点ID: `veVpCAJ7Z9DC2xQ5`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**38. 用户输入日期#11**
- 节点ID: `znp1BdErQW0b06k9`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**39. 日期信息#10**
- 节点ID: `bmdYONzalnnxNcO0`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime
  - `shiftDate` (string) [动态] - shiftDate
  - `middleTime` (string) [动态] - middleTime

**40. 判断器#11**
- 节点ID: `ic9z0ZWIiOdRcwCG`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**41. 变量更新#26**
- 节点ID: `cRoykU8grcOhy3Ys`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**42. 代码运行#11**
- 节点ID: `a37MmtZoc0H790wG`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**43. 判断器#12**
- 节点ID: `sniHvnx84MSsyVZn`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**44. 代码运行#12**
- 节点ID: `wVx2kpgORKqwpLkI`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**45. 判断器#12**
- 节点ID: `hVTyWQUNIrp7HzS8`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**46. 代码运行#13**
- 节点ID: `chLBZnMtRiiTH6vL`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `first30Days` (string) [动态] - first30Days
  - `last35Days` (string) [动态] - last35Days

**47. 变量更新#17**
- 节点ID: `eqqLtN8M7Zvnyif7`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**48. 变量更新#18**
- 节点ID: `nzcxkkuLpCWpMl2e`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**49. 代码运行#14**
- 节点ID: `zhFWxOsHrNrLSCFN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**50. 判断器#12**
- 节点ID: `vhG6NjbIAlwOwwIC`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**51. 变量更新#19**
- 节点ID: `l2zwn23PeXlAl8Wq`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**52. 判断器#13**
- 节点ID: `nw4PY3wEYAyOm4XT`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**53. 指定回复#3**
- 节点ID: `iaMqfVYoyIZjfoxN`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**54. 判断器#14**
- 节点ID: `wDKjRl0K2S7FI7Gc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**55. 文本拼接#2**
- 节点ID: `p38aBmxpeM16c9Lp`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**56. 文本拼接#3**
- 节点ID: `o2Jqjf0jJxXnjwKK`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**57. 文本拼接#4**
- 节点ID: `jPd81dtBEk9XzJxk`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

---

## 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（今天a1）.json

**节点数量**: 50
**边数量**: 70

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| schedule_list | schedule_list | string |  |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 排班表（前30天，后30天）**
- 节点ID: `nfwAbCZJ0dLynUeu`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**4. 提取每天排版信息**
- 节点ID: `uv7KEXeSYNmWg4CV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result1` (string) [动态] - result1
  - `result2` (string) [动态] - result2
  - `result3` (string) [动态] - result3
  - `result4` (string) [动态] - result4
  - `result5` (string) [动态] - result5
  - `result6` (string) [动态] - result6

**5. 获取第一天排版**
- 节点ID: `wxSg9L54P3uxWLCd`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime
  - `shiftDate` (string) [动态] - shiftDate
  - `middleTime` (string) [动态] - middleTime

**6. 判断开始时间和结束时间大小#15**
- 节点ID: `acXnrnTPScc5DPdH`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (number) [动态] - result
  - `data2` (string) [动态] - data2

**7. 判断器#26**
- 节点ID: `iuWzL2HcKPYtDO1i`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**8. 变量更新#37**
- 节点ID: `zuvDgOZZ4lhGFrjj`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**9. 变量更新#38**
- 节点ID: `jCe1OFgRNBoTtmbH`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**10. 变量更新#39**
- 节点ID: `mGst3NPQgfS4Hn2E`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**11. 变量更新#40**
- 节点ID: `dZTIslj2ZMvDZEl4`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**12. 结束时间增加一天#16**
- 节点ID: `kPtEg5DZWW7WduuW`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**13. 判断器#27**
- 节点ID: `ju3MuSZW0uXV6NRK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**14. 代码运行#17**
- 节点ID: `y69Re8zt9qFadFTR`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**15. 结束时间增加一天变量更新#41**
- 节点ID: `wxs8TpUbHIsw5Jle`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**16. 指定回复#7**
- 节点ID: `q8xHkcZ7tppqdiDl`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**17. 判断器#28**
- 节点ID: `kML29NBnqBXlun0W`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**18. 变量更新#42**
- 节点ID: `qcRpAkC2tYshkNfF`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**19. 判断器#29**
- 节点ID: `i8EH0KCxZqve30PF`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**20. 开始日期增加一天变量更新#43**
- 节点ID: `lRbECQn3j5WIHNtv`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**21. 开始时间变更为中间时间#44**
- 节点ID: `tXcwysV3UF4aG2AA`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**22. 开始时间变更为中间时间#56**
- 节点ID: `dWbcoOsGU0a8kN09`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**23. 请假理由提取-4#7**
- 节点ID: `oYH6ppSxDzYy88nW`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `reasons` (string) - 提取结果-reasons
  - `leaveDays` (string) - 提取结果-leaveDays

**24. 判断器#38**
- 节点ID: `sYJWVxcFmdF7bWQc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**25. 变量更新#65**
- 节点ID: `fj23g1fAHlZpWOte`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**26. 变量更新#76**
- 节点ID: `yraBjgGYFGP8U1bj`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**27. 判断器#46**
- 节点ID: `fWPRkpJdFLPLPFtV`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**28. 指定回复#8**
- 节点ID: `tUHCiQcct38I6hpK`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**29. 判断器#20**
- 节点ID: `bMpmvYdJjCA1ZLgK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**30. 今日提前1小时下班#15**
- 节点ID: `xiF2Vx9uoZ807zBN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**31. 变量更新#34**
- 节点ID: `lkyqSm7wkx7ox2X8`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**32. 今日上班推迟0.5小时#16**
- 节点ID: `w7yDsEdGWYOBbnqw`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**33. 变量更新#35**
- 节点ID: `pzvyHX6lw2owLzPp`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**34. 今日推迟一小时上班#8**
- 节点ID: `pjYgqiQCGOBOuCIl`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**35. 变量更新#18**
- 节点ID: `kGZ4uraoVfsbzt8C`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**36. 判断器#11**
- 节点ID: `rLsiO6RXfBKFU7Ms`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**37. 变量更新#18**
- 节点ID: `gxFmI3GLe1LSZStZ`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**38. 代码运行#9**
- 节点ID: `rVkbju7NfdkuO55b`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**39. 判断器#12**
- 节点ID: `wwSMVakdbFxUyK3p`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**40. 代码运行#10**
- 节点ID: `i0fHyXaO4T8giGEF`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**41. 判断器#12**
- 节点ID: `p3sCID1h8f4oimBp`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**42. 代码运行#11**
- 节点ID: `jA4xW9x2C0EcM0LC`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `first30Days` (string) [动态] - first30Days
  - `last30Days` (string) [动态] - last30Days

**43. 判断器#11**
- 节点ID: `vSWxIqYDnowaAotZ`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**44. 变量更新#16**
- 节点ID: `sB2Di5DiPoH97PTu`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**45. 变量更新#17**
- 节点ID: `h4Q8U0HLNKpgdJ5P`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**46. 变量更新#18**
- 节点ID: `mZnpAnWgq04W4OfF`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**47. 代码运行#12**
- 节点ID: `myDXc7656YF1yqSB`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**48. 判断器#12**
- 节点ID: `xgTETp3b17Oj8Hdl`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**49. 变量更新#19**
- 节点ID: `vD2B8QhRb4K2iB5o`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**50. 指定回复#3**
- 节点ID: `nfRvB5WzKOsVn8Mm`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

---

## 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（后天a3）.json

**节点数量**: 50
**边数量**: 72

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| schedule_list | schedule_list | string |  |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 排班表（前30天，后30天）**
- 节点ID: `nfwAbCZJ0dLynUeu`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**4. 提取每天排版信息**
- 节点ID: `uv7KEXeSYNmWg4CV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result1` (string) [动态] - result1
  - `result2` (string) [动态] - result2
  - `result3` (string) [动态] - result3
  - `result4` (string) [动态] - result4
  - `result5` (string) [动态] - result5
  - `result6` (string) [动态] - result6

**5. 代码运行#17**
- 节点ID: `y69Re8zt9qFadFTR`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**6. 指定回复#7**
- 节点ID: `q8xHkcZ7tppqdiDl`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. 获取第三天排版#18**
- 节点ID: `m6z5Pxy03EpwkhHP`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime
  - `shiftDate` (string) [动态] - shiftDate
  - `middleTime` (string) [动态] - middleTime

**8. 判断器#30**
- 节点ID: `ygmRDXxcH9Eg5mwn`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**9. 变量更新#45**
- 节点ID: `eGeWM0QwxZOeRbe5`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**10. 变量更新#46**
- 节点ID: `ehLIfkhaP54CHIoy`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**11. 变量更新#47**
- 节点ID: `pH3opE31lI0zEmue`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**12. 变量更新#48**
- 节点ID: `x56MUgbAplddasOZ`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**13. 判断开始时间和结束时间大小#19**
- 节点ID: `lS4hqWz5JapB3UcJ`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (number) [动态] - result
  - `data2` (string) [动态] - data2

**14. 判断器#31**
- 节点ID: `uatTVnY1YgUJemXo`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**15. 判断器#32**
- 节点ID: `aLRq0ZtdcwNmsWnw`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**16. 变量更新#49**
- 节点ID: `oTCLvfMrRIclhDFg`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**17. 结束时间增加一天#20**
- 节点ID: `pgkyIW4irdSsr8PW`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**18. 结束时间增加一天变量更新#50**
- 节点ID: `uFVNvbb4jnvtJbuH`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**19. 判断器#33**
- 节点ID: `peeScd30qhxrkUuN`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**20. 开始时间变更为中间时间#51**
- 节点ID: `rUXdtZ6oWriAkKyF`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**21. 开始日期增加一天变量更新#52**
- 节点ID: `dim9R6fOiEIZqVSy`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**22. 变量更新#55**
- 节点ID: `wFoVhGauN8N4fgbr`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**23. 请假理由提取-4#7**
- 节点ID: `oYH6ppSxDzYy88nW`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `reasons` (string) - 提取结果-reasons
  - `leaveDays` (string) - 提取结果-leaveDays

**24. 判断器#38**
- 节点ID: `sYJWVxcFmdF7bWQc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**25. 变量更新#65**
- 节点ID: `fj23g1fAHlZpWOte`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**26. 变量更新#76**
- 节点ID: `yraBjgGYFGP8U1bj`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**27. 指定回复#8**
- 节点ID: `tUHCiQcct38I6hpK`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**28. 判断器#19**
- 节点ID: `snBdKUenht6splWi`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**29. 判断器#20**
- 节点ID: `bMpmvYdJjCA1ZLgK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**30. 今日提前1小时下班#15**
- 节点ID: `xiF2Vx9uoZ807zBN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**31. 变量更新#34**
- 节点ID: `lkyqSm7wkx7ox2X8`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**32. 今日上班推迟0.5小时#16**
- 节点ID: `w7yDsEdGWYOBbnqw`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**33. 变量更新#35**
- 节点ID: `pzvyHX6lw2owLzPp`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**34. 判断器#22**
- 节点ID: `mT263BlPWiYnqQ9v`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**35. 今日推迟一小时上班#8**
- 节点ID: `nQdRgrkFYWxADlRq`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**36. 变量更新#18**
- 节点ID: `ijfSoACYa1zxhnTq`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**37. 判断器#11**
- 节点ID: `qAi47Kl5JO5WLRoN`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**38. 变量更新#24**
- 节点ID: `aCsEC4Nalr5hV3WB`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**39. 代码运行#9**
- 节点ID: `e6rbZHRVIkwTmJWJ`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**40. 判断器#12**
- 节点ID: `mjD7pnRr4Umx3PuI`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**41. 代码运行#10**
- 节点ID: `kVpgCrEOFlbTtTJd`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**42. 判断器#12**
- 节点ID: `og7mZNR0B4bj53Ya`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**43. 变量更新#16**
- 节点ID: `vbnnVbRClW5NL0G2`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**44. 代码运行#11**
- 节点ID: `yIyQweRzbdift2zT`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `first30Days` (string) [动态] - first30Days
  - `last30Days` (string) [动态] - last30Days

**45. 变量更新#17**
- 节点ID: `kfZYPKWIIEMw1Zss`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**46. 变量更新#18**
- 节点ID: `prCVxKQHSF7hZs93`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**47. 代码运行#12**
- 节点ID: `pVmR2KlbJWopCZz1`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**48. 判断器#12**
- 节点ID: `sHYav22BDpbGRhrh`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**49. 变量更新#19**
- 节点ID: `qpYvxIltXEzeYmu6`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**50. 指定回复#3**
- 节点ID: `pUbfPFeAgoJM3GY2`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

---

## 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（大后天a4）  .json

**节点数量**: 49
**边数量**: 71

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| schedule_list | schedule_list | string |  |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 最近5天排班表**
- 节点ID: `nfwAbCZJ0dLynUeu`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**4. 提取每天排版信息**
- 节点ID: `uv7KEXeSYNmWg4CV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result1` (string) [动态] - result1
  - `result2` (string) [动态] - result2
  - `result3` (string) [动态] - result3
  - `result4` (string) [动态] - result4
  - `result5` (string) [动态] - result5
  - `result6` (string) [动态] - result6

**5. 代码运行#17**
- 节点ID: `y69Re8zt9qFadFTR`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**6. 指定回复#7**
- 节点ID: `q8xHkcZ7tppqdiDl`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. 获取第四天排版#18**
- 节点ID: `m6z5Pxy03EpwkhHP`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime
  - `shiftDate` (string) [动态] - shiftDate
  - `middleTime` (string) [动态] - middleTime

**8. 判断器#30**
- 节点ID: `ygmRDXxcH9Eg5mwn`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**9. 变量更新#45**
- 节点ID: `eGeWM0QwxZOeRbe5`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**10. 变量更新#46**
- 节点ID: `ehLIfkhaP54CHIoy`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**11. 变量更新#47**
- 节点ID: `pH3opE31lI0zEmue`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**12. 变量更新#48**
- 节点ID: `x56MUgbAplddasOZ`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**13. 判断开始时间和结束时间大小#19**
- 节点ID: `lS4hqWz5JapB3UcJ`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (number) [动态] - result
  - `data2` (string) [动态] - data2

**14. 判断器#31**
- 节点ID: `uatTVnY1YgUJemXo`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**15. 判断器#32**
- 节点ID: `aLRq0ZtdcwNmsWnw`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**16. 变量更新#49**
- 节点ID: `oTCLvfMrRIclhDFg`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**17. 结束时间增加一天#20**
- 节点ID: `pgkyIW4irdSsr8PW`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**18. 结束时间增加一天变量更新#50**
- 节点ID: `uFVNvbb4jnvtJbuH`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**19. 判断器#33**
- 节点ID: `peeScd30qhxrkUuN`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**20. 开始时间变更为中间时间#51**
- 节点ID: `rUXdtZ6oWriAkKyF`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**21. 开始日期增加一天变量更新#52**
- 节点ID: `dim9R6fOiEIZqVSy`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**22. 变量更新#55**
- 节点ID: `wFoVhGauN8N4fgbr`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**23. 请假理由提取-4#7**
- 节点ID: `oYH6ppSxDzYy88nW`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `reasons` (string) - 提取结果-reasons
  - `leaveDays` (string) - 提取结果-leaveDays

**24. 判断器#38**
- 节点ID: `sYJWVxcFmdF7bWQc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**25. 变量更新#65**
- 节点ID: `fj23g1fAHlZpWOte`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**26. 变量更新#76**
- 节点ID: `yraBjgGYFGP8U1bj`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**27. 指定回复#8**
- 节点ID: `tUHCiQcct38I6hpK`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**28. 判断器#19**
- 节点ID: `snBdKUenht6splWi`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**29. 变量更新#33**
- 节点ID: `adRWQHP1TnBtjJTu`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**30. 判断器#20**
- 节点ID: `bMpmvYdJjCA1ZLgK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**31. 今日提前1小时下班#15**
- 节点ID: `xiF2Vx9uoZ807zBN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**32. 变量更新#34**
- 节点ID: `lkyqSm7wkx7ox2X8`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**33. 今日上班推迟0.5小时#16**
- 节点ID: `w7yDsEdGWYOBbnqw`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**34. 变量更新#35**
- 节点ID: `pzvyHX6lw2owLzPp`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**35. 判断器#22**
- 节点ID: `mT263BlPWiYnqQ9v`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**36. 今日推迟一小时上班#8**
- 节点ID: `nQdRgrkFYWxADlRq`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**37. 变量更新#18**
- 节点ID: `ijfSoACYa1zxhnTq`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**38. 判断器#11**
- 节点ID: `lgYbg5R9bhIvXn21`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**39. 变量更新#26**
- 节点ID: `eYiONcj7YU55v9Vb`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**40. 代码运行#9**
- 节点ID: `wafZSHxIVKf4BuFE`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**41. 判断器#12**
- 节点ID: `fX1EuRzdb277lJuS`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**42. 代码运行#10**
- 节点ID: `riUKIYBlhON4B5Gv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**43. 判断器#12**
- 节点ID: `uX9WKqy2nKltbOhv`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**44. 代码运行#11**
- 节点ID: `bsDvP4NoqkSMdASO`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `first30Days` (string) [动态] - first30Days
  - `last30Days` (string) [动态] - last30Days

**45. 变量更新#17**
- 节点ID: `jiL4KjKTAHDvfJhx`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**46. 变量更新#18**
- 节点ID: `by3cT8aLZfOUHaMI`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**47. 代码运行#12**
- 节点ID: `vNpgcVpVPD889ONb`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**48. 判断器#12**
- 节点ID: `jQMqEtAyZm7UJKJ2`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**49. 变量更新#19**
- 节点ID: `dlM6c03td9yGmdzx`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

---

## 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（今天之后A）中的测试-AI考勤-快捷（明天a2）.json

**节点数量**: 50
**边数量**: 70

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| schedule_list | schedule_list | string |  |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 排班表（前30天，后30天）**
- 节点ID: `nfwAbCZJ0dLynUeu`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**4. 提取每天排版信息**
- 节点ID: `uv7KEXeSYNmWg4CV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result1` (string) [动态] - result1
  - `result2` (string) [动态] - result2
  - `result3` (string) [动态] - result3
  - `result4` (string) [动态] - result4
  - `result5` (string) [动态] - result5
  - `result6` (string) [动态] - result6

**5. 获取第二天排版#15**
- 节点ID: `iFsyEJh3hxT3R2Pn`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime
  - `shiftDate` (string) [动态] - shiftDate
  - `middleTime` (string) [动态] - middleTime

**6. 判断开始时间和结束时间大小#15**
- 节点ID: `acXnrnTPScc5DPdH`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (number) [动态] - result
  - `data2` (string) [动态] - data2

**7. 判断器#26**
- 节点ID: `iuWzL2HcKPYtDO1i`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**8. 变量更新#37**
- 节点ID: `zuvDgOZZ4lhGFrjj`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**9. 变量更新#38**
- 节点ID: `jCe1OFgRNBoTtmbH`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**10. 变量更新#39**
- 节点ID: `mGst3NPQgfS4Hn2E`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**11. 变量更新#40**
- 节点ID: `dZTIslj2ZMvDZEl4`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**12. 结束时间增加一天#16**
- 节点ID: `kPtEg5DZWW7WduuW`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**13. 判断器#27**
- 节点ID: `ju3MuSZW0uXV6NRK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**14. 代码运行#17**
- 节点ID: `y69Re8zt9qFadFTR`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**15. 结束时间增加一天变量更新#41**
- 节点ID: `wxs8TpUbHIsw5Jle`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**16. 指定回复#7**
- 节点ID: `q8xHkcZ7tppqdiDl`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**17. 判断器#28**
- 节点ID: `kML29NBnqBXlun0W`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**18. 变量更新#42**
- 节点ID: `qcRpAkC2tYshkNfF`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**19. 判断器#29**
- 节点ID: `i8EH0KCxZqve30PF`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**20. 开始日期增加一天变量更新#43**
- 节点ID: `lRbECQn3j5WIHNtv`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**21. 开始时间变更为中间时间#44**
- 节点ID: `tXcwysV3UF4aG2AA`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**22. 开始时间变更为中间时间#56**
- 节点ID: `dWbcoOsGU0a8kN09`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**23. 请假理由提取-4#7**
- 节点ID: `oYH6ppSxDzYy88nW`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `reasons` (string) - 提取结果-reasons
  - `leaveDays` (string) - 提取结果-leaveDays

**24. 判断器#38**
- 节点ID: `sYJWVxcFmdF7bWQc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**25. 变量更新#65**
- 节点ID: `fj23g1fAHlZpWOte`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**26. 变量更新#76**
- 节点ID: `yraBjgGYFGP8U1bj`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**27. 判断器#46**
- 节点ID: `fWPRkpJdFLPLPFtV`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**28. 指定回复#8**
- 节点ID: `tUHCiQcct38I6hpK`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**29. 判断器#19**
- 节点ID: `snBdKUenht6splWi`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**30. 判断器#20**
- 节点ID: `bMpmvYdJjCA1ZLgK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**31. 今日提前1小时下班#15**
- 节点ID: `xiF2Vx9uoZ807zBN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**32. 变量更新#34**
- 节点ID: `lkyqSm7wkx7ox2X8`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**33. 今日上班推迟0.5小时#16**
- 节点ID: `w7yDsEdGWYOBbnqw`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**34. 变量更新#35**
- 节点ID: `pzvyHX6lw2owLzPp`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**35. 今日推迟一小时上班#8**
- 节点ID: `w4wUct2C6Ht3fTEJ`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**36. 变量更新#18**
- 节点ID: `rHFu963THMAXGGPs`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**37. 判断器#11**
- 节点ID: `aatXHGu6oQ4NZkwo`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**38. 变量更新#18**
- 节点ID: `qHAzoTaySFXRasLl`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**39. 代码运行#9**
- 节点ID: `u3JreLnArIL5KybO`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**40. 判断器#12**
- 节点ID: `ovdIH1vZGELf2j8d`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**41. 代码运行#10**
- 节点ID: `vMZxTbyO3uJKFFG7`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**42. 判断器#12**
- 节点ID: `wq437w2fM4F2I2OM`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**43. 变量更新#16**
- 节点ID: `eNT1yXCDfzhUArIx`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**44. 代码运行#11**
- 节点ID: `q78D7UKzTuawHhO4`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `first30Days` (string) [动态] - first30Days
  - `last30Days` (string) [动态] - last30Days

**45. 变量更新#17**
- 节点ID: `wLLpolqFDAuwdeW8`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**46. 变量更新#18**
- 节点ID: `hgf2PeebwX3MeWEm`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**47. 代码运行#12**
- 节点ID: `yJQgGU0lHJx6wKwO`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**48. 判断器#12**
- 节点ID: `wtE4KhYoQ53Tzcd3`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**49. 变量更新#19**
- 节点ID: `omOQpVgEXYAQsoJD`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**50. 指定回复#3**
- 节点ID: `vDZnU7xKzcTYmLar`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

---

## 工作流: 主流程里的测试-AI考勤-快捷（主AB）中的测试-AI考勤-快捷（昨天前天B）.json

**节点数量**: 48
**边数量**: 66

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| schedule_list | schedule_list | string |  |
| empNo | empNo | string |  |
| pre_schedule_list | pre_schedule_list | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 代码运行#17**
- 节点ID: `y69Re8zt9qFadFTR`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**4. 指定回复#7**
- 节点ID: `q8xHkcZ7tppqdiDl`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**5. 请假理由提取-4#7**
- 节点ID: `oYH6ppSxDzYy88nW`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `reasons` (string) - 提取结果-reasons
  - `leaveDays` (string) - 提取结果-leaveDays

**6. 判断器#38**
- 节点ID: `sYJWVxcFmdF7bWQc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**7. 变量更新#65**
- 节点ID: `fj23g1fAHlZpWOte`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**8. 文本拼接#4**
- 节点ID: `wvopJwv9Y6Pjw5eK`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**9. 提取每天排版信息#21**
- 节点ID: `zAJdWYNDGbKAyKYZ`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result1` (string) [动态] - result1
  - `result2` (string) [动态] - result2
  - `result3` (string) [动态] - result3

**10. 判断器#39**
- 节点ID: `i4EGV4NZVKhEfjgp`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**11. 获取昨天排版#22**
- 节点ID: `bMckDIznJ80KFVVP`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime
  - `shiftDate` (string) [动态] - shiftDate
  - `middleTime` (string) [动态] - middleTime

**12. 获取前天排版#23**
- 节点ID: `kZ0C4gHpA0jZRAkC`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime
  - `shiftDate` (string) [动态] - shiftDate
  - `middleTime` (string) [动态] - middleTime

**13. 判断器#40**
- 节点ID: `qekRTuVpp7dafmG8`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**14. 变量更新#67**
- 节点ID: `qOhjWqioKuWYq56M`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**15. 变量更新#68**
- 节点ID: `iQqQHBwb92PmKLny`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**16. 变量更新#69**
- 节点ID: `e24Nv4I7aA4gAFtG`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**17. 变量更新#70**
- 节点ID: `s5Rn1BukfDdrHB4m`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**18. 判断开始时间和结束时间大小#24**
- 节点ID: `wsTANH0aRZl0eWKE`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (number) [动态] - result
  - `data2` (string) [动态] - data2

**19. 判断器#41**
- 节点ID: `soS1a7kOY58fG0dk`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**20. 结束时间增加一天#25**
- 节点ID: `wZerkmkNVFhz9skQ`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**21. 结束时间增加一天变量更新#71**
- 节点ID: `wOqHQz67DfsihBG1`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**22. 判断器#42**
- 节点ID: `syb3Kk14USdf3u5q`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**23. 变量更新#72**
- 节点ID: `pJjlewRBNKtniRli`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**24. 判断器#43**
- 节点ID: `yHW9JeyyJMhLjFey`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**25. 开始时间变更为中间时间#73**
- 节点ID: `wzjZpMqKTaR7sR1o`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**26. 开始日期增加一天变量更新#74**
- 节点ID: `gOMrjCQX5qMwXkbm`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**27. 变量更新#75**
- 节点ID: `ypYfzit1wCI7htsI`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**28. 变量更新#76**
- 节点ID: `yraBjgGYFGP8U1bj`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**29. 判断器#20**
- 节点ID: `bMpmvYdJjCA1ZLgK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**30. 今日提前1小时下班#15**
- 节点ID: `xiF2Vx9uoZ807zBN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**31. 变量更新#34**
- 节点ID: `lkyqSm7wkx7ox2X8`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**32. 今日上班推迟0.5小时#16**
- 节点ID: `w7yDsEdGWYOBbnqw`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**33. 变量更新#35**
- 节点ID: `pzvyHX6lw2owLzPp`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**34. 指定回复#3**
- 节点ID: `wFvLh6HMq9p6X8IA`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**35. 判断器#23**
- 节点ID: `etHdxZMKZMPHQsqw`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**36. 判断器#11**
- 节点ID: `hChSLZZSlV26H2dM`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**37. 变量更新#24**
- 节点ID: `ujMyoHq1i7cn3dKY`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**38. 代码运行#9**
- 节点ID: `fi5RYBahBvBQnsfC`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**39. 判断器#12**
- 节点ID: `ahkTTOb78q57KZ1Q`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**40. 代码运行#10**
- 节点ID: `xEToh6BI5YDIsv5A`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**41. 判断器#11**
- 节点ID: `i8S25g53fpMIL2Jj`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**42. 代码运行#11**
- 节点ID: `l2AE9amhYQxrudf1`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `first30Days` (string) [动态] - first30Days
  - `last30Days` (string) [动态] - last30Days

**43. 变量更新#15**
- 节点ID: `kt9pnAY3J0twA3bn`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**44. 变量更新#16**
- 节点ID: `uxkEjZEoI4CfDtPM`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**45. 代码运行#12**
- 节点ID: `fONOeMWVFmaomOeg`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**46. 判断器#12**
- 节点ID: `lK3fiA47nljSIQXZ`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**47. 变量更新#17**
- 节点ID: `rhC9f0DAY6AGn86W`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**48. 指定回复#3**
- 节点ID: `zBfMzlMzn25WXjff`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

---

## 工作流: 主流程里的测试-AI考勤-获取用户假期权限.json

**节点数量**: 11
**边数量**: 11

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取假期余额**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 代码运行#2 解析假期余额**
- 节点ID: `j1tTgGRaVr9g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (string) [动态] - flag
  - `result` (string) [动态] - result
  - `errorMsg` (string) [动态] - errorMsg

**9. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**11. 假期整合#4**
- 节点ID: `ociBmoebXRv9XjJt`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

---

## 工作流: 主流程里的测试-请假意图判断 .json

**节点数量**: 6
**边数量**: 5

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 问题分类**
- 节点ID: `dsgTRl2GQ8mtlXZF`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**4. 指定回复**
- 节点ID: `kUPrfVLvKzFoj05b`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**5. 指定回复#2**
- 节点ID: `bp2cNHUvkYXcrxGX`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**6. 指定回复#3**
- 节点ID: `krJLEMRXaZXD0oy5`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

---

## 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-查询医疗假期余额.json

**节点数量**: 10
**边数量**: 8

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取医疗期余额**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**9. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**10. 解析假期余额#4**
- 节点ID: `hdcoUgJnAlZSZvH5`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

---

## 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-查询年假余额.json

**节点数量**: 11
**边数量**: 9

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |
| ilBf32u4 | queryYear | string | 年份 |
| otvCIPYT | typeName | string | 假期 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取假期余额**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 代码运行#2 解析假期余额**
- 节点ID: `j1tTgGRaVr9g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**9. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**11. 解析假期余额#4**
- 节点ID: `hdcoUgJnAlZSZvH5`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

---

## 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数.json

**节点数量**: 20
**边数量**: 18

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |
| epfeZ1Ha | typeName | string | 年假 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取员工信息**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**9. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**10. 解析员工工龄**
- 节点ID: `hdcoUgJnAlZSZvH5`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `socialServiceYear` (number) [动态] - socialServiceYear
  - `socialServiceMonth` (number) [动态] - socialServiceMonth
  - `socialServiceDay` (number) [动态] - socialServiceDay

**11. 判断器#2**
- 节点ID: `yVLZiCfLSyWQmQS2`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**12. 指定回复#3**
- 节点ID: `kodz6riInwGQJbWc`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**13. 指定回复#5**
- 节点ID: `ph3oDda5Il6aEhND`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**14. 代码运行#4**
- 节点ID: `pxcIhxN5acuZIZHA`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `leaveBefore` (string) [动态] - leaveBefore
  - `leaveAfter` (string) [动态] - leaveAfter

**15. 代码运行#6**
- 节点ID: `r5WcLDH1RIu6hlKL`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (number) [动态] - result

**16. 代码运行#6**
- 节点ID: `dXvO48AYPUwzy29C`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `leaveBefore` (string) [动态] - leaveBefore
  - `leaveAfter` (string) [动态] - leaveAfter

**17. AI考勤-查询年假余额**
- 节点ID: `fHIx97Lp75AggMAr`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**18. 代码运行#9**
- 节点ID: `slrdeAuOdLlwQrce`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `effectiveYear` (string) [动态] - effectiveYear
  - `leaveTotal` (string) [动态] - leaveTotal
  - `leaveUsed` (string) [动态] - leaveUsed
  - `leaveRemain` (string) [动态] - leaveRemain
  - `leaveReleased` (string) [动态] - leaveReleased

**19. AI考勤-查询年假余额#2**
- 节点ID: `yn3KznBXTSSOHMa0`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**20. 代码运行#8**
- 节点ID: `gqGxhpskgFK7nRcj`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `effectiveYear` (string) [动态] - effectiveYear
  - `leaveTotal` (string) [动态] - leaveTotal
  - `leaveUsed` (string) [动态] - leaveUsed
  - `leaveRemain` (string) [动态] - leaveRemain
  - `leaveReleased` (string) [动态] - leaveReleased

---

## 工作流: 主流程里面的人力AI咨询(新)里面的AI考勤-计算年假天数中的AI考勤-查询年假余额.json

**节点数量**: 11
**边数量**: 9

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |
| ilBf32u4 | queryYear | string | 年份 |
| otvCIPYT | typeName | string | 假期 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取假期余额**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 代码运行#2 解析假期余额**
- 节点ID: `j1tTgGRaVr9g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**9. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**11. 解析假期余额#4**
- 节点ID: `hdcoUgJnAlZSZvH5`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

---

## 工作流: 主流程里面的人力AI咨询（新）.json

**节点数量**: 90
**边数量**: 97

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| uwE1Py8M | workYears | number | 工作年限 |
| i2XdlIcj | workingYearsInThisUnit | number | 本单位工作年限 |
| soKBqYSu | employeeId | string | 员工ID |
| eDMhmEQe | client_secret | string | 盖亚应用密钥 |
| sLLXf8zA | corp_id | string | 企业ID |
| wnGoClhT | grant_type | string | 客户端模式，固定值 |
| zLEba9t1 | queryYear | string | 年份 |
| z3R9gXSc | typeName | string | 年假 |
| dbr1YdbJ | employee_permission | string | 判断是员工还是PB |
| dh6GPIGF | professionalTerm | string | 专业术语 |
| vTf6lD5Q | followUpQuestion | string | 追问功能（0是不追问1是追问） |
| nels2UrE | url | string | 公司组织层级 |
| lEEF0RmD | url1 | string | 岗位和人员层级划分 |
| k2rulzBr | historyRecord | string | 历史记录 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. AI寒暄**
- 节点ID: `lIsvQ1bJMlzfzRIt`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**4. 系统操作手册检索**
- 节点ID: `hEUxww73AfToAg7O`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**5. 迟到计算**
- 节点ID: `xMxKrO2fts4nunZx`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**6. AI 回答#10**
- 节点ID: `qmtFAJUwCqkIqflp`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**7. 问题分类#3**
- 节点ID: `tAB9KMO57bjgl3Mp`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**8. 早退计算-core**
- 节点ID: `yb1AQZCnAmcAeR6U`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**9. 迟到计算#12**
- 节点ID: `oRLr8v3OYkwbXjk9`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**10. 早退计算#13**
- 节点ID: `zG54UWnmJ4R5E5YL`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**11. AI 回答#13**
- 节点ID: `xLXIwkrrr1JLEeFc`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**12. AI 回答#14**
- 节点ID: `wgKeNlX9gkqIl2m0`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**13. 制度检索#3**
- 节点ID: `fdwxq2UNXunsfdUT`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**14. AI 对话#15**
- 节点ID: `bQ5MqgeaHGv4yeUg`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**15. 制度检索#4**
- 节点ID: `yAjM09AM27FUp5yO`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**16. AI 对话#16**
- 节点ID: `tEOrlZIZGTHOWBmq`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**17. 指定回复#2**
- 节点ID: `tCdSyRN2bisgirrD`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**18. AI 对话#17**
- 节点ID: `hocmUL5DdWigEn8g`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**19. 问题分类#5**
- 节点ID: `fy9NpuHir3mzJeLz`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**20. 问题分类#4**
- 节点ID: `hbtHqvIAKTEKGLzW`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**21. 指定回复#4**
- 节点ID: `diEpItuNLRMWMsts`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**22. 判断器#2**
- 节点ID: `fx4xNwTWoHpCbhlq`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**23. 指定回复#7**
- 节点ID: `i7m2rRZ0nBs9aWHf`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**24. AI考勤-查询年假余额**
- 节点ID: `zNxAMClGROUiSP6x`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**25. 代码运行#2**
- 节点ID: `iYKUTYU66HAxQf5o`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `effectiveYear` (string) [动态] - effectiveYear
  - `leaveTotal` (string) [动态] - leaveTotal
  - `leaveUsed` (string) [动态] - leaveUsed
  - `leaveRemain` (string) [动态] - leaveRemain
  - `leaveReleased` (string) [动态] - leaveReleased

**26. 指定回复#8**
- 节点ID: `tZ4JCfXIeiAm60rI`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**27. 指定回复#10**
- 节点ID: `krRcWHAnL4UnQJ7q`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**28. AI考勤-查询育儿假**
- 节点ID: `fzy6OPA4gjI3nJ6j`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**29. 代码运行#3**
- 节点ID: `pJ8mMFbX9jvnYJ5Y`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `leaveTotal` (string) [动态] - leaveTotal
  - `leaveRemain` (string) [动态] - leaveRemain
  - `leaveUsed` (string) [动态] - leaveUsed

**30. 判断器#3**
- 节点ID: `gJatR8QSCTO5z3hy`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**31. 指定回复#10**
- 节点ID: `cdPPWp9L5oBONKVe`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**32. 变量更新#4**
- 节点ID: `zCGkjZZScYCbCqt0`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**33. 判断器#4**
- 节点ID: `nFxY8X6aKeeyqpbB`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**34. AI 对话#15**
- 节点ID: `b8HRBBaFfnRFP1At`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**35. AI考勤-查询医疗期余额**
- 节点ID: `oOWt9cfuC867EA1u`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**36. 代码运行#4**
- 节点ID: `sIaq89O3mE80Mnfm`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `quota` (string) [动态] - quota
  - `used` (string) [动态] - used
  - `balance` (string) [动态] - balance

**37. 系统操作手册检索#5**
- 节点ID: `eOplqgbGzmMxqwRg`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**38. AI 对话#15**
- 节点ID: `vKZWUQgeXitUrSjN`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**39. 判断器#4**
- 节点ID: `pSUKTsXKqkq5QL5B`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**40. 制度检索#6**
- 节点ID: `zJyhbUily88iR3q8`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**41. AI 对话#16**
- 节点ID: `bWw3Hs9cXXEheEGr`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**42. 知识库搜索#8**
- 节点ID: `e22Nvpe56JWsP7gx`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**43. 代码运行#6**
- 节点ID: `xFY0I79PdRIi1XID`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**44. 指定回复#11**
- 节点ID: `nYWg9evhHwlx0QpD`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**45. AI 对话#18**
- 节点ID: `a4O0Tg8ILLWukNm6`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**46. AI考勤-计算年假天数**
- 节点ID: `uaGHhWtZ3ktjuBOg`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**47. 指定回复#11**
- 节点ID: `i9wVJb677g7EytBq`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**48. 判断器#6**
- 节点ID: `litj7MuxkQ8OfVFg`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**49. 知识库搜索#8**
- 节点ID: `lY73OB42QJTyc2Hc`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**50. 知识库搜索引用合并**
- 节点ID: `nMXy7nIB2HPrWL87`
- 节点类型: `datasetConcatNode`
- 说明: 可以将多个知识库搜索结果进行合并输出。使用 RRF 的合并方式进行最终排序输出。
- **输出字段**:
  - `quoteQA` (datasetQuote)

**51. 知识库搜索#9**
- 节点ID: `hAZa6dNJqgjgwgri`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**52. 知识库搜索引用合并#2**
- 节点ID: `gSNUB6TUVcdH4kh0`
- 节点类型: `datasetConcatNode`
- 说明: 可以将多个知识库搜索结果进行合并输出。使用 RRF 的合并方式进行最终排序输出。
- **输出字段**:
  - `quoteQA` (datasetQuote)

**53. AI 对话#16**
- 节点ID: `rwZlC9RLYmqev4xX`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**54. 判断器#7**
- 节点ID: `gDAhFh1RMk0i9Bec`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**55. 知识库搜索#10**
- 节点ID: `ztyAsNpZ5oKuDtRl`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**56. 知识库搜索#11**
- 节点ID: `mICDgflWZmyvTCt9`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**57. 知识库搜索引用合并#3**
- 节点ID: `r47PD69UN7k68LQr`
- 节点类型: `datasetConcatNode`
- 说明: 可以将多个知识库搜索结果进行合并输出。使用 RRF 的合并方式进行最终排序输出。
- **输出字段**:
  - `quoteQA` (datasetQuote)

**58. AI 对话#18**
- 节点ID: `xb4DFo8fjRsBGiXX`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**59. 判断器#8**
- 节点ID: `nofmuqmaGpqRorAO`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**60. 代码运行#6**
- 节点ID: `dayzhrxMuwIpEyn1`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**61. 代码运行#7**
- 节点ID: `mnOzScCAbOj4EK7R`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**62. 判断器#9**
- 节点ID: `fLg5llFRbHboxsom`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**63. 变量更新#2**
- 节点ID: `sN65sRywajVJ5YQU`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**64. 指定回复#10**
- 节点ID: `yS4YgJHfum5GqpRV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**65. 指定回复#11**
- 节点ID: `xkX9ePww2wNO0YO2`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**66. 代码运行#8**
- 节点ID: `kIXr4l3KfEh7bYU1`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `year` (string) [动态] - year
  - `month` (string) [动态] - month
  - `day` (string) [动态] - day
  - `weekday` (string) [动态] - weekday

**67. 早退计算**
- 节点ID: `clSeeweMc1fR4ySB`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**68. 早退计算-complementary**
- 节点ID: `b0VaWLHzn281h5vA`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**69. 迟到计算-complementary**
- 节点ID: `gHbBow7lHklUzkMV`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**70. 迟到计算-core**
- 节点ID: `tAVokzZX999mwDFL`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**71. 早退回答-final**
- 节点ID: `cHTlkWUBP7OPsgrJ`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**72. 迟到回答-final**
- 节点ID: `ljEbPbTSY5Eq8Us8`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**73. 文本拼接**
- 节点ID: `owJmqFsMArqN2ric`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**74. 判断器#10**
- 节点ID: `teSV1wdc3vzMe28K`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**75. 问题改写**
- 节点ID: `kqGne20eCyxuIh1d`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**76. 名词解释#25**
- 节点ID: `uRrxDjyoGuBqQM8e`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**77. 非人力问题#20**
- 节点ID: `kipOH6pKG24rB9Nw`
- 节点类型: `datasetSearchNode`
- 说明: 调用“语义检索”和“全文检索”能力，从“知识库”中查找可能与问题相关的参考内容
- **输出字段**:
  - `quoteQA` (datasetQuote)
  - `system_error_text` (string)

**78. 非人力关键词#20**
- 节点ID: `dLm8G1szN1eV15re`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**79. 指定回复#12**
- 节点ID: `vtRDBcIJ1FyCLT1N`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**80. 判断器#10**
- 节点ID: `bqWabUih5xJPSPs4`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**81. AI 对话#26**
- 节点ID: `dHUerGSIc10JiRF2`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**82. 生成追问#27**
- 节点ID: `aYDGUSStLrPidCJd`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**83. 指定回复#13**
- 节点ID: `zXPTgZjIuzehCCxu`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**84. 文档解析**
- 节点ID: `jlq5hwg3iyar8UDA`
- 节点类型: `readFiles`
- 说明: 解析本轮对话上传的文档，并返回对应文档内容
- **输出字段**:
  - `system_text` (string) - app:workflow.read_files_result
  - `system_rawResponse` (arrayObject)
  - `system_error_text` (string)

**85. 文档解析#2**
- 节点ID: `uqbyU2esiV3MPhAo`
- 节点类型: `readFiles`
- 说明: 解析本轮对话上传的文档，并返回对应文档内容
- **输出字段**:
  - `system_text` (string) - app:workflow.read_files_result
  - `system_rawResponse` (arrayObject)
  - `system_error_text` (string)

**86. 变量更新#3**
- 节点ID: `fP1MdYr7YFavmykg`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**87. 变量更新#4**
- 节点ID: `lrk4vDdANSK01H8J`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**88. 判断器#11**
- 节点ID: `wQKzTDdCY7krKblN`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**89. 指定回复#14**
- 节点ID: `jqSQFSarPbvLUFwp`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**90. AI 对话_用户问题与非人力关键词的语义比较**
- 节点ID: `ybXGmD6NO4hrFgzw`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

---

## 工作流: 主流程里面的人力AI咨询（新）中的AI考勤-查询育儿假.json

**节点数量**: 11
**边数量**: 9

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |
| ilBf32u4 | queryYear | string | 年份 |
| otvCIPYT | typeName | string | 假期 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取假期余额**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 代码运行#2 解析假期余额**
- 节点ID: `j1tTgGRaVr9g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**9. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**11. 解析假期余额#4**
- 节点ID: `hdcoUgJnAlZSZvH5`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

---

## 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）.json

**节点数量**: 126
**边数量**: 178

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| grant_type | grant_type | string | 固定值，客户端模式 |
| corp_id | corp_id | string | 企业Code即为每个企业都拥有的一个唯一的corpid |
| client_secret | client_secret | string | 创建应用时候自动生成(应用秘钥) |
| holiday_type | holiday_type | string | 假期类型 |
| schedule_str | schedule_str | string | 排班字符串，如08:00~12:00, 12:00~17:00 |
| schedule_startTime | schedule_startTime | string | 排班开始时间，如：08:00 |
| schedule_endTime | schedule_endTime | string | 排班结束时间，如：17:00 |
| schedule_middleTime | schedule_middleTime | string | 排班中间时间 |
| schedule_startTime2 | schedule_startTime2 | string | 中间开始时间 |
| schedule_endTime2 | schedule_endTime2 | string | 中间结束时间 |
| typeName | typeName | string | 假期类别名称 |
| startDate | startDate | string | 请假开始日期 |
| startTime | startTime | string | 请假开始时间 |
| endDate | endDate | string | 请假结束日期 |
| endTime | endTime | string | 请假结束时间 |
| reasons | reasons | string | 请假事由 |
| leaveDays | leaveDays | string | 请假天数，如1.5天 |
| tag | tag | string |  |
| formData | formData | string | 通过 formData 变量将前端修改后的表单数据通过 JSON 字符串传递过来 |
| schedule_startTime1 | schedule_startTime1 | string | 最后一天的开始时间 |
| schedule_endTime1 | schedule_endTime1 | string | 最后一天的结束时间 |
| mealBeginTime1 | mealBeginTime1 | string | 第一天上午结束时间 |
| mealEndtime1 | mealEndtime1 | string | 第一天下午开始时间 |
| mealEndtime2 | mealEndtime2 | string | 最后一天上午开始时间 |
| mealBeginTime2 | mealBeginTime2 | string | 最后一天上午结束时间 |
| schedule_list | schedule_list | string | 最近5天排版信息 |
| empNo | empNo | string |  |
| APPCODE | APPCODE | string | 调用节假日情况 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. workflow:question_classification**
- 节点ID: `zj39jpb37Fib`
- 节点类型: `classifyQuestion`
- 说明: workflow:intro_question_classification
- **输出字段**:
  - `cqResult` (string)

**4. 判断器#3**
- 节点ID: `qDsGPV5UkLH8`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**5. 判断器#4**
- 节点ID: `gn3J4sywiRDT`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 判断器#5**
- 节点ID: `tUJCRlc2kLlt`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**7. 判断器#6**
- 节点ID: `ndca4AQ1BHTA`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**8. 判断器#7**
- 节点ID: `z3vzJFqg5p1y`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**9. 判断器#8**
- 节点ID: `x9lYkGqnASgw`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**10. 变量更新**
- 节点ID: `zC2jVvTwGpNQ`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**11. 变量更新#2**
- 节点ID: `sI7FDUiBLSxH`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**12. 变量更新#3**
- 节点ID: `i5IyI6hzfCKR`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**13. 变量更新#4**
- 节点ID: `d1WirEUaNz2h`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**14. 变量更新#5**
- 节点ID: `nuooLqC10if5`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**15. 变量更新#6**
- 节点ID: `vtXdMn6tEKaC`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**16. 代码运行#2**
- 节点ID: `iivkDn6OIe5g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `startDate` (string) [动态] - startDate
  - `endDate` (string) [动态] - endDate
  - `endTime` (string) [动态] - endTime
  - `typeName` (string) [动态] - typeName
  - `reasons` (string) [动态] - reasons
  - `leaveDays` (string) [动态] - leaveDays

**17. 代码运行#3**
- 节点ID: `bsnwNg6imbvL`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**18. 指定回复#2**
- 节点ID: `e8J8YlWvppOw`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**19. 任意不为空判断器#8**
- 节点ID: `kIgZn4OYgR8m`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**20. 代码运行#3**
- 节点ID: `kSsJl0RKaygh`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**21. 判断器#9**
- 节点ID: `n8bQUgZDWQTk`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**22. 变量更新#7**
- 节点ID: `y1MzTRJdGOAA`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**23. 判断器#10**
- 节点ID: `nwaPNmgwR7E2`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**24. 变量更新#8**
- 节点ID: `kpLSK0vN1GV8`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**25. 变量更新#9**
- 节点ID: `xT2qbwrh2vAX`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**26. 变量更新#10**
- 节点ID: `aYbCnmLbJ3ud`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**27. 变量更新#11**
- 节点ID: `dDhbn6F04eRf`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**28. 变量更新#12**
- 节点ID: `wfbPsa4mYHzQ`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**29. 代码运行#4**
- 节点ID: `zu6rftVNKe1U`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**30. 判断器#11**
- 节点ID: `wifVl7uNZCMT`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**31. 指定回复#3**
- 节点ID: `regWAI6exZZ2`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**32. 判断器#12**
- 节点ID: `s9WJYYrUK8Sc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**33. 指定回复#4**
- 节点ID: `cQFCSAuVKzms`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**34. 判断器#13**
- 节点ID: `fZh4T8SxvbwG`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**35. 变量更新#13**
- 节点ID: `p6Uc046lHRsE`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**36. 变量更新#14**
- 节点ID: `hMDVrTUZMbxY`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**37. 变量更新#16**
- 节点ID: `qcyq7rQfQ4JJ7St7`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**38. 变量更新#17**
- 节点ID: `x5pX4TqHLtF2eTqH`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**39. 判断器#14**
- 节点ID: `eEWni5H2W63o6SP4`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**40. 变量更新#21**
- 节点ID: `ywjUVkrGs1xrpm4R`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**41. 判断器#20**
- 节点ID: `cQMbWgZ4CtGlTcg5`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**42. 合并josn**
- 节点ID: `l4vW9G0aAOy6SgQu`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**43. 时间提取-3**
- 节点ID: `bg404awNhHNSouu9`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `startTime` (string) - 提取结果-startTime
  - `endTime` (string) - 提取结果-endTime

**44. 日期提取-2**
- 节点ID: `mWwhi5uu3u0DQxCY`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `startDate` (string) - 提取结果-startDate
  - `endDate` (string) - 提取结果-endDate

**45. 休假类型提取-1**
- 节点ID: `gDZiTUpi5U7ahzgH`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `typeName` (string) - 提取结果-typeName

**46. 请假理由提取-4**
- 节点ID: `vn66L6pDtKCOQBK1`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `reasons` (string) - 提取结果-reasons
  - `leaveDays` (string) - 提取结果-leaveDays

**47. 修改用户要求内容#4**
- 节点ID: `v6xjx291ncu6xG7j`
- 节点类型: `textEditor`
- 说明: 可对固定或传入的文本进行加工后输出，非字符串类型数据最终会转成字符串类型。
- **输出字段**:
  - `system_text` (string)

**48. 变量更新#28**
- 节点ID: `ptQsyO7eAMBYoj5I`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**49. 变量更新#29**
- 节点ID: `xZAK9AXnlZAPxX5v`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**50. 变量更新#30**
- 节点ID: `u5m4v4O0zBpL5LSb`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**51. 变量更新#31**
- 节点ID: `wrpcLjZ4sMPYbBQD`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**52. 变量更新#32**
- 节点ID: `t5FPl7Lg9FK1uj2v`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**53. 变量更新#33**
- 节点ID: `yYue1nM5YjEnQ1g5`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**54. 变量更新#34**
- 节点ID: `vJbqLpvHwr8XAbMK`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**55. 获取排版信息具体变量#9**
- 节点ID: `psn3rnTynlly24gz`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `realStartTime1` (string) [动态] - realStartTime1
  - `realEndTime1` (string) [动态] - realEndTime1
  - `mealBeginTime1` (string) [动态] - mealBeginTime1
  - `mealEndTime1` (string) [动态] - mealEndTime1
  - `realStartTime2` (string) [动态] - realStartTime2
  - `realEndTime2` (string) [动态] - realEndTime2
  - `mealBeginTime2` (string) [动态] - mealBeginTime2
  - `mealEndTime2` (string) [动态] - mealEndTime2

**56. 变量更新#35**
- 节点ID: `a75Lqx4RVlUqYq3j`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**57. 判断器#21**
- 节点ID: `m1N9bK0HpVO1BIOk`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**58. 判断器#22**
- 节点ID: `wNY8b68sbbJB09Ho`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**59. 合并josn#9**
- 节点ID: `zv1VX3IWXvsRQrBT`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**60. 判断开始时间和结束时间大小#8**
- 节点ID: `kD72E8yYyiDzxQZD`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (number) [动态] - result
  - `data2` (string) [动态] - data2

**61. 判断器#17**
- 节点ID: `drGVpSRPMClRXPsn`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**62. 增加一天时间#9**
- 节点ID: `gadCELrvv3IehgCd`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**63. 判断器#18**
- 节点ID: `vhJKApgLhsRCvW78`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**64. 变量更新#26**
- 节点ID: `hsvlHkPb0kVnTaLy`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**65. 判断器#19**
- 节点ID: `o2LtOfnVS9QvT8Ns`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**66. 变量更新#27**
- 节点ID: `uCTtIlMl3ZMTcD6w`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**67. 变量更新#28**
- 节点ID: `dcLXyYZOI36jVwuc`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**68. 变量更新#29**
- 节点ID: `eWyJx31qDNiNOcyP`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**69. 判断器#20**
- 节点ID: `t0jddG9LEESbfzed`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**70. 指定回复#4**
- 节点ID: `g4OyQLGuOi2Kpk0h`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**71. 判断器#21**
- 节点ID: `vg2EWhZJOPinCWHg`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**72. 指定回复#5**
- 节点ID: `iqgnnX8VkMzLonyn`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**73. AI 对话**
- 节点ID: `wh1exVYn5JiH2U2j`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**74. 请假理由提取-4#7**
- 节点ID: `lCSpfpOTF3ceMY9z`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `reasons` (string) - 提取结果-reasons
  - `leaveDays` (string) - 提取结果-leaveDays

**75. 变量更新#30**
- 节点ID: `e5e0BtMvucUEBodt`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**76. 判断器#22**
- 节点ID: `pi6pItPIRj8nomdZ`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**77. 变量更新#31**
- 节点ID: `sKSvD8wAkzG41IKn`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**78. AI考勤-查询假期余额#4**
- 节点ID: `z4IlgEj18jJblmXc`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**79. 判断器#23**
- 节点ID: `l5XTOGiwNOwVEwFa`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**80. 变量更新#32**
- 节点ID: `dGnQzfKw3fXjN2sU`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**81. 真实时间提取-3#7**
- 节点ID: `zlWEW4xLlZQXHha5`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `startTime` (string) - 提取结果-startTime
  - `endTime` (string) - 提取结果-endTime

**82. 判断器#24**
- 节点ID: `aUZifvn86IENBbJv`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**83. 合并josn#10**
- 节点ID: `bLnOdDOTjZSKGmrB`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**84. 真实时间格式处理**
- 节点ID: `gweyhu7eEcOgwyOP`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**85. 真实时间格式处理#12**
- 节点ID: `aCjTb7fkygsB4Of2`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**86. AI 对话#2**
- 节点ID: `f9B4C4zcXrcZEgfU`
- 节点类型: `chatNode`
- 说明: AI 大模型对话
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `reasoningText` (string)
  - `system_error_text` (string)

**87. AI提取年份校验#13**
- 节点ID: `pY4lkjesRHR8fVIA`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `data1` (string) [动态] - data1
  - `data2` (string) [动态] - data2

**88. 变量更新#33**
- 节点ID: `rTOxwJ6MRdRJwXsU`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**89. 真实时间提取-3#8**
- 节点ID: `a68HjazqB0h7bp2M`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `startTime` (string) - 提取结果-startTime
  - `endTime` (string) - 提取结果-endTime

**90. 休假类型提取-1#8**
- 节点ID: `kmDroBZIrVmlzTdm`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `typeName` (string) - 提取结果-typeName

**91. 根据休假类型去判断是否跳过休息日**
- 节点ID: `mxqIAQNVxYPjKdbu`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

**92. 代码运行#14**
- 节点ID: `x6AEehbm34yHRVU6`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startDate` (string) [动态] - startDate
  - `endDate` (string) [动态] - endDate

**93. 变量更新#34**
- 节点ID: `ehdEA8Hfq2CJSU1I`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**94. 判断器#25**
- 节点ID: `lhdrmed8F0ubbgzV`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**95. 变量更新#35**
- 节点ID: `eL28qaaS5Q6kWb4X`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**96. 代码运行#15**
- 节点ID: `ySiVsozf8Uj7Uhay`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**97. 判断器#26**
- 节点ID: `mHovr79bbLTj5i9l`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**98. 变量更新#36**
- 节点ID: `r4yvHhGMOcTuMsIW`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**99. 代码运行#16**
- 节点ID: `lXd1FDjfZJ46Hm6A`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `year` (string) [动态] - year
  - `month` (string) [动态] - month
  - `day` (string) [动态] - day
  - `weekday` (string) [动态] - weekday

**100. 计算实际天数**
- 节点ID: `beSzRvJ2nGxpoGsh`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**101. 变量更新#37**
- 节点ID: `xf5lRKzmBhdGdpuP`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**102. 问题分类#2**
- 节点ID: `dZvq0bMaeGNP783V`
- 节点类型: `classifyQuestion`
- 说明: 根据用户的历史记录和当前问题判断该次提问的类型。可以添加多组问题类型，下面是一个模板例子: 类型1: 打招呼 类型2: 关于商品“使用”问题 类型3: 关于商品“购买”问题 类型4: 其他问题
- **输出字段**:
  - `cqResult` (string)

**103. 变量更新#38**
- 节点ID: `aIUrBCxBU8nctRPU`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**104. 代码运行#18**
- 节点ID: `zyjSANhuo6Jjy4Ya`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `year` (string) [动态] - year
  - `month` (string) [动态] - month
  - `day` (string) [动态] - day
  - `weekday` (string) [动态] - weekday

**105. 日期提取-2#9**
- 节点ID: `ckH2GWsb8ffOeLkY`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `startDate` (string) - 提取结果-startDate
  - `endDate` (string) - 提取结果-endDate
  - `leaveDays` (string) - 提取结果-leaveDays

**106. 判断器#27**
- 节点ID: `i2Yz4u3ZbdD9rqiU`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**107. 变量更新#39**
- 节点ID: `olnN5b43kTMwyjlh`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**108. 变量更新#40**
- 节点ID: `yvFDv5p3bNvEHgVC`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**109. 变量更新#41**
- 节点ID: `gzNmAyrPjkLvpmlP`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**110. 计算时间天数#19**
- 节点ID: `xuv2RSMbv65Ll70P`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**111. 变量更新#42**
- 节点ID: `h2qbOzg805CjqYZT`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**112. 修改时间提取-2#10**
- 节点ID: `fXnLlH4ZRdCSSvU9`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `start_time` (string) - 提取结果-start_time
  - `end_time` (string) - 提取结果-end_time

**113. 判断器#28**
- 节点ID: `lNEusdcZ5N2STWzc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**114. 变量更新#43**
- 节点ID: `ftC3P7mkua1wUC9k`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**115. 变量更新#44**
- 节点ID: `jPokCMUyUQGsF3Po`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**116. 变量更新#45**
- 节点ID: `wiLWYQQNWUX4JEcE`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**117. 判断器#29**
- 节点ID: `c2dgxMks5BWVo0Vs`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**118. 代码运行#20**
- 节点ID: `yCQtH6CZHMVbkFhU`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `startTime` (string) [动态] - startTime
  - `endTime` (string) [动态] - endTime

**119. 代码运行#21**
- 节点ID: `hbdOFKKuQNsg6lft`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**120. 指定回复#6**
- 节点ID: `d9gUlO3XNk9aEZql`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**121. 指定回复#7**
- 节点ID: `qWTIYvpRlL9Gk42i`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**122. 判断器#30**
- 节点ID: `wAMsLtC1Crikeyyc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**123. 变量更新#46**
- 节点ID: `nHM96FnWfBJRxgxG`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**124. 判断器#31**
- 节点ID: `ikJiX4l0hZsvE8rs`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**125. 判断器#32**
- 节点ID: `cWoarxSQ6248WEuc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**126. 测试-获取排版信息**
- 节点ID: `tmmuLD9dROn7ngcO`
- 节点类型: `appModule`
- **输出字段**:
  - `history` (chatHistory)
  - `answerText` (string)
  - `system_error_text` (string)

---

## 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的AI考勤-查询假期余额#4.json

**节点数量**: 11
**边数量**: 14

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取假期余额**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**8. 代码运行#2 解析假期余额**
- 节点ID: `j1tTgGRaVr9g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**9. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**11. 文本内容提取**
- 节点ID: `eHP6Zb5TLtZC`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `typeName` (string) - 提取结果-typeName

---

## 工作流: 主流程里面的人力AI咨询（新）中的测试-Al-考勤非快捷（C）中的测试-获取排版信息.json

**节点数量**: 24
**边数量**: 25

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| employeeId | employeeId | string | 员工编号 |
| client_secret | client_secret | string | 盖亚应用秘钥 |
| corp_id | corp_id | string | 企业Code |
| grant_type | grant_type | string | 固定值，客户端模式 |
| startDate | startDate | string | 假期开始日期 |
| endDate | endDate | string | 假期结束时间 |
| empNo | empNo | string |  |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. HTTP 请求-获取盖亚JWT**
- 节点ID: `jj1B2rmYOuLs`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取

**4. 代码运行**
- 节点ID: `xi5uS2jhZ1IV`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `flag` (boolean) [动态] - flag
  - `jwt` (string) [动态] - jwt
  - `errorMsg` (string) [动态] - errorMsg

**5. 判断器**
- 节点ID: `v13xOaxSepuD`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**6. 指定回复 - 获取权限失败**
- 节点ID: `dylA9Asv4HcV`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. HTTP 请求#2 获取排版时间**
- 节点ID: `nDDvaIylqH5E`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取
  - `reason` (any) [动态] - reason

**8. 代码运行#2 提取出第一天和最后一天**
- 节点ID: `j1tTgGRaVr9g`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**9. 指定回复#2**
- 节点ID: `c1FozIAhHX17`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**10. 代码运行#3 构建错误信息**
- 节点ID: `aeUxxnVwVjEv`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**11. 日期格式校验**
- 节点ID: `cW5PQC7aYSyHPbBC`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**12. 变量更新**
- 节点ID: `sZmES3zmIEY9VoM6`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**13. 变量更新#2**
- 节点ID: `nYqn51boRvxNb5EM`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**14. 判断是否有休息时间**
- 节点ID: `bQsFEE9Sb8uc3uJK`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**15. 指定回复#3**
- 节点ID: `aBpJHrMJZjRwIxMj`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**16. 指定回复#4**
- 节点ID: `tK1WdNmjablgw1Ni`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**17. 拆分日期#5**
- 节点ID: `yVrvE5iWz4YmAQjd`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `var1` (string) [动态] - var1
  - `var2` (string) [动态] - var2
  - `var3` (string) [动态] - var3
  - `var4` (string) [动态] - var4
  - `result` (string) [动态] - result

**18. HTTP 请求#2 获取排版时间#3**
- 节点ID: `nCP6TmBkM3muEpc5`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取
  - `reason` (any) [动态] - reason

**19. HTTP 请求#2 获取排版时间#6**
- 节点ID: `kDQ3kFpD46HWtPD4`
- 节点类型: `httpRequest468`
- 说明: 可以发出一个 HTTP 请求，实现更为复杂的操作（联网搜索、数据库查询等）
- **输出字段**:
  - `httpRawResponse` (any)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态] - 输出字段提取
  - `reason` (any) [动态] - reason

**20. 判断器#3**
- 节点ID: `lkyfAYKqutQFFNFx`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**21.  提取出第一天和最后一天#6**
- 节点ID: `qquLZTnYqPXEOsxN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**22. 提取出第一天和最后一天#7**
- 节点ID: `dHYTu4YGGuaFZXJN`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**23. 代码运行#8**
- 节点ID: `k1ndGpyrqzf7usl8`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]

**24. 指定回复#5**
- 节点ID: `mvzztIGcvaSP3wFc`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

---

## 工作流: 根据休假类型去判断是否跳过休息日.json

**节点数量**: 17
**边数量**: 17

### 全局变量

| 变量Key | 标签 | 类型 | 描述 |
|---------|------|------|------|
| zsdlk6X1 | typeName | string | 休假类型 |
| auRjm4Tl | schedule_list | string | 最近14天排版信息 |
| krBBg7kU | startDate | string | 开始日期 |
| sDzoFoSB | leaveDays | string | 请假天数 |
| h82x25zz | endDate | string | 请假结束日期 |

### 节点详情

**1. common:core.module.template.system_config**
- 节点ID: `userGuide`
- 节点类型: `userGuide`
- 说明: common:core.module.template.system_config_info
- 输出: 无

**2. common:core.module.template.work_start**
- 节点ID: `448745`
- 节点类型: `workflowStart`
- **输出字段**:
  - `userChatInput` (string)

**3. 是否包含休息日**
- 节点ID: `jqAiUVqY4KOk2pvE`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**4. 判断器#2**
- 节点ID: `oEVaAZ4BQRz2oMvc`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**5. 代码运行#2**
- 节点ID: `eBsHzoQjPPGnAtdu`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**6. 指定回复**
- 节点ID: `yEL6kZLy5l2sssW5`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**7. 代码运行#3**
- 节点ID: `ecpaeWzu4aBxfDZD`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**8. 指定回复#2**
- 节点ID: `dxwa2Jc2cQTlT06q`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**9. 休假类型提取-1#2**
- 节点ID: `yZDUSgwvskxJkWFK`
- 节点类型: `contentExtract`
- 说明: 可从文本中提取指定的数据，例如：sql语句、搜索关键词、代码等
- **输出字段**:
  - `success` (boolean)
  - `fields` (string)
  - `system_error_text` (string)
  - `typeName` (string) - 提取结果-typeName

**10. 变量更新**
- 节点ID: `xlTosyR4OnEnIIgr`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**11. 判断器#3**
- 节点ID: `qNhFPTBjJk1GRHbM`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**12. 代码运行#4**
- 节点ID: `omef8QdKrBVXZGSr`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result

**13. 判断器#4**
- 节点ID: `pzP7s9QlQEaNYL8O`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

**14. 变量更新#2**
- 节点ID: `myOYLe6h2e2a7M5D`
- 节点类型: `variableUpdate`
- 说明: 可以更新指定节点的输出值或更新全局变量
- 输出: 无

**15. 代码运行#5**
- 节点ID: `aGR8SJl7UyhFQFSA`
- 节点类型: `code`
- 说明: 执行一段简单的脚本代码，通常用于进行复杂的数据处理。
- **输出字段**:
  - `system_rawResponse` (object)
  - `error` (string)
  - `system_addOutputParam` (dynamic) [动态]
  - `result` (string) [动态] - result
  - `data2` (string) [动态] - data2

**16. 指定回复#3**
- 节点ID: `c4xHwZjGqnctIMHN`
- 节点类型: `answerNode`
- 说明: 该模块可以直接回复一段指定的内容。常用于引导、提示。非字符串内容传入时，会转成字符串进行输出。
- 输出: 无

**17. 判断器#5**
- 节点ID: `do47bI8Qy0rFWoSU`
- 节点类型: `ifElseNode`
- 说明: 根据一定的条件，执行不同的分支。
- **输出字段**:
  - `ifElseResult` (string)

