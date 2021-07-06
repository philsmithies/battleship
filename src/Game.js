import { GameBoard } from "./GameBoard";
import { DisplayController } from "./DisplayController";
import { Ship } from "./Ship";
import { Player } from "./Player";

const Game = () => {
  const twoPlayerGame = () =>{
    const p1 = Player(true);
    const p2 = Player(false);
    const p1GameBoard = GameBoard();
    const p2GameBoard = GameBoard();
    p1GameBoard.placeShip(1, 2, 3);
    p1GameBoard.placeShip(4, 5, 6);
    p1GameBoard.placeShip(52, 53, 65);
    p2GameBoard.placeShip(6, 7, 8);
    p2GameBoard.placeShip(1, 2, 3);
    const display = DisplayController(p2GameBoard, 'player1', p1)
    const display2 = DisplayController(p1GameBoard, 'player2', p2)
    display.buildBoard(p1GameBoard, 'battleGrid')
    display2.buildBoard(p2GameBoard, 'player2Grid')
    // document.getElementById('turn').innerText = p1.isMyTurn ? "Player 1's Turn" : "Computers Turn"
    // player1Game(p1, p2, p2GameBoard)
  }
  return {
    twoPlayerGame
  };
}


// const player1Game = (PlayerOne, PlayerTwo, PlayerOneGameboard)  => {
//   const p1 = player1
//   const p2 = player2
// }

export { Game };
