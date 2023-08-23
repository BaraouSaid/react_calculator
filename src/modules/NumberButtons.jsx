import { ACTIONS } from '../App';

const NumberButtons = (dispatch, number) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { number } })}
    >
      {number}
    </button>
  );
};

export default NumberButtons;
