import React from 'react';
import PropTypes from 'prop-types';

const MovieForm = ({ initialMovie, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} data-testid="movie-form">
      <label>
        Movie Name:
        <input name="name" defaultValue={initialMovie?.name} data-testid="movie-name" />
      </label>
      <label>
        Release Year:
        <input name="releaseYear" defaultValue={initialMovie?.releaseYear} data-testid="movie-release-year" />
      </label>
      <label>
        Rating:
        <input name="rating" defaultValue={initialMovie?.rating} data-testid="movie-rating" />
      </label>
      <label>
        Duration:
        <input name="duration" defaultValue={initialMovie?.duration} data-testid="movie-duration" />
      </label>
      <label>
        Description:
        <textarea name="description" defaultValue={initialMovie?.description} data-testid="movie-description"></textarea>
      </label>
      <button type="submit" data-testid="submit-button">Submit</button>
    </form>
  );
};

MovieForm.propTypes = {
  initialMovie: PropTypes.shape({
    name: PropTypes.string,
    releaseYear: PropTypes.number,
    rating: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
