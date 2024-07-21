import listeners from './data/listeners.js'
import artists from './data/artists.js'
import releases from './data/releases.js'

function displayListeners() {
  return listeners
}

export function getListenerNames() {
  return listeners.map((listener) => listener.name)
}

export function getListenerGenres() {
  return listeners.map((listener) => listener.genres)
}

export function getArtistsNames() {
  return artists.map((artist) => artist.name)
}

export function getArtistsByGenre(genre) {
  return artists
    .filter((artist) => artist.genre === genre)
    .map((artist) => artist.name)
}

export function getReleaseIDs(genreArr) {
  return artists
    .filter((artist) => genreArr.includes(artist.genre))
    .flatMap((artist) => artist.releaseIds)
}

export function getArtistReleases(artistName) {
  let releaseIDs = artists
    .filter((x) => x.name === artistName)
    .flatMap((x) => x.releaseIds)

  return releases
    .filter((release) => releaseIDs.includes(release.id))
    .map((release) => release.name)
}

console.log(getArtistsByGenre('trance'))

export default { displayListeners }
