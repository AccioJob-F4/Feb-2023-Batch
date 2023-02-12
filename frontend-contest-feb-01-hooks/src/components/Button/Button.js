import React from "react";

const Button = ({ label, handleOperations }) => {
  return (
    <button name={label} onClick={handleOperations}>
      {label}
    </button>
  );
};

export default Button;
