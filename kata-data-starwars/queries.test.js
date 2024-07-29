import { getVehicleNames } from './queries.js'
import { describe, it, expect } from 'vitest'

describe('getVehicleNames', () => {
  it('should return an array of vehicle names (strings)', () => {
    // Arrange
    const pilot = {
      name: 'Pilot Name',
      vehicles: [
        { name: 'vehicle 1' },
        { name: 'vehicle 2' },
        { name: 'vehicle 3' },
      ]
    }
    const expectedOutput = ['vehicle 1', 'vehicle 2', 'vehicle 3']

    // Act
    const actualOutput = getVehicleNames(pilot)

    // Assert
    expect(actualOutput).toEqual(expectedOutput)
  })
})