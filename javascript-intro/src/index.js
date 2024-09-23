window.onerror = (event, source, lineno, colno, err) => {
  // must be within function call because that's when the element is defined for sure.
  const ErrorOverlay = customElements.get('vite-error-overlay')
  // don't open outside vite environment
  if (!ErrorOverlay) {
    return
  }
  const overlay = new ErrorOverlay(err)
  document.body.appendChild(overlay)
}

window.onunhandledrejection = function (errorEvent) {
  const ErrorOverlay = customElements.get('vite-error-overlay')
  // don't open outside vite environment
  if (!ErrorOverlay) {
    return
  }
  const error = errorEvent.reason
  if (!error) return

  const overlay = new ErrorOverlay(errorEvent.reason)
  document.body.appendChild(overlay)
}
;(async function () {
  try {
    const { buildResults } = await import('./startup.js')
    const el = document.getElementById('results')
    el.innerHTML = buildResults()
  } catch (e) {
    throw e
  }
})()
