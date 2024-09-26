import { describe, it, expect } from 'vitest'

import { superFlipFlop } from './super-flipflop.js'

describe('superFlipFlop', () => {
  it('should return an empty array when passed an empty array', () => {
    expect(superFlipFlop([])).toStrictEqual([])
  })

  it('should return an array of [1, 2] as is', () => {
    expect(superFlipFlop([1, 2])).toStrictEqual([1, 2])
  })

  it("should convert numbers divisble by 3 to 'Flip'", () => {
    expect(superFlipFlop([3, 7])).toStrictEqual(['Flip', 7])
  })
  it("should convert numbers divisible by 5 to 'Flop'", () => {
    expect(superFlipFlop([1, 5])).toStrictEqual([1, 'Flop'])
  })

  it("should convert numbers divisible by 3 and by 5 to 'FlipFlop'", () => {
    expect(superFlipFlop([30])).toStrictEqual(['FlipFlop'])
  })
})
