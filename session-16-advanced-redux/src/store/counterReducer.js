import { INCREMENT, DECREMENT } from "./actions";
import { INITIAL_STORE } from ".";

export const counterReducer = (state = INITIAL_STORE, action) => {
  console.log({ action });
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.state.inputValueReducer.inp,
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.state.inputValueReducer.inp,
      };

    default:
      return state;
  }
};
