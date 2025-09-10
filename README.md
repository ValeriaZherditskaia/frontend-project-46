# Вычислитель отличий

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных.

### Hexlet tests and linter status:

[![Actions Status](https://github.com/ValeriaZherditskaia/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ValeriaZherditskaia/frontend-project-46/actions)

[![CI](https://github.com/ValeriaZherditskaia/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/ValeriaZherditskaia/frontend-project-46/actions/workflows/ci.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ValeriaZherditskaia_frontend-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ValeriaZherditskaia_frontend-project-46)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ValeriaZherditskaia_frontend-project-46&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ValeriaZherditskaia_frontend-project-46)

## Возможности утилиты

1. Поддержка разных входных форматов: JSON, YAML
2. Генерация отчета в виде: plain text, stylish и json
3. Поддержка как плоских, так и вложенных структур данных

## Установка

```
git clone https://github.com/username/frontend-project-46.git
cd frontend-project-46
npm ci
npm link
```
## Использование

### Базовое сравнение файлов
```
gendiff <filepath1> <filepath2>
```
### Выбор формата вывода
```
gendiff --format <format> <filepath1> <filepath2>
gendiff -f <format> <filepath1> <filepath2>
```
Доступные форматы:

1. stylish (по умолчанию) - древовидное представление с отступами
2. plain - плоский список изменений
3. json - структурированный JSON

### Справка
```
gendiff -h
```

## Демонстрация работы

Сравнение JSON-файлов:  
https://asciinema.org/a/Aq7qxTm8ku96DNPqz99HzZNm6

Сравнение YAML-файлов:  
https://asciinema.org/a/3W1rr75sDzk1EAz5yX1ye9rsF

Сравнение вложенных структур файлов. Формат - "stylish"  
https://asciinema.org/a/6UUFALOTMv4iFde2xrMTXPmwx

Сравнение вложенных структур файлов. Формат - "plain"  
https://asciinema.org/a/ORFETlGnLYFOCiDRlF9bGJEWt

Сравнение вложенных структур файлов. Формат - "json"  
https://asciinema.org/a/40OOO8b9whQOBcBoFJ044R8JD