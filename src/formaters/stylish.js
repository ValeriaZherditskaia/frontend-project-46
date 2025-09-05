/* eslint-disable @stylistic/arrow-parens */
/* eslint-disable @stylistic/comma-dangle */

const indent = (depth) => ' '.repeat(depth * 4 - 2) // Для строк с '+' и '-'
const blockIndent = (depth) => ' '.repeat(depth * 4) // Для остальных строк

const formatValue = (value, depth) => {
  if (value !== null && typeof value === 'object') {
    const lines = Object.entries(value).map(([entryKey, entryVal]) => {
      const spaces = ' '.repeat((depth + 1) * 4)
      return `${spaces}${entryKey}: ${formatValue(entryVal, depth + 1)}`
    })
    return `{\n${lines.join('\n')}\n${blockIndent(depth)}}`
  }
  return String(value)
}

const formatNode = (node, depth) => {
  const { key, status } = node

  switch (status) {
    case 'added':
      return `${indent(depth)}+ ${key}: ${formatValue(node.value, depth)}`
    case 'removed':
      return `${indent(depth)}- ${key}: ${formatValue(node.value, depth)}`
    case 'unchanged':
      return `${blockIndent(depth)}${key}: ${formatValue(node.value, depth)}`
    case 'changed':
      return [
        `${indent(depth)}- ${key}: ${formatValue(node.oldValue, depth)}`,
        `${indent(depth)}+ ${key}: ${formatValue(node.newValue, depth)}`,
      ].join('\n')
    case 'nested': {
      const childLines = node.children.map((childNode) =>
        formatNode(childNode, depth + 1)
      )
      return `${blockIndent(depth)}${key}: {\n${childLines.join(
        '\n'
      )}\n${blockIndent(depth)}}`
    }
    default:
      throw new Error(`Unknown status: ${status}`)
  }
}

const formatStylish = (tree) => {
  const lines = tree.map((treeNode) => formatNode(treeNode, 1))
  return `{\n${lines.join('\n')}\n}`
}

export default formatStylish
