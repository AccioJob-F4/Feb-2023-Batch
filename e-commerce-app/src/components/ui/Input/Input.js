import React from "react";

import "./Input.css";

const Input = ({ label, name, value, onChange, type }) => {
  return (
    <div className="input-container">
      <div className="input-label">{label}</div>
      <div className="input-body">
        <input type={type} name={name} value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Input;
