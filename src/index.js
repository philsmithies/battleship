import './style.css'
const GameBoard = require ('./GameBoard')
const newGame = GameBoard()

function component() {
  const element = document.createElement('div');
  newGame.board
  newGame.placeShip(0, 0, 3)
  newGame.receiveAttack(1)
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());