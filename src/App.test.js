import { render, screen } from '@testing-library/react';
import App from './App';

test('Does something', () => {
  render(<App />);
  const linkElement = screen.getByText("Jose Hernandez");
  expect(linkElement).toBeInTheDocument();
});
