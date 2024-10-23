console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

console.log(cells)

function sayHello() {
  console.log('Hey man')
}

function cellClicked(e) {
  let cell = e.target
  console.log('I clicked on: ' + cell)
}

for (let cell of cells) {
  cell.onclick = sayHello
}

// for (let i = 0; i < cells.length; i++) {
//   cells[i].onclick = sayHello
// }

let noughtsTurn = true

let gameIsOver
