// setState is a asynchronous operation

// FUNCTIONAL COMPONENT
import React, { useState } from "react";
import Heading from "./Heading";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // console.log("BEFORE UPDATE : ", counter); // 0
    setCounter(20);
    // console.log("AFTER UPDATE : ", counter); // 20
  };

  return (
    <div>
      <Heading
        message="Text 1"
        imgUrl="data:image/jpeg;base64,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"
      />
      <h3>Counter Value : {counter}</h3>
      <button onClick={handleClick}>Change Value to 20</button>
      <Heading
        message="Text 2"
        imgUrl="data:image/jpeg;base64,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"
      />
    </div>
  );
};

export default App;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// CLASS COMPONENTS
// second callback function parameter is only possible in setter function in class components, it is not possible in functional components

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   render() {
//     const handleClick = () => {
//       console.log("BEFORE UPDATE : ", this.state.counter);
//       this.setState({ counter: 20 }, () => {
//         console.log(
//           "second callback function parameter : ",
//           this.state.counter
//         );
//       });
//       console.log("AFTER UPDATE : ", this.state.counter);
//     };

//     return (
//       <div>
//         <h1>Counter Value : {this.state.counter}</h1>
//         <button onClick={handleClick}>Change value to 20</button>
//       </div>
//     );
//   }
// }

// export default App;
