import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// Arrange, Act, Assert
test('renders animal form header', () => {
  // Arrange
  const { getByText } = render(<App />);

  // Act
  const linkElement = getByText(/add new animal/i);

  // Assert
  expect(linkElement).toBeInTheDocument();
});
