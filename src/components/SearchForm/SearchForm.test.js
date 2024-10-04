import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {
  const initialValue = 'Kill Bill';
  const handleSearch = jest.fn();

  test('renders the input filled with the initial value from props', () => {
    render(<SearchForm initialQuery={initialValue} onSearch={handleSearch} />);
    const input = screen.getByRole('textbox');
    expect(input.value).toBe(initialValue);
  });

  test('calls onSearch funciton with the new value when clicking the Submit button', () => {
    render(<SearchForm initialQuery="" onSearch={handleSearch} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });
    const newValue = 'Batman'

    fireEvent.change(input, { target: { value: newValue } });
    fireEvent.click(button);

    expect(handleSearch).toHaveBeenCalledWith(newValue);
  });

  test('calls onSearch with the proper value after typing and pressing Enter key', () => {
    render(<SearchForm initialQuery="" onSearch={handleSearch} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });
    const newValue = 'Batman'

    fireEvent.change(input, { target: { value: newValue } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(handleSearch).toHaveBeenCalledWith(newValue);
  });
});

