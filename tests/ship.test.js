const Ship = require('../src/ship')
const newShip = Ship(3)

describe('ship initialisation', () => {
  test('it can be given a length', () =>{
    expect(newShip.length).toBe(3)
  })
  test('it can store whether it has been hit or not', () =>{
    expect(newShip.body).toEqual(['-', '-', '-']) 
  })
  test('it can have a hit placed upon it', () =>{
    expect(newShip.body).toEqual(['-', '-', '-']) 
    expect(newShip.hit(0))
    expect(newShip.body).toEqual(['X', '-', '-']) 
  })
})