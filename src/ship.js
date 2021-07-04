const Ship = (coordinatesArray) => {
  const shipCoordinates = coordinatesArray

  // for(i = 0; i < length; i++){
  //   shipCoordinates.push('S')
  // }

  const hit = (value) => {
    shipCoordinates[value] = 'X'
  }

  const isSunk = () => {
    for(i = 0; i < length; i++){
      if(shipCoordinates[i] == 'S') return false
    }
    return true
  }

  return {
    hit,
    isSunk,
    get shipCoordinates() {return shipCoordinates},
    get body() {return body}
  }
}

export { Ship };