import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: props.initialValue || 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ currentValue: prevState.currentValue + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.currentValue > 0) {
        return { currentValue: prevState.currentValue - 1 };
      }
      return prevState;
    });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-button" onClick={this.decrement}> - </button>
        <span className="counter-value">{this.state.currentValue}</span>
        <button className="counter-button" onClick={this.increment}> + </button>
      </div>
    );
  }
}

export default Counter;

