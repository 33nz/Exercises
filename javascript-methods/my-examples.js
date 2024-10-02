// .map() will take an array and manipulate every element of the array to be something else

let arr = [12, 34, 67, 864]

function multiplyArr(arr) {
  return arr.map((x) => x * 369)
}

const exampleResult = multiplyArr(arr)
console.log(exampleResult)
