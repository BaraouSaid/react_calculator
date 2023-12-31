import React from 'react';
import { useReducer } from 'react';
import NumberButton from './modules/NumberButton';
import OperationButton from './modules/OperationButton';

const ACTIONS = {
  ADD_NUMBER: 'add-number',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  CALCULATE: 'calculate',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_NUMBER:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.number,
          overwrite: false,
        };
      }
      if (payload.number === '0' && state.currentOperand === '0') return state;
      if (
        payload.number === '.' &&
        state.currentOperand === state.initialOperand
      )
        return state;

      if (payload.number === '.' && state.currentOperand.includes('.'))
        return state;

      if (payload.number === '.' && state.currentOperand === '0') {
        return {
          ...state,
          initialOperand: '',
          currentOperand: `${state.currentOperand}${payload.number}`,
        };
      }

      return {
        ...state,
        initialOperand: '',
        currentOperand: `${state.currentOperand || ''}${payload.number}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand === null && state.previousOperand === null) {
        return state;
      }

      //To make sure that we can mutlpiply or divide a negative number

      if (
        (state.operation === 'X' || state.operation === '/') &&
        state.currentOperand === null
      ) {
        return {
          ...state,
          currentOperand: payload.operation,
        };
      }

      //To make sure that if there at least 3 operators after a number, the last one overwrites the first ones

      if (state.currentOperand === '-' && payload.operation === '+') {
        return {
          ...state,
          previousState: evaluate(state),
          operation: payload.operation,
          currentOperand: null,
        };
      }

      //To calculate the result everytime we add an operator after an operation without clicking "="

      if (state.currentOperand === null) {
        return {
          ...state,
          previousOperation: evaluate(state),
          operation: payload.operation,
        };
      }

      //To make the currentOperand become the previousOperand when an operator is added

      if (state.previousOperand === undefined) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      //To handle negative sign when "-" is entered at first

      if (
        state.currentOperand == '0' &&
        state.previousOperand == undefined &&
        payload.operation == '-'
      ) {
        return {
          ...state,
          initialOperand: '',
          // currentOperand: payload.operation,
          previousOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: '',
      };

    case ACTIONS.CLEAR:
      return {
        initialOperand: '0',
      };

    case ACTIONS.CALCULATE:
      if (isNaN(evaluate(state))) {
        return {
          initialOperand: null,
          currentOperand: 'ERROR',
        };
      }
      if (
        state.operation === null ||
        state.currentOperand === null ||
        state.previousOperand === '0'
      ) {
        return state;
      }

      if (isNaN(state.previousOperand)) {
        return {
          ...state,
          previousOperand: evaluate(state),
          currentOperand: null,
          operation: payload.operation,
        };
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: evaluate(state),
        currentOperand: null,
        operation: null,
      };
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const current = parseFloat(currentOperand);
  const previous = parseFloat(previousOperand);

  let computation = '';
  switch (operation) {
    case '+':
      computation = eval(previous + current);
      break;
    case '-':
      computation = eval(previous - current);
      break;
    case 'X':
      computation = eval(previous * current);
      break;
    case '/':
      computation = eval(previous / current);
      break;
  }
  return computation.toString();
}

const App = () => {
  const [
    {
      initialOperand = '0',
      currentOperand = null,
      previousOperand = null,
      operation = null,
    },
    dispatch,
  ] = useReducer(reducer, {});

  return (
    <div className="flex items-center justify-center min-h-screen font-body">
      <div className="p-5 my-10 bg-black rounded-lg w-96">
        <h1 className="mb-3 text-lg font-bold text-white">CALCULATOR</h1>
        <div
          id="display"
          className="flex flex-col items-end justify-around h-20 p-2 break-all bg-black border-2 output border-b-stone-500 border-r-stone-500 border-stone-300 "
        >
          <div className="text-white previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="text-xl text-white current-operand">
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
            onClick={() => dispatch({ type: ACTIONS.CALCULATE })}
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
