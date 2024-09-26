import { describe, it, expect, vi } from 'vitest'

import { concatMyArray } from './concatMyArray.js'
import { capitalize } from './capitalize.js'
import { whereAreYou } from './whereAreYou.js'
import { deBee } from './deBee.js'

describe('concatMyArray', () => {
  it('returns a string', () => {
    expect(typeof concatMyArray(['hi'])).toBe('string')
  })

  it('returns a string where all the strings in the given array are joined together', () => {
    expect(concatMyArray(['zoom', 'zoom', '!'])).toBe('zoomzoom!')
  })

  it('returns a string that matches the string given, but now joined together', () => {
    expect(
      concatMyArray(['super', 'cali', 'fragi', 'listic', 'expiali', 'docious'])
    ).toBe('supercalifragilisticexpialidocious')
  })
})

describe('capitalize', () => {
  it('returns a string', () => {
    expect(typeof capitalize('hello')).toBe('string')
  })

  it('should map over an array of words from the given string and then return a string where each of the words starts with a capital letter.', () => {
    expect(capitalize('check check')).toBe('Check Check')
  })

  it('returns a string that matches the one it is given (but is now capitalized).', () => {
    expect(capitalize('i can type many sentences')).toBe(
      'I Can Type Many Sentences'
    )
  })
})

describe('whereAreYou', () => {
  it('returns the first object where the value of hiding is "Scooby".', () => {
    expect(
      whereAreYou([
        { doorNumber: 1, hiding: 'Shaggy' },
        { doorNumber: 2, hiding: 'Scooby' },
        { doorNumber: 3, hiding: 'The Monster!' },
      ])
    ).toStrictEqual({ doorNumber: 2, hiding: 'Scooby' })

    expect(
      whereAreYou([
        { doorNumber: 1, hiding: 'Daphne' },
        { doorNumber: 2, hiding: 'Shaggy' },
        { doorNumber: 3, hiding: 'Velma' },
        { doorNumber: 4, hiding: 'Fred' },
        { doorNumber: 5, hiding: 'Scooby' },
      ])
    ).toStrictEqual({ doorNumber: 5, hiding: 'Scooby' })

    expect(
      whereAreYou([
        { doorNumber: 4, hiding: 'Scooby' },
        { doorNumber: 1, hiding: 'Scooby' },
        { doorNumber: 3, hiding: 'Scooby' },
        { doorNumber: 2, hiding: 'Scooby' },
      ])
    ).toStrictEqual({ doorNumber: 4, hiding: 'Scooby' })
  })
})

describe('deBee', () => {
  it('returns a string', () => {
    expect(typeof deBee('bizz buzz')).toBe('string')
  })

  it('returns a string where the word buzz has been removed.', () => {
    expect(
      deBee("Help! buzz I'm buzz buzz surrounded buzz by buzz buzz bees!!")
    ).toBe("Help! I'm surrounded by bees!!")
  })

  it('returns a string where the word buzz has been removed, regardless of capitalization.', () => {
    expect(deBee('Buzz BUzz BuZZ help BUZZ buzz')).toBe('help')
  })
})
