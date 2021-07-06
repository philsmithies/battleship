const DisplayController = () => {
  const grid = document.getElementById('battleGrid')

  const buildBoard = (gameboard) => {
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
    const hitSpots = gameboard.hitSpots;
    hitSpots.forEach(spot => {
      document.getElementById(spot).innerText = 'HIT'
    });
  }

  return {
    updateBoard,
    buildBoard
  }
}

export { DisplayController }