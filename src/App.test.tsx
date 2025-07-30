import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LEGO Robotics Team title', () => {
  render(<App />);
  const titleElement = screen.getByText(/LEGO Robotics Team/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Our LEGO Robotics Team/i);
  expect(welcomeElement).toBeInTheDocument();
});
