function Rem () {
  var html = document.documentElement,
    fs = html.clientWidth / 7.5
  if (fs > 100) {
    fs = 100
  }
  html.style.fontSize = fs + 'px'
}
window.addEventListener('resize', Rem, false)
Rem()