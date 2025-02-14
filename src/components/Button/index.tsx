import { ButtonHTMLAttributes, ComponentType, useCallback, forwardRef, Ref } from 'react';
import { classNames } from '../../helpers';
import { CgSpinner } from 'react-icons/cg';

interface IconProps {
  className?: string
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  busy?: boolean;
  busyText?: string;
  type?: "submit" | "reset" | "button",
  size?: keyof typeof SizeClass;
  btnStyle?: keyof typeof BtnStyle;
  onClick?: () => void;
  LeadingIcon?: ComponentType<IconProps>;
  TrailingIcon?: ComponentType<IconProps>;
}

export enum SizeClass {
  xs = "px-2.5 py-1.5 text-xs font-medium",
  sm = "px-3 py-2 text-sm font-medium",
  md = "px-4 py-2 text-sm font-medium",
  lg = "px-4 py-2 text-base font-medium",
  xl = "px-6 py-3 text-base font-medium"
}

export enum BtnStyle {
  primary = "border-transparent bg-indigo-600 text-white hover:bg-indigo-700 ",
  secondary = "border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
  white = "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
}

export const BASE_CLASS = "inline-flex items-center justify-center rounded-sm border shadow-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
export const DISABLED_CLASS = "border-transparent bg-gray-100 cursor-not-allowed text-gray-300";
export const BUSY_CLASS = "border-transparent bg-gray-300 cursor-not-allowed text-gray-600";

const Button = forwardRef(({ 
  title, 
  size = "md",
  type = "button", 
  btnStyle = "primary",
  busy = false,
  busyText = "Loading...",
  LeadingIcon,
  TrailingIcon,
  disabled,
  className, 
  ...props }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  
  const renderIcon = useCallback((leading: boolean, Component: ComponentType<IconProps>) => {
    return (
      <Component className={
        classNames(
          leading ? "mr-2" : "ml-2",
          (size === "xs") ? "text-sm" : '',
          (size === "sm") ? "text-lg" : '',
          (size === "md") ? "text-lg" : '',
          (size === "lg") ? "text-xl" : '', 
          (size === "xl") ? "text-2xl" : '',
          busy ? "animate-spin" : ''
      )} />
    )
  }, [busy, LeadingIcon, TrailingIcon]);

  return (
    <button 
      {...props}
      ref={ref}
      type={type}
      disabled={(disabled) ? true : busy ? true : false}
      className={classNames(
        BASE_CLASS,
        SizeClass[size],
        disabled ? DISABLED_CLASS : busy ? BUSY_CLASS : BtnStyle[btnStyle],
        className ? className : ''
      )}>
        {busy && !LeadingIcon && !TrailingIcon && renderIcon(true, CgSpinner)}
        {LeadingIcon && !busy && renderIcon(true, LeadingIcon)}
        {LeadingIcon && busy && renderIcon(true, CgSpinner)}
        {busy ? busyText : title}
        {TrailingIcon && !busy && renderIcon(false, TrailingIcon)}
        {TrailingIcon && busy && renderIcon(false, CgSpinner)}
      </button>
  )
});

export default Button;