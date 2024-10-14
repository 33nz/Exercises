// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

import { getRandomNumber } from './random-number.js'

console.log('Whack-a-Mole!')

let cellsArray = document.getElementsByClassName('cell')

let randomIndex = getRandomNumber(0, cellsArray.length)
let randomCell = cellsArray[randomIndex]

const img = document.createElement('img')
img.src = './mole.png'
img.alt = 'Mole'
img.width = 75
img.heigh = 75

randomCell.appendChild(img)

function whackedMole() {
  this.parentNode.removeChild(this)

  let newIndex = getRandomNumber(0, cellsArray.length)

  let newCell = cellsAray[newIndex]

  newCell.appendChild(img)
}

img.onclick = whackedMole
