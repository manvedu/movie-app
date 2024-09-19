import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { query: props.initialQuery || '' };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.query);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    const searchContainerStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      width: '713px',
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
    };

    const textStyle = {
      fontFamily: 'Montserrat',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '24.38px',
      textAlign: 'left',
      color: 'white',
      opacity: 0.3,
      color: 'white',
    };

    const inputSearchStyle = {
      ...textStyle,
      flex: 1,
      background: '#323232CC',
      border: '1px solid #ccc',
      padding: '10px',
      height: '57px',
      opacity: 0.3,
      boxSizing: 'border-box',
      borderRadius: '5px'
    };

    const buttonStyle = {
      ...textStyle,
      background: '#F65261',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      width: '233px',
      height: '57px',
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 1,
      padding: '10px 0',
      borderRadius: '5px'
    };

    return (
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder={this.props.initialQuery || "What do you want to watch?"}
          value={this.state.query}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          style={inputSearchStyle}
        />
        <button onClick={this.handleSearch} style={buttonStyle}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
