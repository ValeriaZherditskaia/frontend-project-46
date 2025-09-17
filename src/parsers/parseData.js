import yaml from 'js-yaml'

const parseData = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data)
  }

  if (format === 'yml' || format === 'yaml') {
    return yaml.load(data)
  }

  throw new Error(`Unsupported file format: ${format}`)
}

export default parseData
