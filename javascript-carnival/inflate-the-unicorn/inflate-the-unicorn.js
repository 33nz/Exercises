// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate the Unicorn')

let unicornElements = document.getElementsByClassName('inflate-an-image')

let imageFiles = [
  './images/unicorn-0.png',
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
]

let imageIndex = 0

for (let i = 0; i < unicornElements.length; i++) {
  let unicorn = unicornElements[i]

  unicorn.addEventListener('click', function () {
    unicorn.src = imageFiles[imageIndex]
    imageIndex = (imageIndex + 1) % imageFiles.length
  })
}
