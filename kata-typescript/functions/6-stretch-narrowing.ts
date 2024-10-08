// DOCS - https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// getOpposite should return the opposite of the item passed in
// if the item is a string, return the reversed string
// if the item is a number, return the negative number
// if the item is a boolean, return the opposite boolean
export function getOpposite(
  item: string | number | boolean,
): string | number | boolean {
  if (typeof item == 'string') {
    return item.split('').reverse().join('')
  } else if (typeof item == 'number') {
    return item * -1
  } else {
    return !item
  }
}

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

interface Musician {
  instrument: string
  style: string
  play: () => void
}

interface Dancer {
  style: string
  dance: () => void
}

interface Improviser {
  funny: boolean
  act: () => string
}

// nextAct will be passed a performer and should call the appropriate method
// if the performer is a Musician, call play
// if the performer is a Dancer, call dance
// if the performer is an Improviser, call act
export function nextAct(
  performer: Musician | Dancer | Improviser,
): void | string {
  if ('play' in performer) {
    performer.play()
  } else if ('dance' in performer) {
    performer.dance()
  } else if ('act' in performer) {
    performer.act()
  }
}

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

interface Paper {
  density: string
  compost: () => void
}

interface Glass {
  colour: string
  melt: () => void
}

interface Metal {
  type: string
  magnetize: () => void
}

type Recycling = Paper | Glass | Metal
export type Trash = Recycling | 'rubbish'

// isMetal, isPaper, isGlass, isRecycling, and sortRecycling are all type guards
// and should use the type predicate (in linked docs).
// They are functions that return a boolean value based on the type of the item passed in.

// isMetal will be passed an item of Recycling
// it should return true if the item is Metal
export function isMetal(item: Recycling): boolean {
  return (item as Metal).magnetize !== undefined
}

// isPaper will be passed an item of Recycling
// it should return true if the item is Paper
export function isPaper(item: Recycling): boolean {
  return (item as Paper).density !== undefined
}

// isGlass will be passed an item of Recycling
// it should return true if the item is Glass
export function isGlass(item: Recycling): boolean {
  return (item as Glass).melt !== undefined
}

// isRecycling will be passed an item of Trash
// it should return false if the item is rubbish and true if it is Recycling
export function isRecycling(item: Trash): boolean {
  return (
    (item as Paper).density !== undefined ||
    (item as Metal).magnetize !== undefined ||
    (item as Glass).melt !== undefined
  )
}

// sortRecycling will be passed an array of Trash items
// and should return an array of Recycling items only
export function sortRecycling(arr: Trash[]): Recycling[] {
  return arr.filter((x) => x !== 'rubbish')
}
