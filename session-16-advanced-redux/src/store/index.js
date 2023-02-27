import { createStore, applyMiddleware } from "redux";

import { customMiddleware } from "./middleware";

import { composeWithDevTools } from "redux-devtools-extension";

import { combineReducers } from "redux";

import { counterReducer } from "./counterReducer";
import { inputValueReducer } from "./inputValueReducer";

export const INITIAL_STORE = {
  counter: 0,
  inp: 0,
};

const rootReducer = combineReducers({
  inputValueReducer: inputValueReducer,
  counterReducer: counterReducer,
});

export const store = createStore(
  rootReducer,
  INITIAL_STORE,
  composeWithDevTools(applyMiddleware(customMiddleware))
);
