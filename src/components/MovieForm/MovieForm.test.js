import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';

describe('MovieForm Component', () => {
  const initialMovie = {
    name: 'Inception',
    releaseYear: 2010,
    rating: 'PG-13',
    duration: '2h 28m',
    description: 'A mind-bending thriller.',
  };

  test('renders form fields with initial movie data', () => {
    render(<MovieForm initialMovie={initialMovie} onSubmit={() => {}} />);

    expect(screen.getByTestId('movie-name')).toHaveValue('Inception');
    expect(screen.getByTestId('movie-release-year')).toHaveValue('2010');
    expect(screen.getByTestId('movie-rating')).toHaveValue('PG-13');
    expect(screen.getByTestId('movie-duration')).toHaveValue('2h 28m');
    expect(screen.getByTestId('movie-description')).toHaveValue('A mind-bending thriller.');
  });

  test('calls onSubmit with form data on submit', () => {
    const onSubmit = jest.fn();
    render(<MovieForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId('movie-name'), { target: { value: 'New Movie' } });
    fireEvent.change(screen.getByTestId('movie-release-year'), { target: { value: 2021 } });
    fireEvent.change(screen.getByTestId('movie-rating'), { target: { value: 'R' } });
    fireEvent.change(screen.getByTestId('movie-duration'), { target: { value: '1h 50m' } });
    fireEvent.change(screen.getByTestId('movie-description'), { target: { value: 'A new description.' } });

    fireEvent.submit(screen.getByTestId('movie-form'));

    expect(onSubmit).toHaveBeenCalledWith({
      name: 'New Movie',
      releaseYear: '2021',
      rating: 'R',
      duration: '1h 50m',
      description: 'A new description.',
    });
  });
});
