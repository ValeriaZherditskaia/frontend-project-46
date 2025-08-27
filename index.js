import parseFile from './parser.js'

const genDiff = (path1, path2) => {
  const parseFile1 = parseFile(path1)
  const parseFile2 = parseFile(path2)

  return JSON.stringify({ file1: parseFile1, file2: parseFile2 }, null, 2)
}

export default genDiff
