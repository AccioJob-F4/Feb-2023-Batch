import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { INCREMENT, DECREMENT, UPDATE_INPUT_VALUE } from "../../store/actions";

const flexStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "600px",
};

const btnStyle = {
  fontSize: "2.1em",
  background: "dodgerblue",
  border: "none",
  outline: "none",
  padding: "30px 50px",
  color: "white",
  width: "200px",
  cursor: "pointer",
};

const inputStyle = {
  height: "40px",
  width: "600px",
  marginTop: "50px",
  background: "inherit",
  border: "none",
  borderBottom: "1px solid white",
  outline: "none",
  color: "green",
  fontSize: "1.8em",
  fontWeight: "800",
  textAlign: "center",
};

const CounterActions = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  {
  }

  const handleAction = (operation) => {
    if (operation === "+") {
      dispatch({ type: INCREMENT });
    } else {
      dispatch({ type: DECREMENT });
    }
  };

  const handleChange = (e) => {
    let val = e.target.value;
    if (val) dispatch({ type: UPDATE_INPUT_VALUE, inputValue: parseInt(val) });
    else dispatch({ type: UPDATE_INPUT_VALUE, inputValue: 0 });
  };

  return (
    <>
      <div style={flexStyle}>
        <button
          style={btnStyle}
          onClick={() => {
            handleAction("-");
          }}
        >
          -
        </button>
        <button
          style={btnStyle}
          onClick={() => {
            handleAction("+");
          }}
        >
          +
        </button>
      </div>
      <input
        style={inputStyle}
        type="text"
        value={store.inputValueReducer.inp}
        onChange={handleChange}
      />
    </>
  );
};

export default CounterActions;
