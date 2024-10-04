import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from './GenreSelect';


describe('GenreSelect Component', () => {
  const genres = ['All', 'Action', 'Comedy', 'Drama'];
  const indexInitialValue = 0;
  const handleSelect = jest.fn();
  const renderGenreSelect = (props) => {
    return render(
      <GenreSelect
        genres={genres}
        selectedGenre={genres[indexInitialValue]}
        onSelect={handleSelect}
      />
    );
  };

  test('renders all genres passed in props', () => {
    renderGenreSelect();
    genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
      const value = document.getElementById(`genre-${genre.toLowerCase()}`);
      expect(value).toHaveTextContent(genre);
    });
  });

  test('highlights the selected genre passed in props', () => {
    renderGenreSelect();
    const selectedGenre = screen.getByText(genres[indexInitialValue]);
    expect(selectedGenre).toHaveClass('selected-text');
  });

  test('calls onSelect callback with selected genre on click', () => {
    renderGenreSelect();
    const selectedIndex = indexInitialValue + 2;
    const actionGenre = screen.getByText(genres[selectedIndex]);
    fireEvent.click(actionGenre);
    expect(handleSelect).toHaveBeenCalledWith(genres[selectedIndex]);
  });
});

