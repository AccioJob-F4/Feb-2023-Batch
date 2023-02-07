import React, { useState } from "react";

// CLASS COMPONENT
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 10,
//       message: "This is a message",
//     };
//   }
//   render() {
//     const handleClick = () => {
//       const updatedState = { ...this.state };
//       updatedState.count = 2;

//       this.setState(updatedState);
//     };
//     return (
//       <div>
//         Counter : {this.state.count}
//         Message : {this.state.message}
//         <button onClick={handleClick}>Change value</button>
//       </div>
//     );
//   }
// }

// FUNCTIONAL COMPONENT
const App = () => {
  const [count, setCount] = useState(10);
  const [message, setMessage] = useState("This is a message");
  const [isDisabled, seIsDisabled] = useState(false);

  const handleClick = () => {
    setCount(2);
    seIsDisabled(true);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      Counter : {count} <br />
      Message : {message} <br />
      <input
        type="text"
        value={message}
        disabled={isDisabled}
        // onChange={(event) => {
        //   setMessage(event.target.value);
        // }}
        onChange={handleChange}
      />
      <button
        // onClick={() => {
        //   setCount(2);
        //   seIsDisabled(true);
        // }}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
