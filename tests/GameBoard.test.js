import { GameBoard } from "../src/GameBoard";
const gb = GameBoard();

describe("game board init", () => {
  test("it can return a board", () => {
    expect(gb.ships).toEqual([]);
  });
  test("it can load a ship with coordinates", () => {
    gb.placeShip("C1", "C2", "C3");
    expect(gb.ships[0].getShipCoordinates()).toEqual(["C1", "C2", "C3"]);
  });
  test("it can reset the board", () => {
    gb.placeShip("C1", "C2", "C3");
    expect(gb.ships[0].getShipCoordinates()).toEqual(["C1", "C2", "C3"]);
    gb.resetBoard();
    expect(gb.ships).toEqual([]);
  });
  test("it can send an attack", () => {
    gb.placeShip("C1", "C2", "C3");
    gb.receiveAttack("C1");
    expect(gb.ships[0].getShipCoordinates()).toEqual(["X", "C2", "C3"]);
  });
  test("it can miss an attack", () => {
    gb.resetBoard();
    gb.placeShip("C1", "C2", "C3");
    gb.receiveAttack("D1");
    expect(gb.missedShots).toEqual(["D1"]);
  });
});
