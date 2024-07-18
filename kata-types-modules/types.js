export function getBoolean() {
  return true
}

export function getString() {
  return 'string'
}

export function getNumber() {
  return 12
}

export function getNull() {
  return null
}

export function getObject() {
  return {
    age: 12,
    name: 'Jacob',
  }
}

export function getFunction() {
  return function addNumbers(num1, num2) {
    return num1 + num2
  }
}
