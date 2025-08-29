import parseFile from './parser.js'
import _ from 'lodash'

const genDiff = (path1, path2) => {
  const data1 = parseFile(path1)
  const data2 = parseFile(path2)

  const keys = _.union(Object.keys(data1), Object.keys(data2))
  const sortedKeys = _.sortBy(keys)

  const diffBody = sortedKeys.reduce((acc, key) => {
    const has1 = Object.hasOwn(data1, key)
    const has2 = Object.hasOwn(data2, key)
    const value1 = data1[key]
    const value2 = data2[key]

    if (has1 && !has2) {
      return acc + `  - ${key}: ${value1}\n`
    }
    if (!has1 && has2) {
      return acc + `  + ${key}: ${value2}\n`
    }
    if (has1 && has2 && value1 !== value2) {
      return acc + `  - ${key}: ${value1}\n` + `  + ${key}: ${value2}\n`
    }
    return acc + `    ${key}: ${value1}\n`
  }, '')

  return `{\n${diffBody}}`
}

export default genDiff
