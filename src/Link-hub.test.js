import { render, screen } from '@testing-library/react';
import LinkHub from './Link-hub';

test('renders learn react link', () => {
  render(<LinkHub />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
