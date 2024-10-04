import React, { Component } from 'react';
import './GenreSelect.css';

class GenreSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: props.selectedGenre || 'All',
    };
  }

  handleSelect = (genre) => {
    this.setState({ selectedGenre: genre });
    this.props.onSelect(genre);
  };

  render() {
    return (
      <div className="navbar">
        <div className="text-container">
          {this.props.genres.map((genre) => (
            <span
              id={`genre-${genre.toLowerCase()}`}
              key={genre}
              onClick={() => this.handleSelect(genre)}
              className={this.state.selectedGenre === genre ? 'selected-text' : 'text'}
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default GenreSelect;
