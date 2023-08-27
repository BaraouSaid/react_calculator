import { ACTIONS } from '../App';

function NumberButton({ dispatch, number, id, className }) {
  return (
    <button
      id={id}
      className={className}
      // className="w-20 h-20 p-1 bg-stone-100 rounded-xl"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { number } })
      }
    >
      {number}
    </button>
  );
}

export default NumberButton;
