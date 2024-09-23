// ------------ FUNCTIONS -----------

// 1. Complete the `hello` function by returning the string 'Hello world!'.
// hint: do this inside the function body, i.e. inside of the curly brackets.
function hello() {
  return 'Hello world!'
}

// 2. + 3. This is a combined question: Define two functions.
// The first function should be named `sayHi` and return the string 'Hello!'.
function sayHi() {
  return 'Hello!'
}
// The second function should be named `sayBye` and return the string 'Goodbye!'.
function sayBye() {
  return 'Goodbye!'
}
// 4. Define a function named `greet` that returns the string 'Hey there!'.
// Then declare a variable named `salutation` and have it call the `greet` function.
// hint: call a function by writing the function name followed by parentheses, e.g. `hello()`   // expected output: 'Hello world!'
function greet() {
  return 'Hey there!'
}
let salutation = greet()
// 5. What value does the variable named `welcomeResult` have?
function welcome() {
  return 'Welcome!'
}

let welcomeResult = welcome()
// Uncomment the line below and assign your answer to the variable `welcomeResultIs`.
const welcomeResultIs = 'Welcome!'

// ---------- FUNCTIONS WITH PARAMETERS ---------

// 6. Define a function named `shout` which has a parameter and returns the parameter.
// i.e. the function will return whatever is passed into the parentheses.
// for example: Calling `shout('Echo')` would return the string 'Echo'.
function shout(x) {
  return x
}

// 7. After the following code has run, what value does `replyResult` have?
function reply(phrase) {
  return phrase
}

let replyResult = reply('Good morning')
// Uncomment the line below and assign your answer to the variable named `replyResultIs`.
// const replyResultIs =

// 8. Define a function named 'helloFriend` to greet a person by name, using a parameter.
// For example: Calling helloFriend('Emily') should return the string 'Hello Emily!'.
// Hint: try using the `+` operator to join strings together.

// 9. After the following code has run, what value does `goodMorningResult` have?
function goodMorning(name) {
  return 'Good morning ' + name + '!'
}

let goodMorningResult = goodMorning('Jacky')
// Uncomment and assign your answer to the variable named `goodMorningResultIs`.
// const goodMorningResultIs =

// 10. After the following code has run, what value does `hiResult` have?
function hi(name) {
  return 'Hi ' + name + '!'
}

let hi1 = hi('Andy')
let hi2 = hi('Hamish')

let hiResult = hi1 + ' ' + hi2
// Uncomment and assign your answer to the variable named `hiResultIs`.
// const hiResultIs =

// 11. Define a function named `warn` that takes a parameter
// it should console.log() the parameter duplicated, with a space between each string
// then `return` that same value
// for example: calling warn('alarm') should console.log() the value 'alarm alarm', then return the value 'alarm alarm'.

// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  hello,
  reply,
  goodMorning,
}
if (typeof sayHi !== 'undefined') toExport.sayHi = sayHi
if (typeof sayBye !== 'undefined') toExport.sayBye = sayBye
if (typeof greet !== 'undefined') toExport.greet = greet
if (typeof salutation !== 'undefined') toExport.salutation = salutation
if (typeof shout !== 'undefined') toExport.shout = shout
if (typeof helloFriend !== 'undefined') toExport.helloFriend = helloFriend
if (typeof welcomeResultIs !== 'undefined')
  toExport.welcomeResultIs = welcomeResultIs
if (typeof replyResultIs !== 'undefined') toExport.replyResultIs = replyResultIs
if (typeof goodMorningResultIs !== 'undefined')
  toExport.goodMorningResultIs = goodMorningResultIs
if (typeof hiResultIs !== 'undefined') toExport.hiResultIs = hiResultIs
if (typeof warn !== 'undefined') toExport.warn = warn
export default toExport
