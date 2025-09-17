import parseData from './parseData.js'
import { readFile, getFileExtension } from '../fileUtils.js'

const parseFile = (filepath) => {
  const content = readFile(filepath)
  const format = getFileExtension(filepath)
  return parseData(content, format)
}

export default parseFile
