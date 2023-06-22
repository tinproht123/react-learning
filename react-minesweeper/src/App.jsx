import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [mineSize, setMineSize] = useState(5);
  const [boardSize, setBoardSize] = useState(10);
  const [board, setBoard] = useState([[]]);
  const [gameOver, setGameOver] = useState(false);

  const generateBoard = () => {
    //create board
    let result = Array.from({ length: boardSize }, () =>
      Array.from({ length: boardSize }, () => ({
        isMine: false,
        isRevaled: false,
        neighborCount: 0,
      }))
    );
    //lane mines
    let numMinesLaned = 0;
    while (numMinesLaned < mineSize) {
      const col = Math.floor(Math.random() * boardSize);
      const row = Math.floor(Math.random() * boardSize);

      if (!result[col][row].isMine) {
        result[col][row].isMine = true;
        numMinesLaned++;
      }
    }

    //flag the cell nearby the mine
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        if (!result[row][col].isMine) {
          let numNeighborMine = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const neighborRow = row + i;
              const neighborCol = col + j;
              if (
                neighborRow >= 0 &&
                neighborRow < boardSize &&
                neighborCol >= 0 &&
                neighborCol < boardSize
              ) {
                if (result[neighborRow][neighborCol].isMine) {
                  numNeighborMine++;
                }
              }
            }
          }
          result[row][col].neighborCount = numNeighborMine;
        }
      }
    }
    setBoard(result);
  };

  return (
    <div className="container">
      <div className="form-control">
        <label htmlFor="">Number of mines:</label>
        <input
          value={mineSize}
          onChange={(e) => {
            setMineSize(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Size of board:</label>
        <input
          value={boardSize}
          onChange={(e) => {
            setBoardSize(e.target.value);
          }}
        />
      </div>
      <button onClick={() => generateBoard()}>generate</button>
      <Board board={board} gameOver={gameOver} setGameOver={setGameOver} />
    </div>
  );
}

export default App;
