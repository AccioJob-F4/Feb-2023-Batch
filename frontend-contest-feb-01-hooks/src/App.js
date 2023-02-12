import React, { useState, useReducer, createContext } from "react";
import "./App.css";

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Notification from "./components/Notification/Notification";
import { INITIAL_STORE, reducer } from "./store";

export const StoreContext = createContext();

const App = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  // const [ans, setAns] = useState();
  // const [isError, setIsError] = useState();
  const [state, dispatch] = useReducer(reducer, INITIAL_STORE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    name === "num1" ? setNum1(value) : setNum2(value);

    // if (value && !isNaN(value)) {
    //   name === "num1" ? setNum1(value) : setNum2(value);
    //   console.log("INSIDE");
    // }
  };

  const handleOperations = (event) => {
    const operation = event.target.name;

    // setIsError(false);
    if (num1 && num2 && !isNaN(num1) && !isNaN(num2)) {
      dispatch({ type: operation, error: false, num1: num1, num2: num2 });

      // const intNum1 = parseInt(num1);
      // const intNum2 = parseInt(num2);
      // if (operation === "+") {
      //   setAns(intNum1 + intNum2);
      // } else if (operation === "-") {
      //   setAns(intNum1 - intNum2);
      // } else if (operation === "x") {
      //   setAns(intNum1 * intNum2);
      // } else if (operation === "/") {
      //   setAns(intNum1 / intNum2);
      // }
    } else {
      console.log(num1, num2);
      if (!num1)
        dispatch({
          type: operation,
          error: true,
          message: "num1 cannot be empty",
        });
      else if (!num2 || isNaN(num2)) {
        if (typeof num2 === "string" && num2)
          dispatch({
            type: operation,
            error: true,
            message: "Invalid input type",
          });
        else
          dispatch({
            type: operation,
            error: true,
            message: "num2 cannot be empty",
          });
      } else {
        dispatch({
          type: operation,
          error: true,
          message: "Invalid input types",
        });
      }
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <StoreContext.Provider value={state}>
        <Input
          name="num1"
          value={num1}
          onChange={handleChange}
          placeholder="Num1"
        />
        <Input
          name="num2"
          value={num2}
          onChange={handleChange}
          placeholder="Num2"
        />
        <div className="btn-group">
          <Button label="+" handleOperations={handleOperations} />
          <Button label="-" handleOperations={handleOperations} />
          <Button label="x" handleOperations={handleOperations} />
          <Button label="/" handleOperations={handleOperations} />
        </div>

        <h1>{state.ans}</h1>
        {state.isActionTaken && <Notification />}
      </StoreContext.Provider>
    </div>
  );
};

export default App;
