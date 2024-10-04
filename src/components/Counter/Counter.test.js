import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial value provided in props', () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);
    const value = document.getElementById('counter-value');
    expect(value).toHaveTextContent(initialValue);
  });

  describe('for decrement button', () => {
    test('decrements the value when decrement button is clicked', () => {
      render(<Counter initialValue={1} />);
      fireEvent.click(screen.getByText('-'));
      const value = document.getElementById('counter-value');
      expect(value).toHaveTextContent('0');
    });
 
    test('no decrements the value when value is lower than 0', () => {
      render(<Counter initialValue={0} />);
      fireEvent.click(screen.getByText('-'));
      const value = document.getElementById('counter-value');
      expect(value).toHaveTextContent('0');
    });

  });

  test('increments the value when increment button is clicked', () => {
    render(<Counter initialValue={0} />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

