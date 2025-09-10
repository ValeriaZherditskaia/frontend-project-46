import formatStylish from './stylish.js'
import formatPlain from './plain.js'
import formatJson from './json.js'

export default (tree, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return formatStylish(tree)
    case 'plain':
      return formatPlain(tree).join('\n')
    case 'json':
      return formatJson(tree)

    default:
      throw new Error(`Unknown format: ${formatName}`)
  }
}
