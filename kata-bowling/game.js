// Score 64 (simple game):
// const frames = [
//   [2, 0],
//   [4, 2],
//   [6, 0],
//   [2, 4],
//   [1, 5],
//   [7, 0],
//   [5, 2],
//   [7, 0],
//   [2, 6],
//   [8, 1],
// ]
// Score 71 (with spares):
const frames = [
  [6, 1],
  [4, 0],
  [6, 4],
  [2, 7],
  [3, 5],
  [5, 0],
  [5, 5],
  [0, 0],
  [1, 6],
  [7, 2],
]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
// ]
//
// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]

function addScore(frames) {
  let totalScore = 0

  frames.forEach((frame, index) => {
    let frameScore = checkStrike(frames, frame, index)
    if (frameScore < 10) {
      // if no strike
      frameScore = frame[0] + frame[1]
      frameScore = checkSpares(frameScore, frame, index)
    }
    totalScore += frameScore
  })
  return totalScore
}

console.log(addScore(frames))

function checkSpares(frameScore, frames, index) {
  if (frameScore === 10) {
    frameScore += frames[index + 1][0] // adds score from next ball
  }
  return frameScore
}

function checkStrike(frames, frame, index) {
  if (frame[0] === 10) {
    const nextFrameIndex = index + 1
    const thirdFrameIndex = index + 2
    let frameScore = 10
    // deal with double strike
    if (index === 9) {
      frameScore = lastFrame(frame, frameScore)
    } else if (frames[nextFrameIndex][0] === 10) {
      frameScore += frames[nextFrameIndex][0] + frames[thirdFrameIndex][0]
    } else {
      frameScore += frames[nextFrameIndex][0] + frames[thirdFrameIndex][1]
    }
    return frameScore
  } else return 0
}

function lastFrame(frame, frameScore) {
  const secondBall = frame[1]
  const thirdBall = frame[2]

  if (secondBall === 10) {
    frameScore += 2 * secondBall + thirdBall * 3
  } else frameScore += 2 * secondBall + thirdBall * 2
  return frameScore
}
