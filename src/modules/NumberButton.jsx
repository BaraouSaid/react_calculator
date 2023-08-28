import { ACTIONS } from '../App';

function NumberButton({ dispatch, number, id, className }) {
  return (
    <button
      id={id}
      className={className}
      onClick={() =>
        dispatch({ type: ACTIONS.ADD_NUMBER, payload: { number } })
      }
    >
      {number}
    </button>
  );
}

export default NumberButton;
