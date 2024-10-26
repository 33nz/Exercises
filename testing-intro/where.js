/* eslint-disable no-unused-vars */
export default function where(arr, searchDetails) {
  return arr.filter((contact) => {
    return Object.keys(searchDetails).every(
      (key) => contact[key] === searchDetails[key],
    )
  })
}
