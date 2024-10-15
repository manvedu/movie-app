import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SortControl from './SortControl';

describe('SortControl Component', () => {
  const onSelectionChange = jest.fn();

  test('renders label and options', () => {
    render(<SortControl currentSelection="releaseDate" onSelectionChange={onSelectionChange} />);

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Release Date')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  test('triggers callback on selection change', () => {
    render(<SortControl currentSelection="releaseDate" onSelectionChange={onSelectionChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'title' } });
    expect(onSelectionChange).toHaveBeenCalledWith('title');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<SortControl currentSelection="releaseDate" onSelectionChange={onSelectionChange} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

