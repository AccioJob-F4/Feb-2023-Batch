import React, { useState } from "react";
import "./App.css";

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [ans, setAns] = useState("");
  const [isError, setIsError] = useState(false);
  const [isActionTaken, setIsActionTaken] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    name === "num1" ? setNum1(value) : setNum2(value);
  };

  const handleOperations = (event) => {
    const operation = event.target.name;

    setIsError(false);
    if (num1 && num2 && !isNaN(num1) && !isNaN(num2)) {
      const intNum1 = parseInt(num1);
      const intNum2 = parseInt(num2);
      if (operation === "+") {
        setAns(intNum1 + intNum2);
        setIsActionTaken(true);
      } else if (operation === "-") {
        setAns(intNum1 - intNum2);
        setIsActionTaken(true);
      } else if (operation === "x") {
        setAns(intNum1 * intNum2);
        setIsActionTaken(true);
      } else if (operation === "/") {
        setAns(intNum1 / intNum2);
        setIsActionTaken(true);
      }
    } else {
      setIsActionTaken(true);
      setIsError(true);
      if (!num1) {
        setErrorMessage("num1 cannot be empty");
      } else if (!num2 || isNaN(num2)) {
        if (typeof num2 === "string" && num2)
          setErrorMessage("Invalid input type");
        else setErrorMessage("num2 cannot be empty");
      } else {
        setErrorMessage("Invalid input type");
      }
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>

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

      <h1>{ans}</h1>
      {isActionTaken && (
        <Notification isError={isError} errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default App;
