import { describe, expect, test } from 'vitest'
import {
  getListenerNames,
  getListenerGenres,
  getArtistsNames,
  getArtistsByGenre,
  getReleaseIDs,
  getArtistReleases,
} from './tasks'

describe('listeners tests', () => {
  test('name test', () => {
    let expected = ['Debra', 'Jono', 'Stina']
    let actual = getListenerNames()
    expect(actual).toStrictEqual(expected)
  })

  test('genres test', () => {
    let expected = [
      ['pop', 'chill'],
      ['rap', 'trap'],
      ['folk', 'trance'],
    ]
    let actual = getListenerGenres()
    expect(actual).toStrictEqual(expected)
  })
})

describe('artists and releases tests', () => {
  test('artists name test', () => {
    let expected = [
      'Queen',
      'Thievery Corporation',
      'The Roots',
      'Baauer',
      'Iron & Wine',
      'Armin van Buuren',
      'The Beatles',
    ]
    let actual = getArtistsNames()
    expect(actual).toStrictEqual(expected)
  })
  test('artists by genre test', () => {
    let expected = ['Queen', 'The Beatles']
    let actual = getArtistsByGenre('pop')
    expect(actual).toStrictEqual(expected)
  })
  test('rap & trap artist release IDs', () => {
    let expected = [6, 7, 8, 9]
    let actual = getReleaseIDs(['rap', 'trap'])
    expect(actual).toStrictEqual(expected)
  })
  test('queen releases test', () => {
    let expected = ['Flash Gordon', 'A Kind of Magic', 'Innuendo']
    let actual = getArtistReleases('Queen')
    expect(actual).toStrictEqual(expected)
  })
})

describe('combined data sets tests', () => {
  test('artists of debras genres', () => {
    let expected = ['Queen', 'Thievery Corporation', 'The Beatles']
    let actual = getArtistRecommendations('Debra')
    expect(actual).toStrictEqual(expected)
  })
})
