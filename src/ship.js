const Ship = (coordinatesArray) => {
  const shipCoordinates = coordinatesArray;

  const hit = (index) => {
    shipCoordinates[index] = "X";
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
    get shipCoordinates() {
      return shipCoordinates;
    },
  };
};

export { Ship };
