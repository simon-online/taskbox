import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Taskbox heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Taskbox/i);
  expect(headingElement).toBeInTheDocument();
});
