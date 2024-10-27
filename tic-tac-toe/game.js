console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')
const subtitle = docuument.getElementById('subtitle')

console.log(cells)

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}

let noughtsTurn = true
let gameIsOver

function toggleTurn() {
  noughtsTurn = !noughtsTurn
}

function cellClicked(e) {
  // create a variable for the cell clicked
  let cell = e.target
  // if the cell is empty (check it's innerHTML property)
  if (cell.innerHTMl == '') {
    let sybmol = noughtsTurn ? 'O' : 'X'

    cell.innerHTML = sybmol

    subtitle.textContent = noughtsTurn
      ? 'It is now Xs turn!!'
      : 'It is now Os turn!!'
  }
}
