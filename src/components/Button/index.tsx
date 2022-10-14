import { ButtonHTMLAttributes, ComponentType } from 'react';
import { classNames } from '../../helpers';

interface IconProps {
  className?: string
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: keyof typeof SizeClass;
  btnStyle?: keyof typeof BtnStyle;
  onClick?: () => void;
  LeadingIcon?: ComponentType<IconProps>;
  TrailingIcon?: ComponentType<IconProps>;
}

export enum SizeClass {
  xs = "c-px-2.5 c-py-1.5 c-text-xs c-font-medium",
  sm = "c-px-3 c-py-2 c-text-sm c-font-medium",
  md = "c-px-4 c-py-2 c-text-sm c-font-medium",
  lg = "c-px-4 c-py-2 c-text-base c-font-medium",
  xl = "c-px-6 c-py-3 c-text-base c-font-medium"
}

export enum BtnStyle {
  primary = "c-border-transparent c-bg-indigo-600 c-text-white hover:c-bg-indigo-700 ",
  secondary = "c-border-transparent c-bg-indigo-100 c-text-indigo-700 hover:c-bg-indigo-200",
  white = "c-border-gray-300 c-bg-white c-text-gray-700 hover:c-bg-gray-50"
}

export const BASE_CLASS = "c-inline-flex c-items-center c-rounded c-border c-shadow-sm focus:c-outline-none focus:c-ring-2 focus:c-ring-indigo-500 focus:c-ring-offset-2";
export const DISABLED_CLASS = "c-border-transparent c-bg-gray-100 c-cursor-not-allowed c-text-gray-300";

const Button = ({ 
  title, size = "md", 
  btnStyle = "primary",
  LeadingIcon,
  TrailingIcon,
  disabled,
  className, 
  ...props }: ButtonProps) => {
  return (
    <button 
      {...props}
      disabled={disabled}
      className={classNames(
        BASE_CLASS,
        SizeClass[size],
        disabled ? DISABLED_CLASS : BtnStyle[btnStyle],
        className ? className : ''
      )}>
        {LeadingIcon && <LeadingIcon className={
          classNames(
            "c-mr-2",
            (size === "xs") ? "c-text-sm" : '',
            (size === "sm") ? "c-text-lg" : '',
            (size === "md") ? "c-text-lg" : '',
            (size === "lg") ? "c-text-xl" : '', 
            (size === "xl") ? "c-text-2xl" : ''
        )} />}
        {title}
        {TrailingIcon && <TrailingIcon className={
          classNames(
            "c-ml-2",
            (size === "xs") ? "c-text-sm" : '',
            (size === "sm") ? "c-text-lg" : '',
            (size === "md") ? "c-text-lg" : '',
            (size === "lg") ? "c-text-xl" : '', 
            (size === "xl") ? "c-text-2xl" : ''
        )} />}
      </button>
  )
}

export default Button;