import React, { Component } from 'react';

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
    const navbarStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#232323',
    };

    const textContainerStyle = {
      display: 'flex',
      gap: '10px',
      marginLeft: '35px',
    };

    const textStyle = {
      padding: '10px 0',
      color: 'white',
      textTransform: 'uppercase',
    };

    const selectedTextStyle = {
      ...textStyle,
      // TODO IDK how to get the underline continue under all the options
      borderBottom: '2px solid #F65261',
    };

    return (
      <div style={navbarStyle}>
        <div style={textContainerStyle}>
          {this.props.genres.map((genre) => (
            <span
              key={genre}
              onClick={() => this.handleSelect(genre)}
              style={this.state.selectedGenre === genre ? selectedTextStyle : textStyle}
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
