import { describe, it, expect, vi } from 'vitest'

import { secretNumber, password, allowedIn, members } from './index.js'

describe('secretNumber', () => {
  it('should be assigned a value.', () => {
    expect(secretNumber).not.toBeUndefined()
  })

  it('should be a number', () => {
    expect(typeof secretNumber).toBe('number')
  })

  it('should be exactly 7', () => {
    expect(secretNumber).toBe(7)
  })
})

describe('password', () => {
  it('should be assigned a value', () => {
    expect(password).not.toBeUndefined()
  })

  it('should be a string', () => {
    expect(typeof password).toBe('string')
  })

  it("should be 'just open the door'", () => {
    expect(password).toBe('just open the door')
  })
})

describe('allowedIn', () => {
  it('should be assigned a value', () => {
    expect(allowedIn).not.toBeUndefined()
  })

  it('should be a boolean', () => {
    expect(typeof allowedIn).toBe('boolean')
  })

  it('should be `true`', () => {
    expect(allowedIn).toBe(true)
  })
})

describe('members', () => {
  it('should be assigned a value', () => {
    expect(members).not.toBeUndefined()
  })

  it('should be an array', () => {
    expect(members).toBeInstanceOf(Array)
  })

  it("should start with the value 'Tui'", () => {
    expect(members[0]).toBe('Tui')
  })

  it("should include 'Tane' at the 4th spot (i.e. members[3])", () => {
    expect(members[3]).toBe('Tane')
  })
})
