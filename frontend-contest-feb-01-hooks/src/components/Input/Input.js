import React from "react";

import "./Input.css";

const Input = ({ name, value, onChange, placeholder }) => {
  return (
    <div>
      <input
        className="input-box"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
