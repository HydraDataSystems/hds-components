import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormInput from './index';

describe('FormInput', () => {
  const mockRegister = jest.fn();
  const mockErrors = {};

  const defaultProps = {
    label: 'Test Input',
    name: 'testInput',
    type: 'text',
    register: mockRegister,
    errors: mockErrors,
  };

  it('renders the label and input', () => {
    render(<FormInput {...defaultProps} />);
    expect(screen.getByLabelText('Test Input')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  it('applies the correct classes when there are no errors', () => {
    render(<FormInput {...defaultProps} />);
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6');
  });

  it('applies the correct classes when there are errors', () => {
    const propsWithError = { ...defaultProps, errors: { testInput: 'Error message' } };
    render(<FormInput {...propsWithError} />);
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6');
  });

  it('displays error message when there are errors', () => {
    const propsWithError = { ...defaultProps, errors: { testInput: 'Error message' }, errorMessage: 'Custom error message' };
    render(<FormInput {...propsWithError} />);
    expect(screen.getByText('Custom error message')).toBeTruthy();
  });

  it('uses default error message when no custom message is provided', () => {
    const propsWithError = { ...defaultProps, errors: { testInput: 'Error message' } };
    render(<FormInput {...propsWithError} />);
    expect(screen.getByText('This is a required field')).toBeTruthy();
  });

  it('calls register function with correct arguments', () => {
    render(<FormInput {...defaultProps} required validate={() => true} />);
    expect(mockRegister).toHaveBeenCalledWith('testInput', { required: true, validate: { validate: expect.any(Function) } });
  });

  it('sets autocomplete prop correctly for tel type', () => {
    render(<FormInput {...defaultProps} type="tel" autocomplete />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('autocomplete', 'tel');
    expect(input.getAttribute('autocomplete')).toBe('tel');
  });

  it('sets pattern attribute correctly for email type', () => {
    render(<FormInput {...defaultProps} type="email" />);
    const input = screen.getByRole('textbox');

    const expectedPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.toString();
    const actualPattern = input.getAttribute('pattern');

    expect(actualPattern).toBe(expectedPattern);
  });

});
