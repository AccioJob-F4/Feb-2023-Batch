import React from "react";

import "./InputGroup.css";

const InputGroup = ({
  label,
  type,
  value,
  onChange,
  onTodoItemAddition,
  btnLabel,
}) => {
  return (
    <div className="input-group">
      <div className="input">
        <div className="input-label">{label}</div>
        <input type={type} value={value} onChange={onChange} />
      </div>
      <button className="add-todo-btn" onClick={onTodoItemAddition}>
        {btnLabel}
      </button>
    </div>
  );
};

export default InputGroup;
