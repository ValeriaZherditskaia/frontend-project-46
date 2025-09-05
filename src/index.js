import parseFile from './parsers/parser.js'
import buildDiffTree from './diffBuilder.js'
import formatStylish from './formaters/stylish.js'

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1) // Возвращает JS-объект из 1 файла
  const data2 = parseFile(filepath2) // Возвращает JS-объект из 2 файла
  const tree = buildDiffTree(data1, data2) // Создаёт дерево с узлами, описывающими изменения.

  switch (format) {
    case 'stylish':
      return formatStylish(tree) // Форматирует данные под 'stylish'
    default:
      throw new Error(`Unknown format: ${format}`)
  }
}

export default genDiff
