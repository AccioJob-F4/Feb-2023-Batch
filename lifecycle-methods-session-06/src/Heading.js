import React, { Component } from "react";

export class Heading extends Component {
  componentWillUnmount = () => {
    console.log("componentWillUnmount()");
  };
  render() {
    return <h1>Lifecycle Methods Example</h1>;
  }
}

export default Heading;
