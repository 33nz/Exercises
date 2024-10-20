// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

import { save } from './screenshot.js'

console.log('Dress The Clown!')

let headIndex = 0
let bodyIndex = 0
let shoeIndex = 0

const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')

function changeClownHead() {
  let headSrc = './images/head' + headIndex + '.png'
  head.src = headSrc
}

function changeBody() {
  let bodySrc = './images/body' + bodyIndex + '.png'
  body.src = bodySrc
}

function changeShoes() {
  let shoesSrc = './images/shoes' + shoeIndex + '.png'
  shoes.src = shoesSrc
}

const bodyParts = [changeClownHead, changeBody, changeShoes]
let bodyPartIndex = 0

document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event

  if (e.keyCode == '38') {
    bodyPartIndex--
    if (bodyPartIndex < 0) {
      bodyPartIndex = bodyParts.length - 1
    }
  } else if (e.keyCode == '40') {
    bodyPartIndex++
    if (bodyPartIndex > bodyParts.length - 1) {
      bodyPartIndex = 0
    }
  } else if (e.keyCode == '39') {
    if (bodyPartIndex === 0) {
      headIndex++
      if (headIndex > 5) {
        headIndex = 0
      }
    }
    if (bodyPartIndex === 1) {
      bodyIndex++
      if (bodyIndex > 5) {
        bodyIndex = 0
      }
    }
    if (bodyPartIndex === 2) {
      shoeIndex++
      if (shoeIndex > 5) {
        shoeIndex = 0
      }
    }
    bodyParts[bodyPartIndex]()
  } else if (e.keyCode == '37') {
    if (bodyPartIndex === 0) {
      headIndex--
      if (headIndex < 0) {
        headIndex = 5
      }
    }
    if (bodyPartIndex === 1) {
      bodyIndex--
      if (bodyIndex < 0) {
        bodyIndex = 5
      }
    }
    if (bodyPartIndex === 2) {
      shoeIndex--
      if (shoeIndex < 0) {
        shoeIndex = 5
      }
    }
    bodyParts[bodyPartIndex]()
  }
}

let clown = {
  head: head,
  body: body,
  shoes: shoes,
}
