const DisplayController = (player) => {

  const buildBoard = (gameboard, location) => {
    const grid = document.getElementById(`${location}`)
    for(let i = 0; i < 100; i++){
      const boardSquare = document.createElement('div')
      boardSquare.classList.add('boardSquare')
      boardSquare.id = i

      boardSquare.addEventListener('click', () =>{
        console.log('Clicked ' + i)
        gameboard.receiveAttack(i)
        updateBoard(gameboard)
      })
      grid.appendChild(boardSquare)
    }
  }

  const updateBoard = (gameboard) => {
    const hitSpots = gameboard.hitSpots;
    hitSpots.forEach(spot => {
      document.getElementById(spot).innerText = 'HIT'
    });
    const missedShots = gameboard.missedShots
    missedShots.forEach(missedShot => {
      console.log(missedShot)
      if(document.getElementById(missedShot).innerText != 'HIT'){
        document.getElementById(missedShot).innerText = '-'
      }
    });
  }

  return {
    updateBoard,
    buildBoard
  }
}

export { DisplayController }