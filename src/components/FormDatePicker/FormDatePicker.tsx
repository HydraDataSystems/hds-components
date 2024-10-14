import { FaRegCalendarAlt } from "react-icons/fa";
import { Controller } from "react-hook-form";

import React, { useRef, useEffect, useCallback, useState } from "react";
import DatePortal from "./DatePortal";

interface PickerProps {
    formField: string;
    onChanges?: (date: Date) => void;
    onFocus?: () => void;
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
    error?: {
        type: string;
        message: string;
    };
    classNames?: string;
    show?: boolean;
    onShowChange: (show: boolean) => void;
    control: any;
    setValue: any;
}

const FormDatePicker: React.FC<PickerProps> = ({
    formField,
    classNames = "",
    onChanges,
    onFocus,
    onBlur,
    show = false,
    onShowChange,
    control,
    setValue,
}: PickerProps) => {
    const datePickerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const referenceRef = useRef<HTMLDivElement>(null);
    const [isDebouncing, setIsDebouncing] = useState(false);
    const [showPortal, setShowPortal] = useState(show);

    const defaultOnChange = (date: Date | undefined) => {
        if (date === undefined) return;
        const str = `${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}/${date.getFullYear()}`;
        setValue(formField, str);
    };

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        // Delay the check to allow for the new focus to be set
        setTimeout(() => {
            const relatedTarget = e.relatedTarget as HTMLElement;

            // Check if the new focus is within another date picker
            const isWithinAnotherDatePicker = relatedTarget?.closest('.datepicker-container') !== null;

            if (isWithinAnotherDatePicker) {
                setShowPortal(false);
            }

            if (onBlur) {
                onBlur(e);
            }
        }, 0);
    };

    const handleInputClick = useCallback(() => {
        if (!showPortal) {
            setShowPortal(true);

        } else if (!isDebouncing) {
            setIsDebouncing(true);
            debounce(() => {
                setShowPortal(false);
                setIsDebouncing(false);
            }, 500);
        }
    }, [showPortal, onShowChange, isDebouncing]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                datePickerRef.current &&
                !datePickerRef.current.contains(event.target as Node) &&
                showPortal
            ) {
                setShowPortal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowPortal, showPortal]);

    useEffect(() => {
        onShowChange(showPortal);
    }, [showPortal]);


    return (
        <div className={`mt-1 relative rounded-md shadow-sm datepicker-container`} ref={datePickerRef}>
            <Controller
                name={formField}
                control={control}
                render={({ field }) => (
                    <DatePortal
                        show={showPortal}
                        setShow={setShowPortal}
                        referenceRef={referenceRef}
                        initialDate={new Date(field.value || new Date())}
                        onChange={(date) => {
                            if (onChanges) {
                                onChanges(date);
                            } else {
                                defaultOnChange(new Date(date));
                            }
                        }}
                    >
                        <div ref={referenceRef}>
                            <div className="relative">
                                <FaRegCalendarAlt
                                    className="absolute top-[10px] right-[10px]"
                                    onClick={handleInputClick}
                                />
                            </div>
                            <input
                                ref={inputRef}
                                className={classNames}
                                placeholder="Select Date"
                                type="text"
                                defaultValue={field.value || ""}
                                onFocus={() => {
                                    if (onFocus) onFocus();
                                    setShowPortal(true);
                                }}
                                onBlur={handleBlur}
                                onClick={handleInputClick}
                                onMouseDown={(e) => e.preventDefault()}
                                pattern="\d{2}/\d{4}"
                            />
                        </div>
                    </DatePortal>
                )}
            />
        </div>
    );
};

export default FormDatePicker;

let isWaiting = false;
export function debounce(func: () => void, delay: number): void {

    if (!isWaiting) {
        func();
        isWaiting = true;
        setTimeout(() => {
            isWaiting = false;
        }, delay);
    }
}