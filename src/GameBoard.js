const Ship = require('./Ship')

const GameBoard = () => {
  let board = []

  for (let i = 0; i < 100; i++){
    board[i] = 'O'
  }

  const placeShip = (x, y, shipLength) => {
    const newShip = Ship(shipLength)
    for (let i = 0; i < newShip.length; i++){
      board[i] = newShip.body[i]
    }
  }

  const receiveAttack = (moveX, moveY) => {

  }

  return {
    receiveAttack,
    placeShip, 
    get board() {return board}
  }
}

module.exports = GameBoard