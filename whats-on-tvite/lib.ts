// Import the schedule file.
import schedule from './schedule.ts'

// Import the show type from the models file.
import { Show } from './models/show'

// Complete the getTime function.
export function getTime(show: Show): string {
  return show.time
}

// Complete the getName function.
export function getName(show: Show): string {
  return show.name
}

// Complete the getShowTimes function, returning an array of show times.
export function getShowTimes(): string[] {
  const showTimes = []

  for (let i = 0; i < schedule.length; i++) {
    const show = schedule[i]
    showTimes.push(show.time)
  }
  return showTimes
}
// simpler way is to map i.e. return schedule.map((show) => show.time)

// Complete the getShowNames function, returning an array of show names.
export function getShowNames(): string[] {
  return schedule.map((show) => show.name)
}

// Complete the getShowByTimeslot function, returning a show based on the timeslot or undefined if not found.
export function getShowByTimeslot(timeslot: string) {
  const placeholderShow = {
    time: 'Placeholder time',
    name: 'Placeholder show',
    description: 'Placeholder description',
  }
  return placeholderShow
}

// =========
// Stretch!
// =========

// Complete the getNextShowByTimeslot function, returning a show based on the timeslot or undefined if not found.
export function getNextShowByTimeslot(timeslot: string) {
  return 'Placeholder next show'
}
