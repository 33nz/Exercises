export function callsFunction(increment) {
  return increment()
}

export function callsProperty(obj) {
  return obj.increment()
}

export function map(arr, func) {
  const newArr = []
  for (let value of arr) {
    newArr.push(func(value))
  }
  return newArr
}

export function filter(arr, func) {
  const newArr = []
  for (let value of arr) {
    if (func(value)) {
      newArr.push(value)
    }
  }
  return newArr
}

export function find(arr, func) {
  for (let value of arr) {
    if (func(value)) {
      return value
    }
  }
}
