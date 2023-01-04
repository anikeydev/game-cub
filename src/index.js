const $start = document.querySelector('#start')
const $game = document.querySelector('#game')

$start.addEventListener('click', start)
$game.addEventListener('click', handlerBoxClick)

function start() {
  $start.classList.add('hide')
  $game.style.backgroundColor = '#fff'

  renderBox()
}

function handlerBoxClick(event) {
  if (event.target.dataset.box) {
    renderBox('60px')
  }
}

function renderBox(s = '50px') {
  const box = document.createElement('div')

  box.style.height = box.style.width = s
  box.style.position = 'absolute'
  box.style.backgroundColor = '#000'
  box.style.top = '50px'
  box.style.left = '70px'
  box.style.cursor = 'pointer'
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box)
}
