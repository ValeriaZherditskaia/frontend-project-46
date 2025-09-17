import genDiff from '../src/index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fixtureDir = path.join(__dirname, '..', '__fixtures__')
const inputDir = path.join(fixtureDir, 'input')
const expectedDir = path.join(fixtureDir, 'expected')

describe('stylish format', () => {
  const expectedStylish = fs
    .readFileSync(path.join(expectedDir, 'expected_stylish.txt'), 'utf-8')
    .trim()

  test.each([
    ['JSON files', 'file1.json', 'file2.json'],
    ['YAML files (.yml)', 'file1.yml', 'file2.yml'],
    ['YAML files (.yaml)', 'file1.yaml', 'file2.yaml'],
  ])('%s', (_, file1, file2) => {
    const filepath1 = path.join(inputDir, file1)
    const filepath2 = path.join(inputDir, file2)
    const actual = genDiff(filepath1, filepath2, 'stylish').trim()
    expect(actual).toBe(expectedStylish)
  })
})

describe('plain format', () => {
  const expectedPlain = fs
    .readFileSync(path.join(expectedDir, 'expected_plain.txt'), 'utf-8')
    .trim()

  test.each([
    ['JSON files', 'file1.json', 'file2.json'],
    ['YAML files (.yml)', 'file1.yml', 'file2.yml'],
    ['YAML files (.yaml)', 'file1.yaml', 'file2.yaml'],
  ])('%s', (_, file1, file2) => {
    const filepath1 = path.join(inputDir, file1)
    const filepath2 = path.join(inputDir, file2)
    const actual = genDiff(filepath1, filepath2, 'plain').trim()
    expect(actual).toBe(expectedPlain)
  })
})

describe('json format', () => {
  const expectedJson = fs
    .readFileSync(path.join(expectedDir, 'expected_json.txt'), 'utf-8')
    .trim()

  test('JSON files', () => {
    const filepath1 = path.join(inputDir, 'file1.json')
    const filepath2 = path.join(inputDir, 'file2.json')
    const actual = genDiff(filepath1, filepath2, 'json').trim()
    expect(JSON.parse(actual)).toEqual(JSON.parse(expectedJson))
  })
})
