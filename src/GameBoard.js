import { Ship } from "./Ship";

// HIT SHIP = X

const GameBoard = () => {
  let ships = [];
  let hitSpots = []
  let missedShots = [];

  const getShips = () => {return ships} ;

  const placeShip = (...coordinates) => {
    const newShip = Ship(coordinates);
    console.log(newShip.getShipCoordinates)
    ships.push(newShip);
  };


  const receiveAttack = coordinate => {
    const attackedShip = ships.find(ship =>
        ship.getShipCoordinates.includes(coordinate),
    );
    if (!attackedShip) {
      console.log('missed')
        missedShots.push(coordinate);
    } else {

      hitSpots.push(coordinate)
      console.log('hit' + hitSpots) 
      attackedShip.hit(attackedShip.getShipCoordinates.indexOf(coordinate));
    }
  };

  const resetBoard = () => {
    missedShots = [];
    ships = [];
  };

  return {
    resetBoard,
    receiveAttack,
    placeShip,
    get missedShots() {
      return missedShots;
    },
    get hitSpots() {
      return hitSpots;
    },
    get ships() {
      return ships;
    },
    getShips,
  };
};

export { GameBoard };
