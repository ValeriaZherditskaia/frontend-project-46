import fs from 'fs'
import path from 'path'

const parseFile = (filepath) => {
  const cwd = process.cwd()

  const fileContent = fs.readFileSync(filepath, 'utf-8')
  return JSON.parse(fileContent)
}

export default parseFile
