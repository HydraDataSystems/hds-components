import { ButtonHTMLAttributes, ComponentType } from '../../../node_modules/react';
interface IconProps {
    className?: string;
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    busy?: boolean;
    busyText?: string;
    type?: "submit" | "reset" | "button";
    size?: keyof typeof SizeClass;
    btnStyle?: keyof typeof BtnStyle;
    onClick?: () => void;
    LeadingIcon?: ComponentType<IconProps>;
    TrailingIcon?: ComponentType<IconProps>;
}
export declare enum SizeClass {
    xs = "px-2.5 py-1.5 text-xs font-medium",
    sm = "px-3 py-2 text-sm font-medium",
    md = "px-4 py-2 text-sm font-medium",
    lg = "px-4 py-2 text-base font-medium",
    xl = "px-6 py-3 text-base font-medium"
}
export declare enum BtnStyle {
    primary = "border-transparent bg-indigo-600 text-white hover:bg-indigo-700 ",
    secondary = "border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200",
    white = "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
}
export declare const BASE_CLASS = "inline-flex items-center justify-center rounded-sm border shadow-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
export declare const DISABLED_CLASS = "border-transparent bg-gray-100 cursor-not-allowed text-gray-300";
export declare const BUSY_CLASS = "border-transparent bg-gray-300 cursor-not-allowed text-gray-600";
declare const Button: import('../../../node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=index.d.ts.map