import React, { Component } from 'react';
import './SearchForm.css';

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

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {

    return (
      <div className="search-container">
        <input
          type="text"
          placeholder={this.props.initialQuery || "What do you want to watch?"}
          value={this.state.query}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          className="input-search text-style"
        />
        <button onClick={this.handleSearch} className="button-style text-style">Search</button>
      </div>
    );
  }
}

export default SearchForm;
