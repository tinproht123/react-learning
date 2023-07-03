/* eslint-disable react/prop-types */
import { ACTIONS } from "./actions";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDivide,
  faMultiply,
  faSubtract,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const OperationButton = ({ dispatch, operation, icon }) => {
  library.add(faDivide, faMultiply, faPlus, faSubtract);
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {icon}
    </button>
  );
};

export default OperationButton;
