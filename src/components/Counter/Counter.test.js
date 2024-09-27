import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial value provided in props', () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);
    expect(screen.getByText(String(initialValue))).toBeInTheDocument();
  });

  describe('for decrement button', () => {
    test('decrements the value when decrement button is clicked', () => {
      render(<Counter initialValue={1} />);
      fireEvent.click(screen.getByText('-'));
      expect(screen.getByText('0')).toBeInTheDocument();
    });
 
    test('no decrements the value when value is lower than 0', () => {
      render(<Counter initialValue={0} />);
      fireEvent.click(screen.getByText('-'));
      expect(screen.getByText('0')).toBeInTheDocument();
    });

  });

  test('increments the value when increment button is clicked', () => {
    render(<Counter initialValue={0} />);
    fireEvent.click(screen.getByText('+'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

