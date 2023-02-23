import React from "react";
import "./App.css";

import ControlledComponents from "./components/ControlledComponents";
import UnControlledComponents from "./components/UnControlledComponents";
import Login from "./Login";
import LoginControlled from "./LoginControlled";

const validCreds = {
  validEmail: "divyansh.singh@gmail.com",
  validPassword: "Something@Someone",
};

const App = () => {
  return (
    <div className="App">
      {/* <ControlledComponents /> */}
      {/* <UnControlledComponents /> */}
      {/* <Login validCreds={validCreds} /> */}
      <LoginControlled validCreds={validCreds} />
    </div>
  );
};

export default App;
