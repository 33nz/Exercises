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

changeClownHead()
