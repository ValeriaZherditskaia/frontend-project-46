import genDiff from '../src/index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fixtureDir = path.join(__dirname, '..', '__fixtures__')
const inputDir = path.join(fixtureDir, 'input')
const expectedDir = path.join(fixtureDir, 'expected')

const expectedStylish = fs
  .readFileSync(path.join(expectedDir, 'expected_stylish.txt'), 'utf-8')
  .trim()
const expectedPlain = fs
  .readFileSync(path.join(expectedDir, 'expected_plain.txt'), 'utf-8')
  .trim()

describe('stylish format', () => {
  test('JSON files', () => {
    const file1 = path.join(inputDir, 'file1.json')
    const file2 = path.join(inputDir, 'file2.json')
    const actual = genDiff(file1, file2, 'stylish').trim()
    expect(actual).toBe(expectedStylish)
  })

  test('YAML files (.yml)', () => {
    const file1 = path.join(inputDir, 'file1.yml')
    const file2 = path.join(inputDir, 'file2.yml')
    const actual = genDiff(file1, file2, 'stylish').trim()
    expect(actual).toBe(expectedStylish)
  })

  test('YAML files (.yaml)', () => {
    const file1 = path.join(inputDir, 'file1.yaml')
    const file2 = path.join(inputDir, 'file2.yaml')
    const actual = genDiff(file1, file2, 'stylish').trim()
    expect(actual).toBe(expectedStylish)
  })
})

describe('plain format', () => {
  test('JSON files', () => {
    const file1 = path.join(inputDir, 'file1.json')
    const file2 = path.join(inputDir, 'file2.json')
    const actual = genDiff(file1, file2, 'plain').trim()
    expect(actual).toBe(expectedPlain)
  })

  test('YAML files (.yml)', () => {
    const file1 = path.join(inputDir, 'file1.yml')
    const file2 = path.join(inputDir, 'file2.yml')
    const actual = genDiff(file1, file2, 'plain').trim()
    expect(actual).toBe(expectedPlain)
  })

  test('YAML files (.yaml)', () => {
    const file1 = path.join(inputDir, 'file1.yaml')
    const file2 = path.join(inputDir, 'file2.yaml')
    const actual = genDiff(file1, file2, 'plain').trim()
    expect(actual).toBe(expectedPlain)
  })
})

describe('json format', () => {
  test('JSON files', () => {
    const file1 = path.join(inputDir, 'file1.json')
    const file2 = path.join(inputDir, 'file2.json')
    const actual = genDiff(file1, file2, 'json').trim()
    const expected = fs
      .readFileSync(path.join(expectedDir, 'expected_json.txt'), 'utf-8')
      .trim()
    expect(JSON.parse(actual)).toEqual(JSON.parse(expected))
  })
})
