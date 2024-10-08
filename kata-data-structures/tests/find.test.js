import { test, expect } from 'vitest'
import getContacts from './getContacts'
import find from '../find'

test('find finds the first matching object in the array', function () {
  // Arrange
  const contacts = getContacts()
  const expected = {
    id: '125',
    address: 'Wayne Manor',
    name: 'Bruce Wayne',
    age: 43,
  }

  // Act
  const actual = find(contacts, { address: 'Wayne Manor' })

  // Assert
  expect(actual).toEqual(expected)
})
