const Player = (turn) => {
  let isMyTurn = turn;

  const toggleTurn = () => {
    console.log(`toggle: ${isMyTurn}`)
    isMyTurn = !isMyTurn;
  };

  const sendAttack = (GameBoard, coordinate) => {
    GameBoard.receiveAttack(coordinate);
  };

  return {
    get isMyTurn() {
      return isMyTurn;
    },
    sendAttack,
    toggleTurn,
  };
};

export { Player };

