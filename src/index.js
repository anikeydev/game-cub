const $start = document.querySelector('#start')
const $game = document.querySelector('#game')

$start.addEventListener('click', start)

function start() {
  $start.classList.add('hide')
  $game.style.backgroundColor = '#fff'
}
