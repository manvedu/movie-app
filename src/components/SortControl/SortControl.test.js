import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SortControl from './SortControl';

describe('SortControl Component', () => {
  const onSelectionChange = jest.fn();

  test('renders label and select control with options', () => {
    render(<SortControl currentSelection="releaseDate" onSelectionChange={onSelectionChange} />);

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('Release Date')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  test('sets initial selection based on currentSelection prop', () => {
    render(<SortControl currentSelection="title" onSelectionChange={onSelectionChange} />);
    expect(screen.getByRole('combobox')).toHaveValue('title');
  });

  test('calls onSelectionChange with new value when selection changes', () => {
    render(<SortControl currentSelection="releaseDate" onSelectionChange={onSelectionChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'title' } });
    expect(onSelectionChange).toHaveBeenCalledWith('title');
  });
});
