// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicornElements = document.getElementsByClassName('inflate-an-image')

let imageIndex = 0

let imageFiles = [
  './images/unicorn-0.png',
  './images/unicorn-1.png',
  './images/unicorn-2.png',
  './images/unicorn-3.png',
]

for (let i = 0; i < unicornElements.length; i++) {
  let unicorn = unicornElements[i]

  unicorn.addEventListener('click', function () {
    console.log('Clicked Unicorn: ', unicorn)
    unicorn.src = imageFiles[imageIndex]

    imageIndex = (imageIndex + 1) % imageFiles.length
  })
}

// The imageIndex will go through the following values on successive clicks:
// If imageIndex = 0: (0 + 1) % 4 = 1.
// If imageIndex = 1: (1 + 1) % 4 = 2.
// If imageIndex = 2: (2 + 1) % 4 = 3.
// If imageIndex = 3: (3 + 1) % 4 = 0 (wraps back to 0).
// This is how the "wrap around" works, letting the image index reset to 0 once it reaches the end of the array.
