const toPlainValue = (value) => {
  if (value !== null && typeof value === 'object') {
    return `[complex value]`
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }

  return String(value)
}

const formatPlain = (tree, parentPath = '') => {
  return tree.flatMap((node) => {
    const { key, status } = node
    const property = parentPath ? `${parentPath}.${key}` : key

    switch (status) {
      case 'added':
        return `Property '${property}' was added with value: ${toPlainValue(
          node.value,
        )}`
      case 'removed':
        return `Property '${property}' was removed`
      case 'changed':
        return `Property '${property}' was updated. From ${toPlainValue(
          node.oldValue,
        )} to ${toPlainValue(node.newValue)}`
      case 'nested':
        return formatPlain(node.children, property)
      case 'unchanged':
        return []
      default:
        throw new Error(`Unknown status: ${status}`)
    }
  })
}

export default formatPlain
