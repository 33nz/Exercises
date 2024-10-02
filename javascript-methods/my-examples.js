// .map() will take an array and manipulate every element of the array to be something else

let arr = [12, 34, 67, 864]

function multiplyArr(arr) {
  return arr.map((x) => x * 369)
}

const exampleResult = multiplyArr(arr)
console.log(exampleResult)

// typeof will advise in a stirng what the type of data is being entered.

let num = 12
let string = 'Hello'
let bool = false
let obj = {}
let array = []
const whoknows = null
const unsure = undefined
let func = function () {}

console.log(typeof num)
console.log(typeof string)
console.log(typeof bool)
console.log(typeof obj)
console.log(typeof array)
console.log(typeof whoknows)
console.log(typeof unsure)
console.log(typeof func)

// .find() will return the first element in an array that meets a condition

let heros = [
  { name: 'John', id: 1, superhero: true },
  { name: 'Jacob', id: 2, superhero: true },
  { name: 'Jebus', id: 3, superhero: true },
]

const theMostSuperHero = heros.find((hero) => hero.name === 'Jebus')
console.log(theMostSuperHero)
