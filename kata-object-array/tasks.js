import listeners from './data/listeners.js'

function displayListeners() {
  return listeners
}

export function getListenerNames() {
  return listeners.map((listener) => listener.name)
}

export default { displayListeners }
