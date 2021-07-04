import './style.css'
const GameBoard = require ('./GameBoard')
const newGame = GameBoard()

function component() {
  const element = document.createElement('div');
  console.log(newGame.board)
  console.log(newGame.placeShip(0, 0, 3))
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());