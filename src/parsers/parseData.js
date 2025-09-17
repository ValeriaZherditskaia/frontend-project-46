import yaml from 'js-yaml'

const parseData = (data, format) => {
  if (format === 'json') {
    return JSON.parse(fileContent)
  }

  if (format === 'yml' || format === 'yaml') {
    return yaml.load(fileContent)
  }

  throw new Error(`Unsupported file format: ${format}`)
}

export default parseData
