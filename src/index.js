const $start = document.querySelector('#start')
const $game = document.querySelector('#game')

$start.addEventListener('click', start)

function start() {
  $start.classList.add('hide')
  $game.style.backgroundColor = '#fff'

  renderBox()
}

function renderBox() {
  const box = document.createElement('div')

  box.style.height = box.style.width = '50px'
  box.style.position = 'absolute'
  box.style.backgroundColor = '#000'
  box.style.top = '50px'
  box.style.left = '70px'
  box.style.cursor = 'pointer'

  $game.insertAdjacentElement('afterbegin', box)
}
