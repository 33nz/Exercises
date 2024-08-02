// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const arr = [1, 2, 3, 4, 5, 6]

// use for loop over the array and console log each item
for (let item of arr) {
  console.log(item)
}

// use arr.forEach to do the same thing
arr.forEach((num) => {
  console.log(num)
})
//or
arr.forEach((x) => console.log(x))

// use arr.map to return an array where each item has had 1 added to it
arr.map(function fn(x) {
  return x + 1
})
//or
arr.map((num) => {
  const result = num + 1
  console.log(result)
})

// use arr.filter to return an array with only even numbers
const evenArr = arr.filter((num) => num % 2 === 0)
console.log(evenArr)

// use arr.find to return the first number > 4
const four = arr.find((x) => x === 4)
console.log(four)

// use arr.reduce to sum the total of the array
const total = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
)
console.log(total)

// use arr.reduce to replicate the map, filter and find functionality

// refactor your code so that
// - at least one function is defined as an anonymous function e.g. arr.map(function fnName(item) {???})
// - at least one function is using an ES6 arrow function with an implicit return e.g. arr.map(item => ???)
// - at least one function is using an ES6 arrow function with an explicit return e.g. arr.map(item => {return ???})
// - at least one is using a named function as an argument e.g. arr.map(doSomething)
