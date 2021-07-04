const Ship = require('../src/ship')

const newShip = Ship()

describe('ship initialisation', () => {
  test('it returns with a default value', () =>{
    expect(newShip.length).toBe(0)
  })
})