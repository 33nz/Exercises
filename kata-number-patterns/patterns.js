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
