console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

console.log(cells)

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

function cellClicked(e) {
  let cell = e.target
  let index = Array.prototype.indexOf.call(cells, cell)
  console.log('I clicked on cell ' + (index + 1))

  // create a variable for the cell clicked so I can do stuff with it

  // if the cell is empty check its innerHTML property

  // figure out which symbol to put in cell based on the noughtsTurn boolean

  // put the symbol inside the cell by using innerHTML again

  // check to see if the player won the game with that move (probably using a new function, like checkForWin() which I'll write later)

  // if the game isn't over: switch to the other player using noughtsTurn again

  // update the subtitle saying whose turn it is now
}

let noughtsTurn = true

let gameIsOver
