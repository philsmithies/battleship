import { Player } from '../src/Player'

const p1 = Player(true)

describe('player initialisation', () => {
  test('it can be given coordinates', () =>{
    expect(p1.isMyTurn).toBe(true)
  })
  test('it can toggle turns', () =>{
    expect(p1.isMyTurn).toBe(true)
    p1.toggleTurn()
    expect(p1.isMyTurn).toBe(false)
  })
})