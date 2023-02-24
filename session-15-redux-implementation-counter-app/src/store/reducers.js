import { INCREMENT, DECREMENT, UPDATE_INPUT_VALUE } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      const newStore = { ...state };
      newStore.counter = state.counter + state.inp;
      return newStore;

    case DECREMENT:
      //   const updatedStore = { ...state };
      //   updatedStore.counter = state.counter - 1;
      return { ...state, counter: state.counter - state.inp };

    case UPDATE_INPUT_VALUE:
      return { ...state, inp: action.inputValue };

    default:
      return state;
  }
};
