import { ACTIONS } from '../App';

function OperationButton({ dispatch, operation, id, className }) {
  return (
    <button
      id={id}
      className={className}
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;
