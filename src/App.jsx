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
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.ADD_NUMBER:
      if (payload.number === '0' && state.currentOperand === '0') return state;
      if (payload.number === '.' && state.currentOperand.includes('.'))
        return state;
      return {
        ...state,
        initialOperand: '',
        currentOperand: `${state.currentOperand || ''}${payload.number}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.previousOperand === null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
  }
}

const App = () => {
  const [
    { initialOperand = '0', currentOperand, previousOperand, operation },
    dispatch,
  ] = useReducer(reducer, {});

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-5 my-10 bg-black rounded-lg w-96">
        <h1 className="mb-3 text-lg font-bold text-white">CALCULATOR</h1>
        <div className="flex flex-col items-end justify-around h-20 p-2 break-all bg-black border-2 output border-b-stone-500 border-r-stone-500 border-stone-300">
          <div className="text-white previous-operand">
            {previousOperand} {operation}
          </div>
          <div id="display" className="text-xl text-white current-operand">
            {initialOperand}
            {currentOperand}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5 text-lg font-bold">
          <button
            id="clear"
            className="h-20 col-span-2 p-1 bg-red-500 w-30 cols-2 rounded-xl"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            AC
          </button>
          <OperationButton
            id="divide"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            operation="/"
            dispatch={dispatch}
          />
          <OperationButton
            id="multiply"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            operation="X"
            dispatch={dispatch}
          />
          <NumberButton
            id="seven"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="7"
            dispatch={dispatch}
          />
          <NumberButton
            id="eight"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="8"
            dispatch={dispatch}
          />
          <NumberButton
            id="nine"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="9"
            dispatch={dispatch}
          />
          <OperationButton
            id="subtract"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            operation="-"
            dispatch={dispatch}
          />
          <NumberButton
            id="four"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="4"
            dispatch={dispatch}
          />
          <NumberButton
            id="five"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="5"
            dispatch={dispatch}
          />
          <NumberButton
            id="six"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="6"
            dispatch={dispatch}
          />
          <OperationButton
            id="add"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            operation="+"
            dispatch={dispatch}
          />
          <NumberButton
            id="one"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="1"
            dispatch={dispatch}
          />
          <NumberButton
            id="two"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="2"
            dispatch={dispatch}
          />
          <NumberButton
            id="three"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
            number="3"
            dispatch={dispatch}
          />
          <button
            id="equals"
            className="w-20 row-span-2 p-1 bg-blue-500 h-30 rounded-xl"
          >
            =
          </button>
          <NumberButton
            id="zero"
            className="h-20 col-span-2 p-1 bg-stone-100 w-13 rounded-xl"
            number="0"
            dispatch={dispatch}
          />
          <NumberButton
            id="decimal"
            className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
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
