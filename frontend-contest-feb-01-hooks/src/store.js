import React from "react";

export const INITIAL_STORE = {
  ans: "",
  isError: false,
  isActionTaken: false,
  errorMessage: "",
};

export const reducer = (state, action) => {
  let newUpdatedStore = { ...state };

  switch (action.type) {
    case "+":
      if (action.error) {
        newUpdatedStore.ans = "";
        newUpdatedStore.isError = true;
        newUpdatedStore.isActionTaken = true;
        newUpdatedStore.errorMessage = action.message;
      } else {
        newUpdatedStore.ans = parseInt(action.num1) + parseInt(action.num2);
        newUpdatedStore.isError = false;
        newUpdatedStore.isActionTaken = true;
      }
      return newUpdatedStore;
    case "-":
      if (action.error) {
        newUpdatedStore.ans = "";
        newUpdatedStore.isError = true;
        newUpdatedStore.isActionTaken = true;
        newUpdatedStore.errorMessage = action.message;
      } else {
        newUpdatedStore.ans = parseInt(action.num1) - parseInt(action.num2);
        newUpdatedStore.isError = false;
        newUpdatedStore.isActionTaken = true;
      }
      return newUpdatedStore;
    case "x":
      if (action.error) {
        newUpdatedStore.ans = "";
        newUpdatedStore.isError = true;
        newUpdatedStore.isActionTaken = true;
        newUpdatedStore.errorMessage = action.message;
      } else {
        newUpdatedStore.ans = parseInt(action.num1) * parseInt(action.num2);
        newUpdatedStore.isError = false;
        newUpdatedStore.isActionTaken = true;
      }
      return newUpdatedStore;
    case "/":
      if (action.error) {
        newUpdatedStore.ans = "";
        newUpdatedStore.isError = true;
        newUpdatedStore.isActionTaken = true;
        newUpdatedStore.errorMessage = action.message;
      } else {
        newUpdatedStore.ans = parseInt(action.num1) / parseInt(action.num2);
        newUpdatedStore.isError = false;
        newUpdatedStore.isActionTaken = true;
      }
      return newUpdatedStore;

    default:
      return state;
  }
};
