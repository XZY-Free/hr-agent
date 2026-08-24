const fs = require('fs');
const path = require('path');

const jsonDir = '/Users/sunshine/IdeaProjects/人力agent/fastgpt相关的json文件';
const outputFile = '/Users/sunshine/IdeaProjects/人力agent/workflow_answer_nodes_complete_list.md';

// Get all JSON files
function getAllJsonFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.json')) {
      results.push(path.join(dir, file));
    }
  }
  return results;
}

// Check if output is JSON format (starts with { and is valid JSON or JSON template)
function isJsonFormat(value) {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  // Check if it starts with { or [
  if (!trimmed.startsWith('{') && !trimmed.startsWith('[')) return false;
  try {
    // Try to parse as JSON (even with variables like {{var}})
    // Remove variable placeholders temporarily for validation
    const testStr = trimmed.replace(/\{\{[^}]+\}\}/g, '""');
    JSON.parse(testStr);
    return true;
  } catch (e) {
    return false;
  }
}

// Extract output content from answerNode
function getOutputContent(node) {
  if (!node.inputs || !Array.isArray(node.inputs)) {
    return { type: 'unknown', content: 'N/A' };
  }

  const textInput = node.inputs.find(input => input.key === 'text');
  if (!textInput || !textInput.value) {
    return { type: 'empty', content: '' };
  }

  const value = textInput.value;

  // Check if it's a dynamic reference (array format)
  if (Array.isArray(value)) {
    return {
      type: 'dynamic_reference',
      content: `["${value[0]}", "${value[1]}"]`,
      sourceNodeId: value[0],
      sourceOutputKey: value[1]
    };
  }

  // It's a static string/template
  if (typeof value === 'string') {
    const jsonCheck = isJsonFormat(value);
    return {
      type: jsonCheck ? 'json_template' : 'text_template',
      content: value
    };
  }

  return { type: 'other', content: String(value) };
}

// Main processing
const jsonFiles = getAllJsonFiles(jsonDir);
console.log(`Found ${jsonFiles.length} JSON files\n`);

let allAnswerNodes = [];
let stats = {
  totalNodes: 0,
  jsonTemplateNodes: 0,
  textTemplateNodes: 0,
  dynamicReferenceNodes: 0,
  filesWithAnswerNodes: 0
};

