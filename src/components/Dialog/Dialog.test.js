import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';

jest.mock('focus-trap-react', () => ({ children }) => <>{children}</>);

describe('Dialog Component', () => {
  test('renders title and content', () => {
    render(<Dialog title="Test Title" onClose={() => {}}><p>Some Content</p></Dialog>);

    expect(screen.getByTestId('dialog-title').textContent).toBe('Test Title');
    expect(screen.getByTestId('dialog-body').textContent).toBe('Some Content');
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Dialog title="Test Title" onClose={onClose}><p>Some bla bla bla</p></Dialog>);

    fireEvent.click(screen.getByTestId('dialog-close-button'));
    expect(onClose).toHaveBeenCalled();
  });
});
