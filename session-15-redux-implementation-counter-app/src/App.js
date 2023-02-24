import React from "react";
import "./App.css";

import CounterActions from "./components/CounterActions/CounterActions";
import DisplayCounter from "./components/DisplayCounter/DisplayCounter";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <DisplayCounter />
        <CounterActions />
      </header>
    </div>
  );
};

export default App;
