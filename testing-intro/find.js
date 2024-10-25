/* eslint-disable no-unused-vars */
export default function find(arr, searchDetails) {
  return arr.find((contact) =>
    Object.keys(searchDetails).every(
      (key) => contact[key] === searchDetails[key],
    ),
  )
}
