import { Ship } from '../src/Ship'
const newShip = Ship('C1', 'C2', 'C3')

describe('ship initialisation', () => {
  test.only('it can be given coordinates', () =>{
    expect(newShip.shipCoordinates.length).toBe(3)
  })
  test('it can store whether it has been hit or not', () =>{
    expect(newShip.body).toEqual(['S', 'S', 'S']) 
  })
  test('it can have a hit placed upon it', () =>{
    expect(newShip.body).toEqual(['S', 'S', 'S']) 
    newShip.hit(0)
    expect(newShip.body).toEqual(['X', 'S', 'S']) 
  })
  test('it can report when the ship has been sunk', () => {
    newShip.hit(0)
    newShip.hit(1)
    newShip.hit(2)
    expect(newShip.isSunk()).toBe(true)
  })
})