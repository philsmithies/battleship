import './style.css'
import { GameBoard } from './GameBoard';

function component() {
  const element = document.createElement('div');
  const game = GameBoard();
  game.placeShip('C1', 'C2', 'C3')
  game.receiveAttack('C1')
  game.receiveAttack('d1')

  element.innerHTML = _.join(['Tiny', 'BattleShip'], ' ');

  return element;
}

document.body.appendChild(component());