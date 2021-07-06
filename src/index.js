import "./style.css";
import { GameBoard } from "./GameBoard";
import { DisplayController } from "./DisplayController";
import { Ship } from "./Ship";

const display = DisplayController()
const game = GameBoard()
const game2 = GameBoard()
game.placeShip(1, 2, 3);
game.placeShip(4, 5, 6);
game.placeShip(52, 53, 65);

game2.placeShip(1, 2, 3);

display.buildBoard(game, 'battleGrid')
display.buildBoard(game2, 'player2Grid')
game.receiveAttack(1)
game.receiveAttack(2)
game.receiveAttack(52)
display.updateBoard(game)
display.updateBoard(game2)
