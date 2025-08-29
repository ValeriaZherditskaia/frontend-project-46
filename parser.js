import fs from 'fs'
import path from 'path'

const parseFile = (filepath) => {
  const cwd = process.cwd() // Получаем рабочую директорию
  const fullPath = path.resolve(cwd, filepath) // Строим абсолютный путь

  const fileContent = fs.readFileSync(fullPath, 'utf-8') // Читаем файл
  const ext = path.extname(fullPath).toLowerCase() // Определяем расширение файла

  if (ext === '.json') {
    // Парсим содержимое в зависимости от расширения
    return JSON.parse(fileContent)
  }
  throw new Error(`Unsupported file format: ${ext}`) // Прочие форматы будут добавлены позже
}

export default parseFile
