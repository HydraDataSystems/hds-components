import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './index';

test('renders default button', () => {
  render(<Button title="Default" />);
  expect(screen.getByText('Default')).toBeInTheDocument();
})