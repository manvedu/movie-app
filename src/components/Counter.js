import React, { Component } from 'react';

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
    this.setState((prevState) => ({ currentValue: prevState.currentValue - 1 }));
  };

  render() {
    const counterStyle = {
      marginTop: '20px',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#444',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      color: 'white',
      textAlign: 'center',
      width: 'fit-content',
      margin: '0 auto',
    };


    const buttonStyle = {
      padding: '10px',
      margin: '0 5px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#555',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
    };

    const countStyle = {
      fontSize: '20px',
      margin: '0 10px',
    };

    return (
      <div style={counterStyle}>
        <button style={buttonStyle} onClick={this.decrement}> - </button>
        <span style={countStyle}>{this.state.currentValue}</span>
        <button style={buttonStyle} onClick={this.increment}> + </button>
      </div>
    );
  }
}

export default Counter;

