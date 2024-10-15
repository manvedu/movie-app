import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MovieTile.css';

const MovieTile = ({ movie, onClick }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="movie-tile" onClick={onClick} data-testid="movie-tile">
      <img src={movie.imageUrl} alt={movie.name} className="movie-image" data-testid="movie-image" />
      <div className="movie-info">
        <h3 data-testid="movie-name">{movie.name}</h3>
        <p data-testid="movie-release-year">{movie.releaseYear}</p>
        <p data-testid="movie-genres">{movie.genres.join(', ')}</p>
      </div>
      <div className="movie-options">
        <button className="menu-button" onClick={handleMenuToggle} data-testid="menu-button">...</button>
        {menuVisible && (
          <div className="context-menu" data-testid="context-menu">
            <ul>
              <li data-testid="edit-option">Edit</li>
              <li data-testid="delete-option">Delete</li>
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
