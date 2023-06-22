/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Cell = ({ cellData, youWon, rowIdx, colIdx, handleClick }) => {
  library.add(faBomb, faFlag);
  const colorNumber = (number) => {
    switch (number) {
      case 1:
        return "blue";
      case 2:
        return "green";
      case 3:
        return "yellow";
      case 4:
        return "orange";
      default:
        return "red";
    }
  };
  return (
    <div
      className={`cell ${
        cellData.isRevaled && !cellData.isMine ? "cell-white" : ""
      }`}
      onClick={() => handleClick(rowIdx, colIdx)}
      style={{ color: `${colorNumber(cellData.neighborCount)}` }}
    >
      {cellData.isRevaled &&
        (cellData.isMine ? (
          youWon ? (
            <FontAwesomeIcon icon="fa-solid fa-flag" />
          ) : (
            <span className="mine">
              <FontAwesomeIcon icon="fa-solid fa-bomb" />
            </span>
          )
        ) : cellData.neighborCount > 0 ? (
          cellData.neighborCount
        ) : (
          ""
        ))}
    </div>
  );
};

export default Cell;
