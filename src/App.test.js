import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Arrange, Act, Assert
test('renders animal form header', () => {
  // Arrange
  const { getByText } = render(<App />);

  // Act
  const header = getByText(/add new animal/i);

  // Assert
  expect(header).toBeInTheDocument();
});

// jest global function
test('consise test - renders animal form header', () => {
  // Arrange
  const { getByText } = render(<App />)

  //Act
  getByText(/add new animal/i)
})