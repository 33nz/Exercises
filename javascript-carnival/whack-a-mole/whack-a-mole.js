// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByClassName('cell')

console.log(cells)
console.log('cell count:' + cells.length)

console.log(randomIndex)

function popMole() {
  for (let cell of cells) {
    if (cell.querySelector('img')) {
      cell.removeChild(cell.querySelector('img'))
    }
  }

  const img = document.createElement('img')
  img.src = './whack-a-mole/mole.png'
  img.alt = 'Mole'

  let randomIndex = Math.floor(Math.random() * cells.length)

  let cell = cells[randomIndex]

  cell.appendChild(img)
}
