import { useReducer } from "react";
import "./App.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

// eslint-disable-next-line react-refresh/only-export-components
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIDIT: "delete-digit",
  EVALUATE: "evaluate",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (state.currentOperand === "0") {
        if (payload.digit === ".") {
          console.log("YES");
          return {
            ...state,
            currentOperand: `${state.currentOperand || ""}${payload.digit}`,
          };
        }
        if (payload.digit !== "0") {
          return {
            ...state,
            currentOperand: `${payload.digit}`,
          };
        } 
      }

      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CLEAR:
      return { currentOperand: "0" };

    case ACTIONS.CHOOSE_OPERATION:
      if(state.previousOperand == null){
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: "0"
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
      }

    case ACTIONS.DELETE_DIDIT:
      if(state.overwrite){
        console.log(state.overwrite)
        return{
          ...state,
          overwrite: false,
          previousOperand: null
        }
        
      }

      if(state.currentOperand === "0") return state;
      if(state.currentOperand.length === 1) return {...state, currentOperand: "0"}

      return{
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }

    case ACTIONS.EVALUATE:
      return{
        ...state,
        overwrite: true,
        currentOperand: evaluate(state)
      }
  }
};

const evaluate = ({currentOperand, previousOperand, operation}) => {
  console.log("run")
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if(isNaN(prev) || isNaN(curr)) return "";
  let computation = "";
  switch(operation){
    case "+":
      computation = prev + curr;
      break;
    
    case "-":
      computation = prev - curr;
      break;

    case "*":
      computation = prev * curr;
      break;
      
    case "/":
      computation = prev / curr;
      break;
  }

  return computation.toString()
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    { currentOperand: "0" }
  );

  return (
    <div className="container">
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>

        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button onClick={() => dispatch({type: ACTIONS.DELETE_DIDIT})}>DEL</button>
        <OperationButton operation="/" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="*" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two" onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>
      </div>
    </div>
  );
}

export default App;
