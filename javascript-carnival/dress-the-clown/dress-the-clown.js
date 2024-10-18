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

document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event

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
