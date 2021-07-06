import "./style.css";
import { GameBoard } from "./GameBoard";
import { DisplayController } from "./DisplayController";
import { Ship } from "./Ship";

const display = DisplayController()
const game = GameBoard()
game.placeShip(1, 2, 3);
game.placeShip(4, 5, 6);
game.placeShip(52, 53, 65);

display.buildBoard(game)
game.receiveAttack(1)
game.receiveAttack(2)
game.receiveAttack(52)
display.updateBoard(game)
