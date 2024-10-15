import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieTile from './MovieTile';

describe('MovieTile Component', () => {
  const movie = {
    imageUrl: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    name: 'Test Movie',
    releaseYear: 2021,
    genres: ['Action', 'Drama'],
  };

  test('renders movie details with correct data', () => {
    const handleClick = jest.fn();
    render(<MovieTile movie={movie} onClick={handleClick} />);

    expect(screen.getByTestId('movie-image')).toHaveAttribute('src', movie.imageUrl);
    expect(screen.getByTestId('movie-name')).toHaveTextContent(movie.name);
    expect(screen.getByTestId('movie-release-year')).toHaveTextContent(movie.releaseYear.toString());
    expect(screen.getByTestId('movie-genres')).toHaveTextContent('Action, Drama');
  });

  test('calls onClick when movie tile is clicked', () => {
    const handleClick = jest.fn();
    render(<MovieTile movie={movie} onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('movie-tile'));
    expect(handleClick).toHaveBeenCalled();
  });

  test('shows context menu when menu button is clicked', () => {
    render(<MovieTile movie={movie} onClick={() => {}} />);
    fireEvent.click(screen.getByTestId('menu-button'));
    expect(screen.getByTestId('context-menu')).toBeInTheDocument();
    expect(screen.getByTestId('edit-option')).toBeInTheDocument();
    expect(screen.getByTestId('delete-option')).toBeInTheDocument();
  });
});

