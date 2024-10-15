import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';

describe('MovieDetails Component', () => {
  const movie = {
    imageUrl: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    name: 'Inception',
    releaseYear: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    description: 'A mind-bending thriller.',
  };

  test('renders movie details with correct data', () => {
    render(<MovieDetails movie={movie} />);

    expect(screen.getByTestId('movie-poster')).toHaveAttribute('src', movie.imageUrl);
    expect(screen.getByTestId('movie-name')).toHaveTextContent(movie.name);
    expect(screen.getByTestId('movie-release-year')).toHaveTextContent(`Release Year: ${movie.releaseYear}`);
    expect(screen.getByTestId('movie-rating')).toHaveTextContent(`Rating: ${movie.rating}`);
    expect(screen.getByTestId('movie-duration')).toHaveTextContent(`Duration: ${movie.duration}`);
    expect(screen.getByTestId('movie-description')).toHaveTextContent(movie.description);
  });
});
