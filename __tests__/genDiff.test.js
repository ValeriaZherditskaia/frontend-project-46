import genDiff from '../src/index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fixtureDir = path.join(__dirname, '..', '__fixtures__')

const filepath1 = path.join(fixtureDir, 'file1.json')
const filepath2 = path.join(fixtureDir, 'file2.json')
const expectedPlainPath = path.join(fixtureDir, 'expected_plain.txt')

test('gendiff для плоских JSON-файлов', () => {
  const expected = fs.readFileSync(expectedPlainPath, 'utf-8').trim()
  const actual = genDiff(filepath1, filepath2).trim()

  expect(actual).toBe(expected)
})
