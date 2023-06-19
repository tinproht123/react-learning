/* eslint-disable react/prop-types */
const Cell = ({ row, rowIndex }) => {
  return (
    <div className="row">
      {row.map((_, colIndex) => (
        <div
          className={`box ${
            (rowIndex + colIndex) % 2 == 0 ? "white" : "black"
          }`}
          key={colIndex}
        ></div>
      ))}
    </div>
  );
};
export default Cell;
