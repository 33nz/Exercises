// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

import { getRandomNumber } from './random-number.js'

console.log('Whack-a-Mole!')

let cellsArray = document.getElementsByClassName('cell')

function placeMole() {
  let randomIndex = getRandomNumber(0, cellsArray.length)
  let randomCell = cellsArray[randomIndex]

  const img = document.createElement('img')
  img.src = './mole.png'
  img.alt = 'Mole'
  img.width = 75
  img.heigh = 75

  img.onclick = whackedMole

  randomCell.appendChild(img)
}

function whackedMole() {
  this.parentNode.removeChild(this)

  const whackAudio = document.createElement('audio')
  whackAudio.src = './whack-audio.wav'
  whackAudio.play()

  placeMole()
}
placeMole()
