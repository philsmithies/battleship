import { Ship } from "./Ship";

// HIT SHIP = X

const GameBoard = () => {
  let ships = [];
  let hitSpots = []
  let missedShots = [];

  const getShips = () => {return ships} ;

  const placeShip = (...coordinates) => {
    const newShip = Ship(coordinates);
    ships.push(newShip);
  };

  const receiveAttack = (coordinate) => {
    const attackedShip = ships.find(ship =>
        ship.getShipCoordinates.includes(coordinate),
    );
 
    if (!attackedShip && (hitSpots.find(el => el !== coordinate))) {
      missedShots.push(coordinate);
    } else {
      hitSpots.push(coordinate) 
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
