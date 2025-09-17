import fs from 'fs'
import path from 'path'

export const readFile = (filepath) => {
  const fullPath = path.resolve(filepath) // Строим абсолютный путь
  const fileContent = fs.readFileSync(fullPath, 'utf-8') // Читаем файл
  return fileContent
}

export const getFileExtension = (filepath) => {
  const format = path.extname(filepath).toLowerCase() // Определяем расширение файла
  return format.slice(1) // убираем точку
}
