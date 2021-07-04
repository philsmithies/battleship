import { Ship } from './Ship';

// EMPTY SPOT = 0
// TAKEN SPOT = S
// HIT SHIP = X

const GameBoard = () => {
  let ships = []
  let missedShots = []

  const placeShip = (...coordinates) => {
    const newShip = Ship(coordinates)
    ships.push(newShip)
  }

  const receiveAttack = (coordinate) => {
    const hitShip = ships.find(ship => {
      if ( ship.shipCoordinates.includes(coordinate)) {
        ship.hit(ship.shipCoordinates.indexOf(coordinate));
        console.log("HIT 🔥 " + ships[0].shipCoordinates)
      } else {
        missedShots.push(coordinate)
        console.log('MISSED ' + missedShots)
      }
    })
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
    get ships() {return ships}
  }
}

export { GameBoard }