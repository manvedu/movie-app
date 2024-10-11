import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetails from './MovieDetails';

describe('MovieDetails Component', () => {
  const movie = {
    imageUrl: 'www.google.com',
    name: 'Green Movie',
    releaseYear: 2024,
    rating: 'PG-13',
    duration: '2h 15m',
    description: 'Movies description',
  };

  test('renders movie details', () => {
    render(<MovieDetails movie={movie} />);

    // Check if the poster image is rendered
    const poster = screen.getByAltText(movie.name);
    expect(poster).toBeInTheDocument();
    expect(poster).toHaveAttribute('src', movie.imageUrl);

    // Check if the title, release year, rating, duration, and description are rendered
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(screen.getByText(`Release Year: ${movie.releaseYear}`)).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${movie.rating}`)).toBeInTheDocument();
    expect(screen.getByText(`Duration: ${movie.duration}`)).toBeInTheDocument();
    expect(screen.getByText(movie.description)).toBeInTheDocument();
  });
});
