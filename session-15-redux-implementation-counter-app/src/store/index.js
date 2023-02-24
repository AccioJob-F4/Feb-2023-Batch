import { createStore } from "redux";

import { reducer } from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

export const INITIAL_STORE = {
  counter: 0,
  inp: 0,
};

export const store = createStore(reducer, INITIAL_STORE, composeWithDevTools());
