function normalize<T> (value: T | undefined, defaultValue: T) {
  if(value === undefined) {
    return defaultValue
  }
  return value
}

export default normalize