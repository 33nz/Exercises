import { describe, expect, test } from 'vitest'
import { getListenerNames } from './tasks'

describe('listeners tests', () => {
  test('name test', () => {
    let expected = ['Debra', 'Jono', 'Stina']
    let actual = getListenerNames()
    expect(actual).toStrictEqual(expected)
  })
})
