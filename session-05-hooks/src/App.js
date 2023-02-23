// Hooks are of two types :
// State Hooks -> useState
// Effect Hooks --> useEffect

import React, { useState, useEffect, useReducer, createContext } from "react";
import "./App.css";
import { reducer, INITIAL_STATE } from "./store";
// import { ThemeContext, themes } from "./Context";

// import { utils } from "./utils";

import Heading from "./Heading";
import About from "./About";
import Result from "./Result";

export const ReducerStore = createContext(INITIAL_STATE);

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  // const [ans, setAns] = useState(0);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // useEffect(() => {
  //   console.log("State Value actual got updated : New Value : ", num1);
  // }, [num1]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    name === "num2" ? setNum2(value) : setNum1(value);

    if (name === "num1") setNum1(parseInt(value));
    else if (name === "num2") setNum2(parseInt(value));
  };

  const handleAction = (action) => {
    if (action === "+") dispatch({ type: "+", num1: num1, num2: num2 });
    else dispatch({ type: "-", num1: num1, num2: num2 });

    // if (action === "+") setAns(num1 + num2);
    // else setAns(num1 - num2);
  };

  return (
    <div className="App">
      <ReducerStore.Provider value={state}>
        {/* <ThemeContext.Provider value={[num1, num2]}> */}
        {/* <Heading value={[num1, num2]} />

      <About /> */}
        {/* {utils()} */}
        {/* Don not use hooks in simple js functions */}
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={(event) => handleChange(event)}
        />
        <input type="number" name="num2" value={num2} onChange={handleChange} />
        <button
          onClick={() => {
            handleAction("+");
          }}
          // onClick={handleAction("+")}
        >
          +
        </button>
        <button
          onClick={() => {
            handleAction("-");
          }}
        >
          -
        </button>
        {/* <h1>{ans}</h1> */}
        <Result />
        {/* </ThemeContext.Provider> */}
      </ReducerStore.Provider>
    </div>
  );
}

export default App;
