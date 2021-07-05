const Ship = (coordinatesArray) => {
  const shipCoordinates = coordinatesArray

  const hit = (value) => {
    shipCoordinates[value] = 'X'
  }

  const isSunk = () => {
    for(i = 0; i < length; i++){
      if(shipCoordinates[i] == 'X') return true
    }
    return false
  }

  return {
    hit,
    isSunk,
    get shipCoordinates() {return shipCoordinates},
  }
}

export { Ship };