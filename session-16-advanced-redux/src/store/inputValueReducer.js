import { UPDATE_INPUT_VALUE } from "./actions";

import { INITIAL_STORE } from ".";

export const inputValueReducer = (state = INITIAL_STORE, action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return { ...state, inp: action.inputValue };

    default:
      return state;
  }
};
