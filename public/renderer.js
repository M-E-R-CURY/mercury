const urlInput = document.getElementById('url')
const goBtn = document.getElementById('go')
const webview = document.getElementById('webview')

goBtn.addEventListener('click', () => {
  let url = urlInput.value.trim()
  if (!url.startsWith('http')) {
    url = 'http://' + url
  }
  webview.src = url
})

urlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    goBtn.click()
  }
})

// Update address bar when webview loads a new page
webview.addEventListener('did-navigate', (e) => {
  urlInput.value = e.url
})
