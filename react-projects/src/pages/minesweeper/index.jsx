/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

function index() {
  const [mineSize, setMineSize] = useState(5);
  const [boardSize, setBoardSize] = useState(10);
  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [youWon, setYouWon] = useState(false);
  const [noneMineCell, setNonMineCell] = useState();

  library.add(faBomb);

  useEffect(() => {
    if (checkWin()) {
      setYouWon(true);
      revealMines();
    }
  }, [board]);

  const generateBoard = () => {
    setYouWon(false);
    setGameOver(false);
    //create board
    setNonMineCell(Math.pow(boardSize, 2) - mineSize);
    let result = Array.from({ length: boardSize }, () =>
      Array.from({ length: boardSize }, () => ({
        isMine: false,
        isRevaled: false,
        neighborCount: 0,
        isFlag: false,
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

  //click the cell to reveal it, or get a horrible death!
  const handleClick = (row, col) => {
    if (gameOver || youWon) return;
    if (board[row][col].isRevaled) return;
    const newBoard = [...board];
    newBoard[row][col].isRevaled = true;
    //fixed: check the cell.isMine? before check winner to prevent the player won the game even hit the mine
    if (newBoard[row][col].isMine) {
      setGameOver(true);
      revealMines();
    }
    setNonMineCell((prevState) => prevState - 1);
    if (newBoard[row][col].neighborCount === 0) {
      revealNeighbor(newBoard, row, col);
    }
    setBoard(newBoard);
  };

  //mark the cell when right click on it
  const handleRightClick = (e, rowIdx, colIdx) => {
    e.preventDefault();
    const newBoard = [...board];
    if (newBoard[rowIdx][colIdx].isFlag)
      newBoard[rowIdx][colIdx].isFlag = false;
    else newBoard[rowIdx][colIdx].isFlag = true;
    setBoard(newBoard);
  };

  //revale all non-mine cell nearby until hit the mine
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
            setNonMineCell((prevState) => prevState - 1);
            if (board[neighborRow][neighborCol].neighborCount === 0) {
              revealNeighbor(board, neighborRow, neighborCol);
            }
          }
        }
      }
    }
  };

  //reaveal all mine cells if you lose
  //or you, it will show the flag instead the mine
  const revealMines = () => {
    board.map((row) =>
      row.map((cell) => {
        if (cell.isMine) cell.isRevaled = true;
      })
    );
  };

  //check if all non-mine cells is revaled => you won!
  function checkWin() {
    if (noneMineCell === 0) {
      return true;
    }
    return false;
  }
  return (
    <div style={{ marginLeft: "10px" }}>
      <h1 style={{ letterSpacing: "4px", marginBottom: "25px" }}>
        <span style={{ color: "#0d6efd" }}>React</span> Minesweeper{" "}
        <FontAwesomeIcon color="#dc3545" icon="fa-solid fa-bomb" />
      </h1>
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
      {(gameOver || youWon) && (
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
      <Board
        board={board}
        handleClick={handleClick}
        handleRightClick={handleRightClick}
        youWon={youWon}
      />
    </div>
  );
}

export default index;
