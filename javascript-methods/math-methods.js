// Math.floor()

// This method returns a value that has been rounded down to the nearest integer (i.e. round down a decimal point to a whole number). 
// Example: Math.floor(2.75) should return 2

// In this example we have two variables that are passed to a function that will round down to the nearest integer. 
// Imagine a scenario where Tane bakes 100 cookies for his 17 work mates. He wants to figure out how many cookies each person can have. 
// (Because 17 people are not going to have 5.882352941176471 cookies each. Nobody wants to fight over crumbs, that's just time that could be spent eating cookies!)
// Example: getRatioPerGuest(17, 100) should return 5
const guestTotal = 17
const cookies = 100

function getRatioPerGuest(guestTotal, cookies) {
  return Math.floor(cookies / guestTotal)
}


// Math.random

// This method returns a random number from 0 and up to (but not including) 1.
// Example: Math.random() returns 0.31844073752967494
// You can move the decimal place for this and make the minimum and maximum numbers anything you want.
// Example: Math.random() * 10 should return 5.44342974004711, and Math.random() * 100 should return 72.4784498770139
// Example: randomNumeral should return a random number from 0 and up to 1

let randomNumeral = Math.random();


// Combine the powers of .floor and .random

// Combine these two to produce a random whole number. Randomisation is used in a lot of sites/apps e.g. games, animation, playlists, art, password generators.   
// In this example, we have a playlist of 50 songs and want to write a function that shuffles the order in which they are played i.e. 3, 46, 22, 18. 
// Example: shufflePlaylist(playlist) should choose a random whole number between 0 and 4 and then return the song linked to that number in the playlist array. 
const playlist = ['Easy on me', 'Hold on', 'My little love', 'Woman like me', 'Love is a game']

function shufflePlaylist(playlist) {
  const idx = Math.floor(Math.random() * 5)
  return playlist[idx]
}


// ------------ Calling the functions -----------

const getRatioPerGuestResults = getRatioPerGuest(guestTotal, cookies)
console.log('getRatioPerGuestResults: ', getRatioPerGuestResults)

console.log('randomNumeral: ', randomNumeral)

const shufflePlaylistResults = shufflePlaylist(playlist)
console.log('shufflePlaylistResults: ', shufflePlaylistResults)
