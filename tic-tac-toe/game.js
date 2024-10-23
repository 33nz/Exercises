console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

console.log(cells)

function sayHello() {
  console.log('Hello')
}

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = sayHello
}

let noughtsTurn = true

let gameIsOver
