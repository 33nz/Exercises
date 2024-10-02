// Object.keys() 
// Recap: objects have properties, which are key and value pairs. In the example below, key is title, and value is 'Frog and Toad'. 
// The Object.keys() method returns an array listing the object's keys in order.  
// Example: getBookKeys(bookData) should return ['title','author','isbn','binding']

const bookData = {
  title: 'Frog and Toad',
  author: 'Arnold Lobel',
  isbn: 9780008136222,
  binding: 'Hardback'
}

function getBookKeys (obj) {
    return Object.keys(obj)
}


// Object.entries()
// This method returns an array listing the object's key and value pairs.
// Example: getFilmInfo(filmData) should return [['title', 'Jurassic Park'], ['director', 'Steven Spielberg'], ['yearReleased', 1993], ['genre', 'Dinosaurs']] 

const filmData = {
  title: 'Jurassic Park',
  director: 'Steven Spielberg',
  yearReleased: 1993,
  genre: 'Dinosaurs'
};

function getFilmInfo (obj) {
    return Object.entries(obj);
}


// ------------ Calling the functions -----------

const getBookKeysResults = getBookKeys(bookData)
console.log('getBookKeysResults: ', getBookKeysResults)

const getFilmInfoResults = getFilmInfo(filmData)
console.log('getFilmInfoResults: ', getFilmInfoResults)
