import React, { useState } from "react";
import uniqid from "uniqid";

import "./App.css";

import Header from "./components/Header/Header";
import InputGroup from "./components/InputGroup/InputGroup";

const App = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState(["Todo 1", "Todo 2"]);
  const [showHeading, setShowHeading] = useState(true);

  const handleInputChange = (event) => {
    setTodoItem(event.target.value);
  };

  const onTodoItemAddition = () => {
    const updatedTodoList = [...todoList];
    updatedTodoList.push(todoItem);
    setTodoList(updatedTodoList);
    setTodoItem("");
  };

  const handleDelete = (item) => {
    let updatedTodoList = [...todoList];
    updatedTodoList = updatedTodoList.filter((todoText) => todoText !== item);

    // const newTodo = updatedTodoList
    //   .map((todoText) => {
    //     if (todoText !== item) return todoText;
    //   })
    //   .filter((i) => i);

    // console.log(newTodo);

    setTodoList(updatedTodoList);
  };

  return (
    <div>
      {/* {showHeading ? (
        <Header
          headerText="Todo App"
          subHeaderText="You can even delete the todo item"
        />
      ) : null} */}

      {showHeading && (
        <Header
          headerText="Todo App"
          subHeaderText="You can even delete the todo item"
        />
      )}

      <InputGroup
        label="Type your TODO Item"
        type="text"
        value={todoItem}
        onChange={handleInputChange}
        onTodoItemAddition={onTodoItemAddition}
        btnLabel="+ Add Item"
      />

      <ul>
        {todoList.map((item, idx) => {
          return (
            <li className="list-item" key={idx}>
              {console.log(idx)}
              {item}{" "}
              <button
                className="delete-btn"
                onClick={() => {
                  handleDelete(item);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
