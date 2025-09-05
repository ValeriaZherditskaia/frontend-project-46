import genDiff from '../src/index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fixtureDir = path.join(__dirname, '..', '__fixtures__')
const expectedPlainPath = path.join(fixtureDir, 'expected_plain.txt')

test('gendiff для вложенных JSON-файлов (stylish по умолчанию)', () => {
  const filepath1 = path.join(fixtureDir, 'file1.json')
  const filepath2 = path.join(fixtureDir, 'file2.json')
  const expected = fs.readFileSync(expectedPlainPath, 'utf-8').trim()
  const actual = genDiff(filepath1, filepath2).trim()

  expect(actual).toBe(expected)
})

test('gendiff для вложенных YAML-файлов (.yml, stylish по умолчанию)', () => {
  const filepath1 = path.join(fixtureDir, 'file1.yml')
  const filepath2 = path.join(fixtureDir, 'file2.yml')
  const expected = fs.readFileSync(expectedPlainPath, 'utf-8').trim()
  const actual = genDiff(filepath1, filepath2).trim()

  expect(actual).toBe(expected)
})

test('gendiff для вложенных YAML-файлов (.yaml, stylish по умолчанию)', () => {
  const filepath1 = path.join(fixtureDir, 'file1.yaml')
  const filepath2 = path.join(fixtureDir, 'file2.yaml')
  const expected = fs.readFileSync(expectedPlainPath, 'utf-8').trim()
  const actual = genDiff(filepath1, filepath2).trim()
  expect(actual).toBe(expected)
})
