/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import "./App.css";
import Row from "./Row";

function index() {
  const [size, setSize] = useState(0);
  const [chess, setChess] = useState([]);
  const [colors, setColors] = useState({
    colorOdd: "#000000",
    colorEven: "#ffffff",
  });

  const { colorOdd, colorEven } = colors;

  const generateChess = () => {
    const result = [];
    for (let i = 0; i < size; i++) {
      const row = Array.from({ length: size });
      result.push(row);
    }

    setChess(result);
  };

  const swapColor = () => {
    let tempColorOdd = colorOdd;
    let tempColorEven = colorEven;
    setColors({ colorOdd: tempColorEven, colorEven: tempColorOdd });
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          min="0"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <button onClick={generateChess}>Draw</button>
      </div>
      <div>
        <div style={{ marginBottom: "5px" }}>
          <label htmlFor="odd-cell-color">Odd cell color: </label>
          <input
            id="odd-cell-color"
            type="color"
            value={colorOdd}
            onChange={(e) =>
              setColors({
                colorOdd: e.target.value,
                colorEven,
              })
            }
          />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <label htmlFor="odd-cell-color">Even cell color: </label>
          <input
            id="even-cell-color"
            type="color"
            value={colorEven}
            onChange={(e) =>
              setColors({
                colorEven: e.target.value,
                colorOdd,
              })
            }
          />
        </div>
        <p style={{ fontSize: "12px", margin: "20px 0 20px 0" }}>
          Click on chess board to swap color between cell
        </p>
      </div>

      <div style={{ marginTop: "50px" }} onClick={swapColor}>
        {chess.length > 0 &&
          chess.map((row, rowIndex) => (
            <Row key={rowIndex} row={row} rowIndex={rowIndex} colors={colors} />
          ))}
      </div>
    </div>
  );
}

export default index;
