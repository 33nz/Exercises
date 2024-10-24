/* eslint-disable no-unused-vars */
export default function getPropTypes(obj) {
  const types = []

  for (let key in obj) {
    types.push(typeof obj[key])
  }

  return types
}
