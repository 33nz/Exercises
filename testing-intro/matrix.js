/* eslint-disable no-unused-vars */
export function getMatrix(n) {
  let matrix = []

  for (let i = 0; i < n; i++) {
    let row = []

    for (let j = 0; j < n; j++) {
      row.push(0)
    }
    matrix.push(row)
  }
  return matrix
}

export function updateMatrix(matrix, coords, value) {}
