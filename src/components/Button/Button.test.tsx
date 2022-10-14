import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button, { BtnStyle, SizeClass } from './index';
import { MdOutgoingMail } from 'react-icons/md';

test('renders button with correct Title', () => {
  render(<Button title="Default" />);
  expect(screen.getByText('Default')).toBeInTheDocument();
});

test('render primary button', () => {
  render(<Button title="Primary" btnStyle="primary" />);
  const container = screen.getByRole('button');
  expect(container).toHaveClass(BtnStyle.primary);
});

test('render secondary button', () => {
  render(<Button title="Secondary" btnStyle="secondary" />);
  const container = screen.getByRole('button');
  expect(container).toHaveClass(BtnStyle.secondary);
});

test('render white button', () => {
  render(<Button title="White" btnStyle="white" />);
  const container = screen.getByRole('button');
  expect(container).toHaveClass(BtnStyle.white);
});

test('onClick is called', () => {
  const onClickSpy = jest.fn();
  render(<Button title="ClickMe" onClick={onClickSpy} />)
  screen.getByRole('button').click();
  expect(onClickSpy).toHaveBeenCalledTimes(1);
});

test('onclick handler is not called when disabled', () => {
  const onClickSpy = jest.fn();
  render(<Button title="Default" disabled onClick={onClickSpy} />);
  screen.getByRole('button').click();
  expect(onClickSpy).not.toHaveBeenCalled();
});

test('rendered button should be extra small', () => {
  render(<Button title="Xs" size="xs" />);
  expect(screen.getByRole('button')).toHaveClass(SizeClass.xs);
});

test('rendered button should be small', () => {
  render(<Button title="Sm" size="sm" />);
  expect(screen.getByRole('button')).toHaveClass(SizeClass.sm);
});

test('rendered button should be medium', () => {
  render(<Button title="Md" size="md" />);
  expect(screen.getByRole('button')).toHaveClass(SizeClass.md);
});

test('rendered button should be large', () => {
  render(<Button title="Lg" size="lg" />)
  expect(screen.getByRole('button')).toHaveClass(SizeClass.lg);
});

test('rendered button should be extra large', () => {
  render(<Button title="Xl" size="xl" />);
  expect(screen.getByRole('button')).toHaveClass(SizeClass.xl);
});

test('rendered button should take extra class names', () => {
  render(<Button title="ExtraClasses" className='c-mt-1' />);
  expect(screen.getByRole('button')).toHaveClass('c-mt-1');
});

test('render with leading icon', () => {
  render(<Button title="Leading" LeadingIcon={MdOutgoingMail} />)
  const container = screen.getByRole('button');
  expect(container.firstChild instanceof SVGElement).toBe(true);
});

test('render with trailing icon', () => {
  render(<Button title="Trailing" TrailingIcon={MdOutgoingMail} />)
  const container = screen.getByRole('button');
  expect(container.lastChild instanceof SVGElement).toBe(true);
})