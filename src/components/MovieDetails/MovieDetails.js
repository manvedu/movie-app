import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => (
  <div className="movie-details">
    <img src={movie.imageUrl} alt={movie.name} className="movie-poster" />
    <div className="movie-info">
      <h2>{movie.name}</h2>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Duration:</strong> {movie.duration}</p>
      <p>{movie.description}</p>
    </div>
  </div>
);

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
