import { Ship } from "./Ship";

// HIT SHIP = X

const GameBoard = () => {
  let ships = [];
  let missedShots = [];

  const placeShip = (...coordinates) => {
    const newShip = Ship(coordinates);
    ships.push(newShip);
  };

  const receiveAttack = (coordinate) => {
    const hitShip = ships.find((ship) => {
      if (ship.shipCoordinates.includes(coordinate)) {
        ship.hit(ship.shipCoordinates.indexOf(coordinate));
        console.log("HIT 🔥 " + ships[0].shipCoordinates);
        console.log(ships[0]);
      } else {
        missedShots.push(coordinate);
        console.log("MISSED " + missedShots);
      }
    });
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
    get ships() {
      return ships;
    },
  };
};

export { GameBoard };
