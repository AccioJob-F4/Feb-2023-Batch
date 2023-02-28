import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./reducer";

export const INITIAL_STORE = [
  {
    id: "1",
    title: "Swiggy Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 20000,
    date: "2023-02-10",
  },

  {
    id: "2",
    title: "Zomato Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 20000,
    date: "2023-02-10",
  },

  {
    id: "3",
    title: "Salary",
    Description: "I was feeling hungry",
    expenseType: "INCOME",
    amount: 20000,
    date: "2023-02-10",
  },

  {
    id: "4",
    title: "Swiggy Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 20000,
    date: "2023-02-10",
  },
];

export const store = createStore(reducer, INITIAL_STORE, composeWithDevTools());
