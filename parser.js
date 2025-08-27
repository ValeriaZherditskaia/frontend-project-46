import fs from 'fs'

const parseFile = (filepath) => {
  const fileContent = fs.readFileSync(filepath, 'utf-8')
  return JSON.parse(fileContent)
}

export default parseFile
