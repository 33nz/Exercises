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
// const frames = [
//   [6, 1],
//   [4, 0],
//   [6, 4],
//   [2, 7],
//   [3, 5],
//   [5, 0],
//   [5, 5],
//   [0, 0],
//   [1, 6],
//   [7, 2],
// ]
// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4],
//   [8, 0],
//   [10, 0],
//   [2, 7],
//   [5, 5],
//   [4, 0],
//   [10, 0],
//   [2, 1],
//   [2, 6],
//   [4, 4],
// ]

// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141 (includes a strike on the last frame):
const frames = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [10, 10, 10],
]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 10, 10],
// ]

function isStrike(frame) {
  return frame[0] === 10
}

function isSpare(frame) {
  return frame[0] + frame[1] === 10 && frame[0] !== 10
}

function evaluateFrames(frames) {
  const evaluated = []

  for (let frame of frames) {
    evaluated.push({
      frame: frame,
      isStrike: isStrike(frame),
      isSpare: isSpare(frame),
    })
  }
  return evaluated
}

function getNextTwoBowlsValue(evalutedFrames, currentIndex) {
  let bowls = [...evalutedFrames[currentIndex + 1].frame]

  if (evalutedFrames[currentIndex + 1].isStrike) {
    if (currentIndex === 8) {
      bowls.pop()
    } else {
      bowls[1] = evalutedFrames[currentIndex + 2].frame[0]
    }
  }
  return bowls[0] + bowls[1]
}

function handleLastFrame(lastFrame) {
  let score = 0
  if (lastFrame.isSpare) {
    score += 10 + lastFrame.frame[2]
  } else if (lastFrame.isStrike) {
    score += 10 + lastFrame.frame[1] + lastFrame.frame[2]
  } else {
    score += lastFrame.frame[0] + lastFrame.frame[1]
  }

  return score
}

function scoreBowling(frames) {
  let score = 0

  const evaluatedFrames = evaluateFrames(frames)

  //handle first 9 frames
  for (let i = 0; i < 9; i++) {
    const currentFrame = evaluatedFrames[i]
    const nextFrame = evaluatedFrames[i + 1]

    score += currentFrame.frame[0] + currentFrame.frame[1]

    if (currentFrame.isSpare) {
      score += nextFrame.frame[0]
    } else if (currentFrame.isStrike) {
      score += getNextTwoBowlsValue(evaluatedFrames, i)
    }
  }
  //handle last frame
  const lastFrame = evaluatedFrames[evaluatedFrames.length - 1]
  score += handleLastFrame(lastFrame)

  return score
}

console.log(scoreBowling(frames))
