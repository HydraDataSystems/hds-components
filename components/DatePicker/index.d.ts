export type DatePickerType = "date" | "month" | "year";
export type DatePickerProps = {
    initialDate?: string;
    formName?: string;
    label?: string;
    onChange?: (date: string) => void;
    isActionSelectedDate?: boolean;
    fullWidth?: boolean;
};
declare const DatePicker: ({ initialDate, formName, label, onChange, isActionSelectedDate, fullWidth, }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
//# sourceMappingURL=index.d.ts.map