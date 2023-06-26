/* eslint-disable react/prop-types */
const Row = ({ row, rowIndex, colors }) => {
  const { colorOdd, colorEven } = colors;

  return (
    <div className="row">
      {row.map((_, colIndex) => (
        <div
          className="box"
          key={colIndex}
          style={{
            backgroundColor:
              (rowIndex + colIndex) % 2 == 0 ? colorEven : colorOdd,
          }}
        ></div>
      ))}
    </div>
  );
};
export default Row;
