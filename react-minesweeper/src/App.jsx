import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [mineSize, setMineSize] = useState(5);
  const [boardSize, setBoardSize] = useState(10);
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [youWon, setYouWon] = useState(false);

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

  const handleClick = (row, col) => {
    if (gameOver || youWon) return;
    if (board[row][col].isRevaled) return;
    const newBoard = [...board];
    newBoard[row][col].isRevaled = true;
    if (checkWin()) {
      setYouWon(true);
      console.log("You won!");
    }
    if (newBoard[row][col].isMine) {
      setGameOver(true);
      revealMines();
    }
    if (newBoard[row][col].neighborCount === 0) {
      revealNeighbor(newBoard, row, col);
    }

    setBoard(newBoard);
  };

  const revealNeighbor = (board, row, col) => {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const neighborRow = row + i;
        const neighborCol = col + j;
        if (
          neighborRow >= 0 &&
          neighborRow < board.length &&
          neighborCol >= 0 &&
          neighborCol < board.length
        ) {
          if (
            !board[neighborRow][neighborCol].isMine &&
            !board[neighborRow][neighborCol].isRevaled
          ) {
            board[neighborRow][neighborCol].isRevaled = true;
            if (board[neighborRow][neighborCol].neighborCount === 0) {
              revealNeighbor(board, neighborRow, neighborCol);
            }
          }
        }
      }
    }
  };

  const revealMines = () => {
    board.map((row) =>
      row.map((cell) => {
        if (cell.isMine) cell.isRevaled = true;
      })
    );
  };
  function checkWin() {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {
        const cell = board[row][col];
        if (!cell.isMine && !cell.isRevealed) {
          return false;
        }
      }
    }
    return true;
  }
  return (
    <div className="container">
      <div className="form-control">
        <label htmlFor="">Number of mines:</label>
        <input
          value={mineSize}
          min="5"
          max={`${boardSize - 1}`}
          type="number"
          onChange={(e) => {
            setMineSize(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Size of board:</label>
        <input
          value={boardSize}
          min="5"
          max="20"
          type="number"
          onChange={(e) => {
            setBoardSize(e.target.value);
          }}
        />
      </div>
      <button onClick={() => generateBoard()} className="btn-generate">
        Generate
      </button>
      {gameOver && (
        <button
          onClick={() => {
            setGameOver(false);
            setYouWon(false);
            generateBoard();
          }}
          className="btn-new-game"
        >
          New game
        </button>
      )}
      <Board board={board} handleClick={handleClick} youWon={youWon} />
    </div>
  );
}

export default App;
