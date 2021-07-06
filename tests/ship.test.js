import { Ship } from '../src/Ship'
const newShip = Ship(['C1', 'C2', 'C3'])

describe('ship initialisation', () => {
  test('it can be given coordinates', () =>{
    expect(newShip.getShipCoordinates().length).toBe(2)
  })
  test('it can report when the ship has been sunk', () => {
    const sunkShip = Ship('X', 'X', 'X')
    expect(sunkShip.isSunk(sunkShip.getShipCoordinates())).toBe(true)
  })
})