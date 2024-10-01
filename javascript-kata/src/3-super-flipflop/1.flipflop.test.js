import { describe, it, expect } from 'vitest'
import { flipflop } from './flipflop.js'

describe('flipflop', () => {
  it("should return 'FlipFlop' when passed a number divisible by 3 and by 5", () => {
    expect(flipflop(15)).toBe('FlipFlop')
    expect(flipflop(105)).toBe('FlipFlop')
  })

  it("should return 'Flip' when passed a number divisible by 3", () => {
    expect(flipflop(6)).toBe('Flip')
    expect(flipflop(42)).toBe('Flip')
  })

  it("should return 'Flop' when passed a number divisible by 5", () => {
    expect(flipflop(5)).toBe('Flop')
    expect(flipflop(40)).toBe('Flop')
  })

  it('should return the number you pass it if not divisible by 3 or 5', () => {
    expect(flipflop(7)).toBe(7)
    expect(flipflop(17)).toBe(17)
  })
})
