import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); 
});

test('check for four list items', () => {
  render(<App />)
  const listElements = screen.getAllByRole('listitem')
  expect(listElements).toHaveLength(4);
})

test('check for hello world text', () => {
  render(<App />)
  const h1Element = screen.getByTestId('test_id_1');
  expect(h1Element).toHaveTextContent(/hello world/i);
})