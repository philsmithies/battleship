const Ship = require('./Ship')

const GameBoard = () => {
  let board = []
  let i = 0
  while(i < 100){
    board[i] = 'O'
    i +=1
  }

  const placeShip = (counterX = 0, counterY = 0, shipLength) => {
    let newShip = Ship(shipLength)
    let x = counterX
    let y = counterY
    for (let i = 0; i < newShip.length; i++){
      board[x] = newShip.body[i]
      x += 1
    }
  }

  const receiveAttack = (moveX) => {
    if (board[moveX] != ''){
      board[moveX] = 'HIT'
      console.log('HIT A SHIP')
    }
  }

  return {
    receiveAttack,
    placeShip, 
    get board() {return board}
  }
}

module.exports = GameBoard