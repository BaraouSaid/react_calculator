import React from 'react';
import { useReducer } from 'react';
import NumberButton from './modules/NumberButton';

const ACTIONS = {
  ADD_NUMBER: 'add-number',
  CHOOSE_OPERATION: 'chose-operation',
  CLEAR: 'clear',
  CALCULATE: 'calculate',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_NUMBER:
      return {
        ...state,
        currentOperand: `${currentOperand || ''}${payload.number}`,
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
          <button id="eight" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            8
          </button>
          <button id="nine" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            9
          </button>
          <button
            id="substract"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
          >
            -
          </button>
          <button id="four" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            4
          </button>
          <button id="five" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            5
          </button>
          <button id="six" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            6
          </button>
          <button id="add" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            +
          </button>
          <button id="one" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            1
          </button>
          <button id="two" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            2
          </button>
          <button id="three" className="bg-stone-100 p-1 w-20 h-20 rounded-xl">
            3
          </button>
          <button
            id="equals"
            className="bg-blue-500 p-1 w-20 h-30 rounded-xl row-span-2"
          >
            =
          </button>
          <button
            id="zero"
            className="bg-stone-100 p-1 w-30 h-20 rounded-xl col-span-2"
          >
            0
          </button>
          <button
            id="decimal"
            className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export { ACTIONS };
export default App;
