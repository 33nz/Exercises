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
    .filter((artist) => artist.name === artistName)
    .flatMap((artist) => artist.releaseIds)

  return releases
    .filter((release) => releaseIDs.includes(release.id))
    .map((release) => release.name)
}

function getSingleListenerGenres(listenerName) {
  return listeners
    .filter((listener) => listener.name === listenerName)
    .flatMap((listener) => listener.genres)
}

export function getArtistRecommendations(listenerName) {
  let listenerGenres = getSingleListenerGenres(listenerName)

  return artists
    .filter((artist) => listenerGenres.includes(artist.genre))
    .map((artist) => artist.name)
}

export function getReleaseRecommendations(listenerName) {
  let listenerGenres = getSingleListenerGenres(listenerName)

  let artistsByGenre = listenerGenres.flatMap((genre) =>
    getArtistsByGenre(genre),
  )

  let releases = artistsByGenre.flatMap((artist) => getArtistReleases(artist))

  return Array.from(new Set(releases))
}

export function getAllRecommendations() {
  let listenerNames = getListenerNames()

  let result = {}

  listenerNames.forEach((x) => {
    result[x] = {}
    result[x]['artists'] = getArtistRecommendations(x)
    result[x]['releases'] = getReleaseRecommendations(x)
  })
  return result
}

console.log(getArtistsByGenre('trance'))

export default { displayListeners }
