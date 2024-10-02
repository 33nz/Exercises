//  .length
// We can use `.length` to get the length of a string. 
// It returns an integer of how many characters are in the string. This includes spaces.
// Example: length('Aotearoa') should return 8.
// Example: length('New Zealand') should return 11.
const str = 'Aotearoa'

function length (str) {
  return str.length
}

// .toLowerCase() & .toUpperCase()
// Sometimes with strings we want to write a function that changes the casing of letters in strings. 
// This is when we want the string to be consistent while assigned to a variable but have certain situations like headings, links etc that the casing needs to change. 
// Here's an example that uses both. 
// Example: toCase('James') should return 'james-JAMES'.
const aName = 'James'

function toCase (name) {
  const lower = name.toLowerCase()
  const upper = name.toUpperCase()
  return lower + '-' + upper
}

// .charAt()
// When we want to access a particular part of a string we can use `.charAt()` to get the character at a specified position.
// It returns the character that matches that position in the string.

// In this case we are using `.charAt()` to get the first character in each string to then return an acronym made from all three strings. 
// Example: acronym('Dev', 'Academy', ) should return 'DAA'.
// Example: acronym('New', 'Zealand', 'Dollar') should return 'NZD'.
const str1 = 'Dev'
const str2 = 'Academy'
const str3 = 'Aotearoa'

function acronym (str1, str2, str3) {
  const one = str1.charAt(0)
  const two = str2.charAt(0)
  const three = str3.charAt(0)
  return one + two + three
}

// ------------ Calling the functions -----------

const lengthResults = length(str)
console.log('lengthResults: ', lengthResults)

const toCaseResults = toCase(aName)
console.log('toCaseResults: ', toCaseResults)

const acronymResults = acronym(str1, str2, str3)
console.log('acronymResults: ', acronymResults)
