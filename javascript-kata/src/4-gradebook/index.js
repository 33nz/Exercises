// leave this code as-is please
const students = ['Joseph', 'Susan', 'Wiremu', 'Elizabeth']

const scores = [
  //Joseph's score
  [80, 70, 70, 100],
  // Susan's score
  [85, 80, 90, 90],
  // Wiremu's score
  [75, 70, 80, 75],
  //Elizabeth's score
  [100, 90, 95, 85],
]
// write your code below this line---------------------------------

// 1. Assign the gradebook variable with the value of an empty object.
let gradebook

// 2. Add each student (from the students array) as a property to the gradebook object.
// The key should equal the student’s name and the value should equal a new empty object.

// 3. Add a new property with a key of testScores to each student property in gradebook.
// The value of this property should be equal to the student’s scores in the scores array.

// 4. Complete the addScore function that has two parameters: studentName, and score.
// addScore should add the score which is passed to it to the given student’s testScores array.
// For example:
// addScore("Susan", 80)  would push the score 80 into the value of gradebook.Susan.testScores
function addScore(studentName, score) {}

// 5. Complete the average function that returns the average of a given array of numbers.
function average(arr) {}

// 6. Complete the getAverage function that takes a name parameter and returns the average of that student’s testScores.
// You can call the average function within this function.
function getAverage(studentName) {}

// 7. STRETCH MATERIAL
// If you wish to attempt this stretch material, don't forget to remove the "skip" part of the last test in the index.test.js file in this folder
// Complete the enterScores function, which takes the following 3 parameters:
// - gradebook (an empty object)
// - students & scores (arrays similar to the ones from the top of this file)
// use those parameters to construct a new gradebook from scratch
function enterScores(gradebook, students, scores) {}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
export { gradebook, average, getAverage, addScore, enterScores, scores }