for (const filePath of jsonFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove BOM if present
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    const data = JSON.parse(content);

    if (!data.nodes || !Array.isArray(data.nodes)) {
      continue;
    }

    const fileName = path.basename(filePath);
    const relativePath = filePath.replace(jsonDir + '/', '');

    // Find all answerNode nodes
    const answerNodes = data.nodes.filter(node => node.flowNodeType === 'answerNode');

    if (answerNodes.length > 0) {
      stats.filesWithAnswerNodes++;
      console.log(`\n${fileName}: Found ${answerNodes.length} answerNode(s)`);

      for (const node of answerNodes) {
        const outputInfo = getOutputContent(node);
        stats.totalNodes++;

        if (outputInfo.type === 'json_template') stats.jsonTemplateNodes++;
        else if (outputInfo.type === 'text_template') stats.textTemplateNodes++;
        else if (outputInfo.type === 'dynamic_reference') stats.dynamicReferenceNodes++;

        allAnswerNodes.push({
          filePath: relativePath,
          fullPath: filePath,
          nodeId: node.nodeId,
          name: node.name,
          outputType: outputInfo.type,
          outputContent: outputInfo.content,
          sourceNodeId: outputInfo.sourceNodeId,
          sourceOutputKey: outputInfo.sourceOutputKey
        });

        console.log(`  - [${node.nodeId}] ${node.name}: ${outputInfo.type}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Generate Markdown document
let markdown = `# FastGPT Workflow - answerNode 节点完整清单

> 生成时间: ${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
> 数据来源: \`${jsonDir}\`
> 总计: **${stats.totalNodes}** 个 answerNode 节点，分布在 **${stats.filesWithAnswerNodes}** 个文件中

---

## 统计摘要

| 类型 | 数量 | 占比 |
|------|------|------|
| **JSON模板输出** | ${stats.jsonTemplateNodes} | ${(stats.jsonTemplateNodes / stats.totalNodes * 100).toFixed(1)}% |
| **文本/动态模板输出** | ${stats.textTemplateNodes} | ${(stats.textTemplateNodes / stats.totalNodes * 100).toFixed(1)}% |
| **动态引用输出** | ${stats.dynamicReferenceNodes} | ${(stats.dynamicReferenceNodes / stats.totalNodes * 100).toFixed(1)}% |
| **总计** | **${stats.totalNodes}** | 100% |

---

`;

// Group by workflow hierarchy
const groupedByWorkflow = {};
for (const node of allAnswerNodes) {
  // Extract workflow group from filename
  const parts = node.filePath.split('/');
  let groupName = parts[0]; // Main workflow

  if (!groupedByWorkflow[groupName]) {
    groupedByWorkflow[groupName] = [];
  }
  groupedByWorkflow[groupName].push(node);
}

// Section 1: JSON Template Nodes (highlighted)
markdown += `## 一、JSON格式输出的节点 ⭐ 重点关注

以下节点的输出内容为 **JSON格式**（可能包含变量引用 \`{{variable}}\`），需要特别注意：

`;

let hasJsonTemplates = false;
for (const [workflow, nodes] of Object.entries(groupedByWorkflow)) {
  const jsonNodes = nodes.filter(n => n.outputType === 'json_template');
  if (jsonNodes.length > 0) {
    hasJsonTemplates = true;
    markdown += `### 📁 工作流: ${workflow}\n\n`;
    for (const node of jsonNodes) {
      markdown += `#### ${node.name}
- **文件路径**: \`${node.filePath}\`
- **节点ID**: \`${node.nodeId}\`
- **输出类型**: JSON模板
- **原始输出内容**:
\`\`\`json
${node.outputContent}
\`\`\`

---
`;
    }
  }
}

if (!hasJsonTemplates) {
  markdown += `*暂无JSON格式的answerNode节点*\n\n`;
}

// Section 2: Dynamic Reference Nodes
markdown += `## 二、动态引用输出的节点

以下节点的输出内容来自其他节点的动态引用（通常是代码节点的 \`system_rawResponse\`）：

`;

let hasDynamicRefs = false;
for (const [workflow, nodes] of Object.entries(groupedByWorkflow)) {
  const dynamicNodes = nodes.filter(n => n.outputType === 'dynamic_reference');
  if (dynamicNodes.length > 0) {
    hasDynamicRefs = true;
    markdown += `### 📁 工作流: ${workflow}\n\n`;
    for (const node of dynamicNodes) {
      markdown += `#### ${node.name}
- **文件路径**: \`${node.filePath}\`
- **节点ID**: \`${node.nodeId}\`
- **输出类型**: 动态引用
- **引用来源**: 节点 \`${node.sourceNodeId}\` 的输出字段 \`${node.sourceOutputKey}\`
- **引用表达式**: \`${node.outputContent}\`

---
`;
    }
  }
}

if (!hasDynamicRefs) {
  markdown += `*暂无动态引用类型的answerNode节点*\n\n`;
}

// Section 3: Text/Other Template Nodes
markdown += `## 三、文本/其他格式输出的节点

以下节点的输出内容为普通文本或包含变量的文本模板：

`;

let hasTextTemplates = false;
for (const [workflow, nodes] of Object.entries(groupedByWorkflow)) {
  const textNodes = nodes.filter(n => n.outputType === 'text_template' || n.outputType === 'empty' || n.outputType === 'other');
  if (textNodes.length > 0) {
    hasTextTemplates = true;
    markdown += `### 📁 工作流: ${workflow}\n\n`;
    for (const node of textNodes) {
      markdown += `#### ${node.name}
- **文件路径**: \`${node.filePath}\`
- **节点ID**: \`${node.nodeId}\`
- **输出类型**: ${node.outputType === 'text_template' ? '文本模板' : node.outputType === 'empty' ? '空输出' : '其他'}
`;
      if (node.outputContent) {
        markdown += `- **原始输出内容**:
\`\`\`
${node.outputContent}
\`\`\`
`;
      }
      markdown += `
---
`;
    }
  }
}

if (!hasTextTemplates) {
  markdown += `*暂无文本格式的answerNode节点*\n\n`;
}

// Section 4: Complete List
markdown += `## 四、完整节点列表（按文件分组）

`;

for (const [workflow, nodes] of Object.entries(groupedByWorkflow)) {
  markdown += `### ${workflow} (${nodes.length}个节点)\n\n`;
  markdown += `| 节点名称 | 节点ID | 输出类型 | 输出预览 |\n`;
  markdown += `|----------|--------|----------|----------|\n`;

  for (const node of nodes) {
    const preview = node.outputContent.length > 50
      ? node.outputContent.substring(0, 50) + '...'
      : node.outputContent.replace(/\n/g, ' ');
    const typeLabel = {
      'json_template': '⭐ JSON模板',
      'text_template': '📝 文本模板',
      'dynamic_reference': '🔗 动态引用',
      'empty': '⚪ 空',
      'other': '❓ 其他'
    }[node.outputType] || node.outputType;

    markdown += `| ${node.name} | \`${node.nodeId}\` | ${typeLabel} | ${preview} |\n`;
  }
  markdown += `\n`;
}

// Write to file
fs.writeFileSync(outputFile, markdown, 'utf8');
console.log(`\n\n✅ 完成！已生成文档: ${outputFile}`);
console.log(`统计: 总计 ${stats.totalNodes} 个 answerNode 节点`);
console.log(`  - JSON模板: ${stats.jsonTemplateNodes} 个`);
console.log(`  - 文本模板: ${stats.textTemplateNodes} 个`);
console.log(`  - 动态引用: ${stats.dynamicReferenceNodes} 个`);
