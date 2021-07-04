const Gb = require('../src/Gameboard')
const GameBoard = Gb()

describe('game board init', () => {
  test('it can return a board', () => {
    expect(GameBoard.board).toEqual(
      ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'])
  })
  test('it can place a ship on the board', () =>{
    GameBoard.placeShip(0, 2, 3)
    expect(GameBoard.board).toEqual(
      ['S', 'S', 'S', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 
       'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'])
  })
  test('it can receive an attack', () => {
    GameBoard.placeShip(0, 2, 3)
    GameBoard.receiveAttack(0)
    expect(GameBoard.board[0]).toEqual('HIT')
  })
})