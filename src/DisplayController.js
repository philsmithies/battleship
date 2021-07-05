
import { Player } from "./Player";

const DisplayController = () => {
  const grid = document.getElementById('battleGrid')

  const buildBoard = (gameboard) => {
    // console.log(gameboard.ships[0].shipCoordinates[i])
    for(let i = 0; i < 100; i++){
      const boardSquare = document.createElement('div')
      boardSquare.classList.add('boardSquare')
      boardSquare.id = i
      boardSquare.innerText = i

      boardSquare.addEventListener('click', () =>{
        console.log('Clicked ' + i)
      })

      grid.appendChild(boardSquare)
    }
  }

  const updateBoard = (gameboard) => {
    console.log(grid)
      gameboard.ships.forEach(ship => {
        for(let i = 0; i < ship.shipCoordinates.length; i++){
            document.getElementById(i).innerText = 'S'
          }
      });
  }

  
  return {
    updateBoard,
    buildBoard
  }
}

export { DisplayController }