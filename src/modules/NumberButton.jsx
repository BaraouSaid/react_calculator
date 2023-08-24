import { ACTIONS } from '../App';

const NumberButton = ({ dispatch, number }) => {
  return (
    <button
      className="bg-stone-100 p-1 w-20 h-20 rounded-xl"
      onClick={() =>
        dispatch({ type: ACTIONS.ADD_NUMBER, payload: { number } })
      }
    >
      {number}
    </button>
  );
};

export default NumberButton;
