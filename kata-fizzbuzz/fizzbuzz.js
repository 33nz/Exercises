const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [12, 22, 45, 47, 50, 63, 7]
const arr3 = [17, -12, 'hello', 5, 23, 60, -7, null, 13]

// multiple of 3 replaced with "Fizz"

// multipple of 5 replaced with "Buzz"

// multiple of 3 & r 5 replaced with "FizzBuzz"

// non-number replaced with bonk

function fizzBuzz(arr) {
  return arr.map((x) => {
    if (typeof x !== 'number' || isNaN(x)) {
      return 'Bonk'
    } else if (x % 15 === 0) {
      return 'FizzBuzz'
    } else if (x % 5 === 0) {
      return 'Buzz'
    } else if (x % 3 === 0) {
      return 'Fizz'
    } else {
      return x
    }
  })
}

console.log(fizzBuzz(arr1))
console.log(fizzBuzz(arr2))
console.log(fizzBuzz(arr3))

// create new array function

function createNewArray(length) {
  let newArray = []

  for (let i = 0; i <= length; i++) {
    newArray.push(i)
  }
  return newArray
}

console.log(createNewArray(12))
