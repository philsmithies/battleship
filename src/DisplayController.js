const DisplayController = (gameboard, location, player) => {

  const buildBoard = () => {
    const grid = document.getElementById(`${location}`)

    for(let i = 0; i < 100; i++){
      const boardSquare = document.createElement('div')
      boardSquare.classList.add('boardSquare')
      boardSquare.id = `${location}${i}`
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
      document.getElementById(`${location}${spot}`).innerText = 'HIT'
      player.toggleTurn()
    });
    const missedShots = gameboard.missedShots
    missedShots.forEach(missedShot => {
      console.log(missedShot)
      if(document.getElementById(`${location}${missedShot}`).innerText != 'HIT'){
        document.getElementById(`${location}${missedShot}`).innerText = '-'
        player.toggleTurn()
      }
    });
  }

  return {
    updateBoard,
    buildBoard
  }
}

export { DisplayController }