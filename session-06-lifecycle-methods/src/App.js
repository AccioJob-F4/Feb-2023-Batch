import React, { Component } from "react";

import Heading from "./Heading";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, showHeading: true };
    console.log("constructor()");
  }

  handleOnClick = () => {
    const updatedState = { ...this.state };
    updatedState.counter = this.state.counter + 1;
    this.setState(updatedState);
  };

  componentDidMount = () => {
    console.log("componentDidMount()");
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(
      "shouldComponentUpdate() : nextProps = ",
      nextProps,
      " ---> nextState = ",
      nextState
    );
    // return false;
    return false;
  };

  UNSAFE_componentWillMount = () => {
    console.log("UNSAFE_componentWillMount()");
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(
      "componentDidUpdate() : prevProps = ",
      prevProps,
      " ---> prevState = ",
      prevState
    );
  };

  UNSAFE_componentWillUpdate = () => {
    console.log("UNSAFE_componentWillUpdate()");
  };

  render() {
    console.log("render()");
    return (
      <div>
        {this.state.showHeading && <Heading />}
        Counter Value = {this.state.counter}
        <button onClick={this.handleOnClick}>Update Counter Value</button>
        <button
          onClick={() => {
            const updatedState = { ...this.state };
            updatedState.showHeading = !this.state.showHeading;
            this.setState(updatedState);
          }}
        >
          Mount/Unmount Heading
        </button>
      </div>
    );
  }
}

export default App;
