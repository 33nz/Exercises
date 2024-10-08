import { test, expect } from 'vitest'
import { getMatrix, updateMatrix } from '../matrix'

test('matrix.getMatrix creates 3x3 matrix', function () {
  // Arrange
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]

  // Act
  const actual = getMatrix(3)

  // Assert
  expect(actual).toEqual(expected)
})

test('matrix.getMatrix creates 4x4 matrix', function () {
  // Arrange
  const expected = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]

  // Act
  const actual = getMatrix(4)

  // Assert
  expect(actual).toEqual(expected)
})

test('matrix.updateMatrix can change the value at specified coordinates', function () {
  // Arrange
  const initialMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
  const expected = [
    [0, 0, 0],
    [0, 0, 1],
    [0, 0, 0],
  ]

  // Act
  const actual = updateMatrix(initialMatrix, [1, 2], 1)

  // Assert
  expect(actual).toEqual(expected)
})
