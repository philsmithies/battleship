const Ship = require('../src/Ship')
const newShip = Ship(3)

describe('ship initialisation', () => {
  test('it can be given a length', () =>{
    expect(newShip.length).toBe(3)
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