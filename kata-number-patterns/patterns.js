export function examplePattern1(max) {
  let output = ''
  const rows = Array(max).fill(0)

  rows.forEach(() => {
    const cols = Array(max).fill(0)
    output += cols.join(' ') + '\n'
  })

  return output
}

export function examplePattern2(max) {
  let output = ''
  const rows = Array(max).fill(0)

  rows.forEach((item, i) => {
    const cols = Array(i + 1).fill(i + 1)
    output += cols.join(' ') + '\n'
  })

  return output
}

export function pattern1(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(i + 1).fill(0)
    for (let i in row) {
      if (i % 2 == 0) {
        row[i] = 1
      }
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern1(12))

export function pattern2(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(max).fill(1)
    row.fill(i + 1, row.length - i - 1)
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern2(7))

export function pattern3(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(max).fill(0)
    for (let j in row) {
      if ((Number(j) + Number(i)) % 2 == 0) {
        row[j] = 1
      }
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern3(7))

export function pattern4(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(i + 1).fill(0)

    for (let j in row) {
      row[j] = Number(j) + 1
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern4(7))

export function pattern5(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(i + 1).fill(i + 1)
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern5(7))

export function pattern6(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(i + 1).fill(1)
    for (let j in row) {
      row[j] = row.length - j
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern6(7))

export function pattern7(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(max - i).fill(0)
    for (let j in row) {
      row[j] = max - j
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern7(7))

export function pattern8(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(max - i).fill(0)
    for (let j in row) {
      row[j] = Number(j) + 1
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern8(12))

export function pattern9(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(max - i).fill(0)
    for (let j in row) {
      row[j] = max - i - j
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern9(7))

export function pattern10(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(i + 1).fill(0)
    for (let j in row) {
      row[j] = max - j
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern10(7))

export function pattern11(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    let bigRowLength = 2 * i + 1
    const row = Array(bigRowLength).fill(0)
    for (let j in row) {
      let numJ = Number(j)
      row[numJ] = numJ > i ? bigRowLength - numJ : numJ + 1
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern11(7))

export function pattern12(max) {
  let output = ''
  let bigColLength = 2 * max - 1
  const cols = Array(bigColLength).fill(0)

  cols.forEach((item, i) => {
    let rowLength = i < max ? i + 1 : 2 * max - (i + 1)

    const row = Array(rowLength).fill(0)
    for (let j in row) {
      let numJ = Number(j)
      row[numJ] = numJ + 1
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern12(7))

export function pattern12B(max) {
  let output = ''

  for (let i = 1; i < max * 2; i++) {
    let rowLength = i <= max ? i : max * 2 - i
    let row = Array.from({ length: rowLength }, (_, j) => j + 1)
    output += row.join(' ') + '\n'
  }
  return output
}
console.log(pattern12B(7))

export function pattern13(max) {
  let output = ''
  let bigColLength = 2 * max - 1
  const cols = Array(bigColLength).fill(0)

  cols.forEach((item, i) => {
    let rowLength = max > i ? max - i : i - max + 2

    const row = Array(rowLength).fill(0)
    for (let j in row) {
      let numJ = Number(j)
      row[numJ] = numJ + 1
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern13(7))

export function pattern14(max) {
  let output = ''
  let bigColLength = 2 * max - 1
  const cols = Array(bigColLength).fill(0)

  cols.forEach((item, i) => {
    const row = Array(max).fill(' ')
    let firstJ = i < max ? i : max - (i + 2 - max)
    for (let j in row) {
      let numJ = Number(j)
      if (numJ >= firstJ) {
        row[numJ] = numJ + 1
      }
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern14(7))

export function pattern15(max) {
  let output = ''
  const bigColLength = 2 * max - 1
  const cols = Array(bigColLength).fill(0)

  cols.forEach((item, i) => {
    const row = Array(max).fill(' ')
    let jOffset = i < max ? i : max - (i + 2 - max)
    for (let j in row) {
      let numJ = Number(j)
      if (numJ + jOffset < row.length) {
        row[jOffset + numJ] = numJ + 1
      }
    }
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern15(7))

export function pattern16(max) {
  //find longest column
  if (max == 1) {
    return 1
  }

  let n = 2
  while (n ** 2 + (n - 1) ** 2 < max * 2) {
    n++
  }

  let output = ''
  const cols = []

  let rowSize = 1

  while (rowSize <= n) {
    cols.push(Array(rowSize).fill(' '))
    rowSize++
  }

  for (let i in cols) {
    for (let j in cols[i]) {
      //for the 0th column, the offset is 0; just equivalent to row number + 1
      //for other columns, the value should be equivalent to the last value + the length of the last row - 1
      if (j == 0) {
        cols[i][j] = Number(i) + 1
      } else {
        let nextValue = cols[i][j - 1] + cols.length - j
        if (nextValue <= max) {
          cols[i][j] = nextValue
        } else {
          break
        }
      }
    }

    output += cols[i].join(' ') + '\n'
  }
  return output
}
console.log(pattern16(15))

export function pattern17(max) {
  let output = ''
  const cols = Array(max).fill(0)

  cols.forEach((item, i) => {
    const row = Array(max).fill(0)
    row[i] = i
    output += row.join(' ') + '\n'
  })
  return output
}
console.log(pattern17(9))

export function pattern18(max) {
  let output = ''
  let rowSize = 1
  let i = 0
  while (i < max) {
    let rowIndex = 0
    while (rowIndex < rowSize) {
      if (i == max) {
        return output
      }
      output += `${i + 1}`
      rowIndex++
      i++
    }
    output += '\n'
    rowSize++
  }
  return output
}
console.log(pattern18(14))
