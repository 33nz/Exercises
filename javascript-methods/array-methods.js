//  .push()
// When working with arrays we want to be able to add a new item into the array.
// The `.push()` method is a function that has been built for us to use when we want to add an item to an array.
// It returns a new array with all the elements in the array previously, plus the new addition.

// In this example we have an array of artworks and we want to write a function that we can call when we have a new artwork to add. 

// Example: addArtwork([{name: 'Floral', value: '$179.99'}], {name: 'Landscape View', value: '$229.99'})
// should return [{name: 'Floral', value: '$179.99'}, {name: 'Landscape View', value: '$229.99'}]

const artworkList = [{ name: 'Floral', value: '$179.99' }]
const newArtwork = {
  name: 'Landscape View',
  value: '$229.99'
}

function addArtwork(artworkList, newArtwork) {
  artworkList.push(newArtwork)
  return artworkList
}

//  .pop()
// When working with arrays we want to be able to remove the last item from the array.
// The `.pop()` method is a function that has been built for us to use when we want to remove the last item from the array.
// It returns a new array with all the elements in the array previously, but now without the last element. 

// In this example we have an array of artworks and we want to write a function that we can call when we remove the lastest listing from our list of artworks.

// Example: removeLastListing([{name: 'Floral', value: '$179.99'}, {name: 'Landscape View', value: '$229.99'}])
// should return [{name: 'Floral', value: '$179.99'}]

const listings = [{ name: 'Floral', value: '$179.99' }, { name: 'Landscape View', value: '$229.99' }]

function removeLastListing(listings) {
  listings.pop()
  return listings
}

// ------------ Calling the functions -----------

const artworkResults = addArtwork(artworkList, newArtwork)
console.log('artworkResults: ', artworkResults)


const removeLastListingResults = removeLastListing(listings)
console.log('removeLastListingResults: ', removeLastListingResults)
