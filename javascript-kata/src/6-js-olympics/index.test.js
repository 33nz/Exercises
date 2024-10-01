import { describe, it, expect, vi } from 'vitest'

import { athleteArray, unjumble, removeOdds, newAthlete } from './index.js'

let log = vi.spyOn(console, 'log').mockImplementation(() => {})
describe.skip('The JS Olympics (stretch)', () => {
  describe('The Warmup', () => {
    it('athleteArray should contain several athletes', () => {
      expect(athleteArray.length).toBeGreaterThan(1)
    })

    it('items in the athleteArray should be objects', () => {
      expect(athleteArray.length).toBeGreaterThan(1)
      for (const athlete of athleteArray) {
        expect(typeof athlete).toBe('object')
        expect(Array.isArray(athlete)).toBe(false)
      }
    })

    it('each item in the athleteArray should have: name, age, sport and quote ', () => {
      expect(athleteArray.length).toBeGreaterThan(1)
      for (const athlete of athleteArray) {
        expect(athlete).toHaveProperty('name')
        expect(athlete).toHaveProperty('age')
        expect(athlete).toHaveProperty('sport')
        expect(athlete).toHaveProperty('quote')
      }
    })
  })

  describe('The bulk up', () => {
    it('each athlete should have a `win` function', () => {
      expect(athleteArray.length).toBeGreaterThan(1)
      for (const athlete of athleteArray) {
        expect(athlete).toHaveProperty('win')
        expect(typeof athlete.win).toBe('function')
      }
    })

    it("each athlete's win function should log to console", () => {
      expect(athleteArray.length).toBeGreaterThan(1)
      for (const athlete of athleteArray) {
        athlete.win()
        expect(log).toBeCalledTimes(1)
        log.mockReset()
      }
    })

    it("each athlete's win function should log to console with correct values", () => {
      expect(athleteArray.length).toBeGreaterThan(1)
      for (const athlete of athleteArray) {
        athlete.win()
        expect(log).toBeCalledWith(
          `${athlete.name} won the ${athlete.sport} event!`
        )
        log.mockReset()
      }
    })
  })

  describe('unjumble', () => {
    it('should be a function', () => {
      expect(typeof unjumble).toBe('function')
    })

    it('should return a string', () => {
      expect(typeof unjumble('')).toBe('string')
    })

    it('should reverse the string that you pass to it', () => {
      expect(unjumble('abcdefg')).toBe('gfedcba')
    })
  })

  describe('oddsOut', () => {
    it('should be a function', () => {
      expect(typeof removeOdds).toBe('function')
    })

    it('should return an array', () => {
      expect(Array.isArray(removeOdds([]))).toBe(true)
    })

    it('should remove every other item', () => {
      expect(removeOdds([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([2, 4, 6, 8])
    })
  })

  describe('newAthlete', () => {
    it('should be a function', () => {
      expect(typeof newAthlete).toBe('function')
    })

    it('should return an object', () => {
      expect(typeof newAthlete()).toBe('object')
    })

    it('should return an athlete', () => {
      let a = newAthlete('Batman', 32, 'Fighting Crime', "I'm Batman")
      expect(a).toHaveProperty('name', 'Batman')
      expect(a).toHaveProperty('age', 32)
      expect(a).toHaveProperty('sport', 'Fighting Crime')
      expect(a).toHaveProperty('quote', "I'm Batman")
    })

    it('should return an athlete with a win method', () => {
      let a = newAthlete('Batman', 32, 'Fighting Crime', "I'm Batman")

      a.win()
      expect(log).toBeCalledWith(`Batman won the Fighting Crime event!`)
    })
  })
})
