// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

import { save } from './screenshot.js'
// variable to keep track of currently selected part
let partIndex = 0
// array containing reference to the image id's for body parts
let elements = [
  document.getElementById('head'),
  document.getElementById('body'),
  document.getElementById('shoes'),
]
// array to keep track of current parts image
let indexes = [0, 0, 0]

// set variable for each part

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

document.onkeydown = checkKey

function checkKey(e) {
  // check if up arrow pressed
  if (e.keyCode == '38') {
    //  decrease the part index
    partIndex--
    // wrap part index if below zero
    if (partIndex < 0) partIndex = 2
    console.log(partIndex)
    // check if down arrow pressed
  } else if (e.keyCode == '40') {
    // increase the part index
    partIndex++
    // wrap the part index if above 2
    if (partIndex > 2) partIndex = 0
    console.log(partIndex)
    // check if left arrow
  } else if (e.keyCode == '37') {
    // decrease the index of the current part
    indexes[partIndex]--
    // if the index goes below zero, wrap around to 5
    if (indexes[partIndex] < 0) indexes[partIndex] = 5
    // update the source of the element image
    elements[partIndex].src =
      './images/' + getPartName(partIndex) + indexes[partIndex] + '.png'

    console.log(indexes)
    // check if right arrow
  } else if (e.keyCode == '39') {
    // increase the index part
    indexes[partIndex]++
    // if the index goes above 5 wrap to 0
    if (indexes[partIndex] > 5) indexes[partIndex] = 0
    // update the elements image souce based on index
    elements[partIndex].src =
      './images/' + getPartName(partIndex) + indexes[partIndex] + '.png'
  }
}
// update the source of the current element form the partIndex
function getPartName(partIndex) {
  if (partIndex === 0) {
    return 'head'
  } else if (partIndex === 1) {
    return 'body'
  } else {
    return 'shoes'
  }
}
// define clown as an object
let clown = {
  head: head,
  body: body,
  shoes: shoes,
}
// define save button variable
let saveMeButton = document.querySelector('button')
// add click event listener to saveClown function
saveMeButton.addEventListener('click', saveClown)
// define the saveClown function
function saveClown() {
  save(clown)
}
