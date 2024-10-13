// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByClassName('cell')

console.log(cells)
console.log('cell count:' + cells.length)

let randomIndex = Math.floor(Math.random() * cells.length)

console.log(randomIndex)
