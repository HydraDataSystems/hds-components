import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Badge from './index';

describe('Badge Component', () => {
  test('renders Badge with correct count and type (success)', () => {
    render(<Badge type="success"  content={5} />);
    const badge = screen.getByText('5');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-green-100 text-green-800 ring-1 ring-inset ring-green-600/10 border border-green-300');
  });

  test('renders Badge with correct count and type (alert)', () => {
    render(<Badge type="alert" content={10} />);
    const badge = screen.getByText('10');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-red-100 text-red-800 ring-1 ring-inset ring-red-600/10 border border-red-300');
  });

  test('renders Badge with correct count and type (warning)', () => {
    render(<Badge type="warning" content={3} />);
    const badge = screen.getByText('3');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('bg-orange-100 text-orange-800 ring-1 ring-inset ring-orange-600/10 border border-orange-300');
  });

  test('renders Badge with correct count and type (default)', () => {
    render(<Badge type="warning" content={0} />);
    const badge = screen.getByText('0');
    expect(badge).toBeInTheDocument();
  });
});