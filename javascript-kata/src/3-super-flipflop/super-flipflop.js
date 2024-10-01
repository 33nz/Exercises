/** @format */

import { flipflop } from './flipflop.js'
// The above line of code is importing your flipflop function from the previous file you were working on
// This allows you to use that function in this exercise

// Write a function called superFlipFlop which takes an array of numbers as its input.

// It should loop over that array and then return a "flipflopped" array
// i.e. the array is identical to the original, but with the following changes:
// For example:

// superFlipFlop([1,2,3])         will return [1, 2, "Flip"]
// superFlipFlop([1,2,5])         will return [1, 2, "Flop"]
// superFlipFlop([1,2,15])        will return [1, 2, "FlipFlop"]
// superFlipFlop([30, 9, 20, 1])  will return ["FlipFlop", "Flip", "Flop", 1]

// write your code below this line---------------------------------

function superFlipFlop(arrayParameter) {
  return arrayParameter.map((word) => flipflop(word))
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
export { superFlipFlop }
