import parseFile from './parsers/parseFile.js'
import buildDiffTree from './diffBuilder.js'
import formatBy from './formaters/index.js'

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1) // Возвращает JS-объект из 1 файла
  const data2 = parseFile(filepath2) // Возвращает JS-объект из 2 файла
  const tree = buildDiffTree(data1, data2) // Создаёт дерево с узлами, описывающими изменения.

  return formatBy(tree, format)
}

export default genDiff
