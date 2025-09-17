import _ from 'lodash'

const buildDiffTree = (obj1, obj2) => {
  // Собираем все ключи из обоих объектов
  const keys = _.union(Object.keys(obj1), Object.keys(obj2))
  // Сортируем ключи в алфавитном порядке
  const sortedKeys = _.sortBy(keys)

  return sortedKeys.map((key) => {
    const has1 = Object.hasOwn(obj1, key) // есть ли ключ в первом объекте
    const has2 = Object.hasOwn(obj2, key) // есть ли ключ во втором объекте
    const val1 = obj1[key] // значение в первом объекте
    const val2 = obj2[key] // значение во втором объекте

    if (has1 && !has2) {
      return { key, status: 'removed', value: val1 }
    }

    if (!has1 && has2) {
      return { key, status: 'added', value: val2 }
    }

    // Оба значения — объекты
    if (_.isPlainObject(val1) && _.isPlainObject(val2)) {
      return {
        key,
        status: 'nested',
        children: buildDiffTree(val1, val2), // Рекурсивно сравнить вложенные поля
      }
    }

    // Значения одинаковы
    if (_.isEqual(val1, val2)) {
      return { key, status: 'unchanged', value: val1 }
    }

    // Значения отличаются
    return {
      key,
      status: 'changed',
      oldValue: val1,
      newValue: val2,
    }
  })
}

export default buildDiffTree
