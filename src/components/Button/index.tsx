import { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../helpers';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: keyof typeof SizeClass;
  btnStyle?: keyof typeof BtnStyle;
}

enum SizeClass {
  xs = "c-px-2.5 c-py-1.5 c-text-xs c-font-medium",
  sm = "c-px-3 c-py-2 c-text-sm c-font-medium",
  md = "c-px-4 c-py-2 c-text-sm c-font-medium",
  lg = "c-px-4 c-py-2 c-text-base c-font-medium",
  xl = "c-px-6 c-py-3 c-text-base c-font-medium"
}

enum BtnStyle {
  primary = "c-border-transparent c-bg-indigo-600 c-text-white hover:c-bg-indigo-700 ",
  secondary = "c-border-transparent c-bg-indigo-100 c-text-indigo-700 hover:c-bg-indigo-200",
  white = "c-border-gray-300 c-bg-white c-text-gray-700 hover:c-bg-gray-50"
}

const BASE_CLASS = "c-inline-flex c-items-center c-rounded c-border c-shadow-sm focus:c-outline-none focus:c-ring-2 focus:c-ring-indigo-500 focus:c-ring-offset-2";

const Button = ({ title, size = "md", btnStyle = "primary", ...props }: ButtonProps) => {
  return (
    <button 
      {...props}
      className={classNames(
        BASE_CLASS,
        SizeClass[size],
        BtnStyle[btnStyle]
      )}>{title}</button>
  )
}

export default Button;