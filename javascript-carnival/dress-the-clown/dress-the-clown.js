// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headIndex = 2

function changeClownHead() {
  const head = document.getElementById('head')
  let headSrc = './images/head' + headIndex + '.png'
  head.src = headSrc
}

document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event

  if (e.keyCode == '39') {
    headIndex++
    changeClownHead()
  }
}
