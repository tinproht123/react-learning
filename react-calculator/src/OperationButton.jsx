import React from "react";

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default OperationButton;
