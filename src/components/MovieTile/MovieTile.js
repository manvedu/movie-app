import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieTile.css';

const MovieTile = ({ movie, onClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuOptionClick = (option) => {
    alert(`${option} clicked`);
    setMenuVisible(false);
  };

  return (
    <div className="movie-tile" onClick={onClick}>
      <img src={movie.imageUrl} alt={movie.name} className="movie-image" />
      <div className="movie-info">
        <h3>{movie.name} ({movie.releaseYear})</h3>
        <p>{movie.genres.join(', ')}</p>
      </div>
      <div className="movie-options">
        <button className="menu-button" onClick={handleMenuToggle}>...</button>
        {menuVisible && (
          <div className="context-menu">
            <ul>
              <li onClick={() => handleMenuOptionClick('Edit')}>Edit</li>
              <li onClick={() => handleMenuOptionClick('Delete')}>Delete</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

MovieTile.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MovieTile;
