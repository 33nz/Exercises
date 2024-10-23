console.log('Welcome to Tic-Tac-Toe! Enjoy!')

let cells = document.getElementsByTagName('td')

console.log(cells)

function sayHello() {
  console.log('Hello')
}

cells[0].onclick = sayHello
