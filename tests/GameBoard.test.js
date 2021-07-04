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
    GameBoard.placeShip(1, 3, 3)
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
})