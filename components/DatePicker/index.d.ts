export declare type DatePickerType = "date" | "month" | "year";
export declare type DatePickerProps = {
    initialDate?: string;
    formName?: string;
    label?: string;
    onChange?: (date: string) => void;
    isActionSelectedDate?: boolean;
    fullWidth?: boolean;
};
declare const DatePicker: ({ initialDate, formName, label, onChange, isActionSelectedDate, fullWidth, }: DatePickerProps) => JSX.Element;
export default DatePicker;
//# sourceMappingURL=index.d.ts.map