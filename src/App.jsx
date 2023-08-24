import React from 'react';
import { useReducer } from 'react';
import NumberButton from './modules/NumberButton';
import OperationButton from './modules/OperationButton';

const ACTIONS = {
  ADD_NUMBER: 'add-number',
  CHOOSE_OPERATION: 'chose-operation',
  CLEAR: 'clear',
  CALCULATE: 'calculate',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_NUMBER:
      if (payload.number === '0' && state.currentOperand === '0') return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.number}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
      };
    default:
      return state;
  }
}

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black w-96 rounded-lg my-10 p-5">
        <h1 className="text-white mb-3 font-bold text-lg">CALCULATOR</h1>
        <div
          id="display"
          className="output flex flex-col items-end justify-around break-all bg-black h-20 p-2 border-2 border-b-stone-500 border-r-stone-500 border-stone-300"
        >
          <div className="previous-operand text-white">
            {previousOperand} {operation}
          </div>
          <div className="current-operand text-white text-xl">
            {currentOperand}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5 font-bold text-lg">
          <button
            id="clear"
            className="bg-red-500 p-1 w-30 h-20 cols-2 rounded-xl col-span-2"
          >
            AC
          </button>
          <button id="divide" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            /
          </button>
          <OperationButton
            id="divide"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            operation="/"
            dispatch={dispatch}
          />
          <button
            id="multiply"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
          >
            X
          </button>
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="7"
            dispatch={dispatch}
          />
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="8"
            dispatch={dispatch}
          />
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="9"
            dispatch={dispatch}
          />
          <button
            id="substract"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
          >
            -
          </button>
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="4"
            dispatch={dispatch}
          />
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="5"
            dispatch={dispatch}
          />
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="6"
            dispatch={dispatch}
          />
          <button id="add" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            +
          </button>
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="1"
            dispatch={dispatch}
          />
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="2"
            dispatch={dispatch}
          />
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="3"
            dispatch={dispatch}
          />
          <button
            id="equals"
            className="bg-blue-500 p-1 w-20 h-30 rounded-xl row-span-2"
          >
            =
          </button>
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="0"
            dispatch={dispatch}
          />
          <NumberButton
            id="seven"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
            number="."
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
};

export { ACTIONS };
export default App;
