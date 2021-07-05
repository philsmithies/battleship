import "./style.css";
import { GameBoard } from "./GameBoard";
import { DisplayController } from "./DisplayController";

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
game.placeShip(1, 2, 3);
game.placeShip(10, 11, 12);
display.buildBoard(game)
display.updateBoard(game)
