// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headIndex = 0
let bodyIndex = 0
let shoeIndex = 0

function changeClownHead() {
  const head = document.getElementById('head')
  let headSrc = './images/head' + headIndex + '.png'
  head.src = headSrc
}

function changeBody() {
  const body = document.getElementById('body')
  let bodySrc = './images/body' + bodyIndex + '.png'
  body.src = bodySrc
}

function changeShoes() {
  const shoes = document.getElementById('shoes')
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
  }

  if (e.keyCode == '39') {
    headIndex++
    if (headIndex > 5) {
      headIndex = 0
    }
    changeClownHead()
  } else if (e.keyCode == '37') {
    headIndex--
    if (headIndex < 0) {
      headIndex = 5
    }
    changeClownHead()
  }
}
