// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

import { save } from './screenshot.js'

let partIndex = 0

let elements = [
  document.getElementById('head'),
  document.getElementById('body'),
  document.getElementById('shoes'),
]

// array to keep track of current part images
let indexes = [0, 0, 0]

// set variavle for each part
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

document.onkeydown(checkKey)

function checkKey(e) {
  // up arrow
  if (e.keyCode == '38') {
    partIndex--
    if (partIndex < 0) partIndex = 2
  }
  // down arrow
  else if (e.keyCode == '40') {
    partIndex++
    if (partIndex > 2) partIndex = 0
  }
  // decrease index of current part with left arrow
  else if (e.keyCode == '37') {
    indexes[partIndex]--
    if (indexes[partIndex] < 0) indexes[partIndex] = 5
    elements[partIndex].src =
      './images/' + getPartName(partIndex) + indexes[partIndex] + '.png'
  }
  // increase index of current part with right arrow
  else if (e.keyCode == '39') {
    indexes[pardIndex]++
    if (indexes[partIndex] > 5) indexes[partIndex] = 0
    elements[partIndex].src =
      './images/' + getPartName(partIndex) + indexes[partIndex] + '.png'
  }
}

function getPartName(partIndex) {
  if (partIndex === 0) {
    return 'head'
  } else if (partIndex === 1) {
    return 'body'
  } else {
    return 'shoes'
  }
}
