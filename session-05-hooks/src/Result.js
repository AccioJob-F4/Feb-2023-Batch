import React, { useContext } from "react";
import { ReducerStore } from "./App";

const Result = () => {
  const state = useContext(ReducerStore);

  console.log(" state : ", state);
  return <h1>Answer is : {state.ans}</h1>;
};

export default Result;
