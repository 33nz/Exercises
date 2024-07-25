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
