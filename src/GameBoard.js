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
      board[x] = newShip
      x += 1
    }
    console.log(board)
  }

  const receiveAttack = (moveX) => {
    if (board[moveX] != 'O'){
      board[0].hit(0)
      console.log(board[0].body)
      board[moveX] = 'HIT'
      // console.log(board[moveX])
      // console.log('HIT A SHIP')
    } else {
      board[moveX] = 'NEGATIVE'
      console.log('MISSED')
    }
  }

  const resetBoard = () => {
    i = 0
    while(i < 100){
      board[i] = 'O'
      i +=1
    }
  }

  return {
    resetBoard,
    receiveAttack,
    placeShip, 
    get board() {return board}
  }
}

module.exports = GameBoard