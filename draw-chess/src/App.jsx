import { useState } from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  const [size, setSize] = useState(0);
  const [chess, setChess] = useState([]);

  console.log(useState());

  const generateChess = () => {
    const result = [];
    for (let i = 0; i < size; i++) {
      const row = Array.from({ length: size, value: 0 });
      result.push(row);
    }

    setChess(result);
    console.log(size);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          min="0"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <button onClick={generateChess}>Draw</button>
      </div>
      <div>
        <div>
          <label htmlFor="odd-cell-color">Odd cell color: </label>
          <input id="odd-cell-color" type="color" />
        </div>
        <div>
          <label htmlFor="odd-cell-color">Even cell color: </label>
          <input id="even-cell-color" type="color" />
        </div>
        <button>Paint Color</button>
      </div>

      <div style={{ marginTop: "50px" }}>
        {chess.length > 0 &&
          chess.map((row, rowIndex) => (
            <Cell key={rowIndex} row={row} rowIndex={rowIndex} />
          ))}
      </div>
    </div>
  );
}

export default App;
