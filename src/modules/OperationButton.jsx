/* eslint-disable react/prop-types */
import { ACTIONS } from '../App';

function OperationButton({ dispatch, operation, id, className }) {
  return (
    <button
      id={id}
      className={className}
      // className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
