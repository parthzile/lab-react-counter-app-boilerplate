import { Component } from 'react';
// import { useState } from "react";

class Counterclass extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  countIncrease = () =>{
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  countDecrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }

  countReset = () => {
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <>
        <h1>Counter App</h1>
        {this.state.counter}

        <br />
        <button onClick={this.countIncrease}>+</button>
        <button onClick={this.countDecrease}>-</button>
        <button onClick={this.countReset}>Reset</button>
      </>
    );
  }
}

export default Counterclass;