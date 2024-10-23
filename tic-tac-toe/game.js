console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

console.log(cells)

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  let cell = e.target
  console.log('I clicked on: ' + cell)
}

let noughtsTurn = true

let gameIsOver
