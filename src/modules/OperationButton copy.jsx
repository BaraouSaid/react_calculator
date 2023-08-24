/* eslint-disable react/prop-types */
import { ACTIONS } from '../App';

function OperationButton({ dispatch, operation }) {
  return (
    <button
      className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
