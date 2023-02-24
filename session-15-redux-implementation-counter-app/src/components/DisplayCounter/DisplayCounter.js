import React from "react";

import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const store = useSelector((state) => state);

  return (
    <div
      style={{
        marginBottom: "50px",
        border: "1px solid white",
        padding: "70px 90px",
        fontSize: "2em",
      }}
    >
      Counter Value : {store.counter}
      <br />
      Input Value : {store.inp}
    </div>
  );
};

export default DisplayCounter;
