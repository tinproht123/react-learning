/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Cell from "./Cell";

const Board = ({ board, handleClick, handleRightClick, youWon }) => {
  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div className="row" key={rowIdx}>
          {row.map((cellData, colIdx) => (
            <Cell
              key={rowIdx + colIdx}
              cellData={cellData}
              youWon={youWon}
              rowIdx={rowIdx}
              colIdx={colIdx}
              handleClick={handleClick}
              handleRightClick={handleRightClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
