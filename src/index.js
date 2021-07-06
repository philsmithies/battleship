import "./style.css";
import { GameBoard } from "./GameBoard";
import { DisplayController } from "./DisplayController";
import { Ship } from "./Ship";

// function component() {
//   const game = GameBoard();
//   const display = DisplayController()
//   display.buildBoard()
//   // game.placeShip("C1", "C2", "C3");
//   // game.receiveAttack("C1");
//   // game.receiveAttack("D1");

//   return element;
// }

const display = DisplayController()
const game = GameBoard()
game.placeShip('1', '2', '3');
game.placeShip('4', '5', '6');
game.placeShip('52', '53', '65');
const gameboardBattleships = game.getShips();
// 'A2', 'A3', 'A4'
// const ship = game.ships[0].getShipCoordinates()
// console.log(ship)
// game.placeShip(Ship([10, 11, 12]));
display.buildBoard(game)
game.receiveAttack('1')
game.receiveAttack('2')
// display.updateBoard(game)

game.receiveAttack('52')
display.updateBoard(game)
