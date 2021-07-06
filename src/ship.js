const Ship = (coordinatesArray) => {

  const getShipCoordinates = coordinatesArray;

  const hit = (index) => {
    getShipCoordinates[index] = "X";
  };

  const isSunk = (shipCoordinates) => {
    for (let i = 0; i < shipCoordinates.length; i++) {
      if (shipCoordinates[i] == "X") return true;
    }
    return false;
  };

  return {
    hit,
    isSunk,
    get getShipCoordinates() {
      return getShipCoordinates;
    },
  };
};

export { Ship };
