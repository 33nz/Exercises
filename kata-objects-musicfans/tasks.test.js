import { describe, expect, test } from 'vitest'
import {
  getListenerNames,
  getListenerGenres,
  getArtistsNames,
  getArtistsByGenre,
  getReleaseIDs,
  getArtistReleases,
  getArtistRecommendations,
  getReleaseRecommendations,
  getAllRecommendations,
} from './tasks'

describe('listeners tests', () => {
  test('name test', () => {
    //arrange
    let expected = ['Debra', 'Jono', 'Stina']
    //act(tual)
    let actual = getListenerNames()
    //assert
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
    //arrange
    let expected = [
      'Queen',
      'Thievery Corporation',
      'The Roots',
      'Baauer',
      'Iron & Wine',
      'Armin van Buuren',
      'The Beatles',
    ]
    //act
    let actual = getArtistsNames()
    //assert
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

  test('get jonos release recommendations', () => {
    let expected = [
      'Phrenology',
      'The Tipping Point',
      'Harlem Shake',
      'Dum Dum',
    ]
    let actual = getReleaseRecommendations('Jono')
    expect(actual).toStrictEqual(expected)
  })

  test('get all recommendations', () => {
    let jonoReleaseRecommendations = [
      'Phrenology',
      'The Tipping Point',
      'Harlem Shake',
      'Dum Dum',
    ]
    let debraArtistsRecommendations = [
      'Queen',
      'Thievery Corporation',
      'The Beatles',
    ]
    let stinaArtistsRecommendations = ['Iron & Wine', 'Armin van Buuren']

    let actual = getAllRecommendations()
    expect(actual['Stina'].artists).toStrictEqual(stinaArtistsRecommendations)
    expect(actual['Debra'].artists).toStrictEqual(debraArtistsRecommendations)
    expect(actual['Jono'].releases).toStrictEqual(jonoReleaseRecommendations)
  })
})
