/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Cell from "./Cell";

const Board = ({ board, gameOver, setGameOver }) => {
  const handleClick = (row, col) => {
    if (gameOver) return;
    if (board[row][col].isRevaled) return;

    const newBoard = [...board];
    if (newBoard[row][col]) {
      newBoard[row][col].isRevaled = true;
    }
    if (newBoard[row][col].isMine) {
      console.log("click");
      setGameOver(true);
      revealAllBoard();
    }
    if (newBoard[row][col].neighborCount === 0) {
      revealNeighbor(newBoard, row, col);
    }
  };

  const revealNeighbor = (board, row, col) => {
    console.log("click");
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
            console.log("click");
            if (board[neighborRow][neighborCol].neighborCount === 0) {
              revealNeighbor(board, neighborRow, neighborCol);
            }
          }
        }
      }
    }
  };

  const revealAllBoard = () => {
    board.map((row) => row.map((cell) => (cell.isRevaled = true)));
  };

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div className="row" key={rowIdx}>
          {row.map((cellData, colIdx) => (
            <Cell
              key={rowIdx + colIdx}
              cellData={cellData}
              rowIdx={rowIdx}
              colidx={colIdx}
              handleClick={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
