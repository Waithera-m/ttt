import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

test('renders page title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tic-Tac-Toe/i);
  expect(linkElement).toBeInTheDocument();
});

test('component renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
