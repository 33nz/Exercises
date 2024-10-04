document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// const board = {
//   cells: [
//     {
//       row: 0,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//     },
//     {
//       row: 0,
//       col: 1,
//       isMine: true,
//       isMarked: false,
//       hidden: true,
//     },
//     {
//       row: 0,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//     },
//     {
//       row: 1,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//     },
//     {
//       row: 1,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//     },
//     {
//       row: 1,
//       col: 2,
//       isMine: true,
//       isMarked: false,
//       hidden: true,
//     },
//     {
//       row: 2,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//     },
//     {
//       row: 2,
//       col: 1,
//       isMine: true,
//       isMarked: false,
//       hidden: true,
//       isMarked: false,
//     },
//     {
//       row: 2,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true,
//     },
//   ],
// }

function generateBoard(numRows, numCols) {
  const board = {
    cells: [],
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      board.cells.push({
        row: row,
        col: col,
        isMine: false,
        isMarked: false,
        hidden: true,
      })
    }
  }
  return board
}

function placeMines(board, numMines) {
  let minesPlaced = 0

  while (minesPlaced < numMines) {
    const randomIndex = Math.floor(Math.random() * board.cells.length)
    const cell = board.cells[randomIndex]

    if (!cell.isMine) {
      cell.isMine = true
      minesPlaced++
    }
  }
}

const board = generateBoard(6, 6)

placeMines(board, 6)

function startGame() {
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }

  lib.initBoard()

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  for (let i = 0; i < board.cells.length; i++) {
    const cell = board.cells[i]

    if (cell.isMine && !cell.isMarked) {
      return
    }

    if (!cell.isMine && cell.hidden) {
      return
    }
  }
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
// const surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  const surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0

  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++
    }
  }

  return count
}
