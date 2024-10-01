// Write a function called flipflop which takes a number as its input. It should return the number that is passed to it, unless the number is:

// divisible by 15, then it should be replaced with the string "FlipFlop"
// divisible by 5, then it should be replaced with the string "Flop"
// divisible by 3, then it should be replaced with the string "Flip"

export function flipflop(numberParameter) {
  if (numberParameter % 15 === 0) {
    return 'FlipFlop'
  } else if (numberParameter % 5 === 0) {
    return 'Flop'
  } else if (numberParameter % 3 === 0) {
    return 'Flip'
  }
  return numberParameter
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
