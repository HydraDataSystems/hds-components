import { FaRegCalendarAlt } from "react-icons/fa";
import { Controller } from "react-hook-form";

import React, { useRef, useEffect, useCallback, useState } from "react";
import DatePortal from "./DatePortal";

interface PickerProps {
  formField: string;
  label: string;
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
  label,
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
    // const str = `${(date.getMonth() + 1)
    //   .toString()
    //   .padStart(2, "0")}/${date.getFullYear()}`;
    const str = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
    setValue(formField, str);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    setTimeout(() => {
      const relatedTarget = e.relatedTarget as HTMLElement;

      const isWithinAnotherDatePicker =
        relatedTarget?.closest(".datepicker-container") !== null;

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
      const target = event.target as Node;
      const portalRoot = document.getElementById("datepicker-portal-root");

      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(target) &&
        referenceRef.current &&
        !referenceRef.current.contains(target) &&
        portalRoot &&
        !portalRoot.contains(target) &&
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
    <div
      className={`mt-1 relative rounded-md shadow-sm datepicker-container`}
      ref={datePickerRef}
    >
      {label && <label className=" relative left-2">{label}</label>}
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
                {/* <FaRegCalendarAlt
                  className="absolute top-[10px] right-[10px]"
                  onClick={handleInputClick}
                /> */}
                <svg
                  onClick={handleInputClick}
                  className="absolute top-[8px] right-[10px] h-5 w-5 text-gray-400 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                ref={inputRef}
                className={
                  classNames
                    ? classNames
                    : "cursor-pointer w-full pl-4 pr-10 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                }
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
