import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  return(
    <div className="movie-details">
      <img src={movie.imageUrl} alt={movie.name} className="movie-poster" data-testid="movie-poster" />
      <div className="movie-info">
        <h2 data-testid="movie-name">{movie.name}</h2>
        <p data-testid="movie-release-year"><strong>Release Year:</strong> {movie.releaseYear}</p>
        <p data-testid="movie-rating"><strong>Rating:</strong> {movie.rating}</p>
        <p data-testid="movie-duration"><strong>Duration:</strong> {movie.duration}</p>
        <p data-testid="movie-description">{movie.description}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetails;
