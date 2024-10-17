import {
  useState,
  useEffect,
  useCallback
} from "react";

import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  isEqual,
  isSameMonth,
  isSameYear,
  getDaysInMonth,
  getDay
} from "date-fns";
import { useFloating, shift, flip, autoUpdate, offset } from "@floating-ui/react-dom";
import { FloatingPortal } from "@floating-ui/react-dom-interactions";
import { classNames } from "../../helpers";

export type DatePickerType = "date" | "month" | "year";

export type DatePickerProps = {
  initialDate?: string,
  formName?: string,
  label?: string,
  onChange?: (date: Date) => void,
  isActionSelectedDate?: boolean
  fullWidth?: boolean,
  show?: boolean;
  setShow?: (show: boolean) => void;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DatePicker = ({
  initialDate,
  formName,
  label,
  onChange,
  isActionSelectedDate = false,
  fullWidth = false,
  show,
  setShow,
}: DatePickerProps) => {
  const [dayCount, setDayCount] = useState<number[]>([]);
  const [blankDays, setBlankDays] = useState<number[]>([]);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(show || false);
  const [datePickerHeaderDate, setDatePickerHeaderDate] = useState<Date>(initialDate ? new Date(initialDate) : new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate ? new Date(initialDate) : new Date());
  const [type, setType] = useState<DatePickerType>("date");

  useEffect(() => {
    if (show !== undefined) {
      setShowDatePicker(show);
    }
  }, [show]);

  const {
    x, y, refs, strategy
  } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: "bottom-start",
    strategy: "fixed",
    middleware: [offset({
      mainAxis: 10
    }), flip(), shift()]
  });

  const decrement = useCallback(() => {
    switch (type) {
      case "date":
        setDatePickerHeaderDate((prev) => subMonths(prev, 1));
        break;
      case "month":
        setDatePickerHeaderDate((prev) => subYears(prev, 1));
        break;
      case "year":
        setDatePickerHeaderDate((prev) => subYears(prev, 12));
        break;
    }
  }, [type]);

  const increment = useCallback(() => {
    switch (type) {
      case "date":
        setDatePickerHeaderDate((prev) => addMonths(prev, 1));
        break;
      case "month":
        setDatePickerHeaderDate((prev) => addYears(prev, 1));
        break;
      case "year":
        setDatePickerHeaderDate((prev) => addYears(prev, 12));
        break;
    }
  }, [type]);

  const setDateValue = (date: number) => () => {
    const newDate = new Date(
      new Date(
        Date.UTC(
          datePickerHeaderDate.getFullYear(),
          datePickerHeaderDate.getMonth(),
          date
        ))
    );
    setSelectedDate(newDate);
    setDatePickerHeaderDate(newDate);
    setShowDatePicker(false);

    if (onChange) {
      onChange(newDate);
    }
  };

  const today = () => {
    setDatePickerHeaderDate(new Date());
    setSelectedDate(new Date());
    setShowDatePicker(false);
  }

  const getDayCount = (date: Date) => {
    let daysInMonth = getDaysInMonth(date);
    let dayOfWeek = getDay(new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1)));
    let blankDaysArray = [];
    let daysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankDaysArray.push(i);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    setBlankDays(blankDaysArray);
    setDayCount(daysArray);
  };

  const isSelectedDate = (data: number) => {
    return isEqual(
      new Date(Date.UTC(
        datePickerHeaderDate.getUTCFullYear(),
        datePickerHeaderDate.getUTCMonth(),
        data
      )),
      new Date(Date.UTC(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ))
    );
  }

  const isSelectedMonth = (month: number) =>
    isSameMonth(
      new Date(Date.UTC(selectedDate.getUTCFullYear(), month, selectedDate.getUTCDate())),
      selectedDate
    );

  const isSelectedYear = (year: number) => {
    return isSameYear(
      new Date(Date.UTC(year, selectedDate.getUTCMonth(), selectedDate.getUTCDate())),
      selectedDate
    )
  }


  const setMonthValue = (month: number) => () => {
    setDatePickerHeaderDate(
      new Date(Date.UTC(
        datePickerHeaderDate.getUTCFullYear(),
        month,
        datePickerHeaderDate.getUTCDate()
      ))
    );
    setType("date");
  };

  const setYearValue = (year: number) => () => {
    setDatePickerHeaderDate(
      new Date(Date.UTC(
        year,
        datePickerHeaderDate.getUTCMonth(),
        datePickerHeaderDate.getUTCDate()
      ))
    );
    setType("date");
  }

  const getYearsArray = (date: Date) => {
    let current = date.getUTCFullYear();
    let start = current - 6;

    let yearsArray = [];
    for (let i = 1; i <= 12; i++) {
      yearsArray.push(start + i);
    }
    return yearsArray;
  }

  const toggleDatepicker = () => {
    const newShow = !showDatePicker;
    setShowDatePicker(newShow);
    if (setShow) {
      setShow(newShow);
    }
  };

  const showMonthPicker = () => setType("month");

  const showYearPicker = () => setType("year");

  useEffect(() => {
    getDayCount(datePickerHeaderDate);
  }, [datePickerHeaderDate]);

  useEffect(() => {
    if (isActionSelectedDate) {
      setDatePickerHeaderDate(initialDate ? new Date(initialDate) : new Date());
      setSelectedDate(initialDate ? new Date(initialDate) : new Date());
    }

  }, [isActionSelectedDate]);

  return (
    <div className="antialiased sans-serif" ref={refs.setReference} onClick={toggleDatepicker} >
      <div className={fullWidth ? 'w-full' : 'w-40'}>
        {label && <label>{label}</label>}
        <div ref={refs.setReference} className="relative flex" >
          <input type="hidden" name={formName ?? "date"} value={selectedDate.toISOString()} />
          <input
            type="text"
            readOnly
            className="cursor-pointer w-full pl-4 pr-10 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
            placeholder="Select date"
            value={format(selectedDate, "dd/MM/yyyy")}
            onClick={toggleDatepicker} />
          <div
            className="cursor-pointer absolute top-0 right-0 px-3 py-2"
            onClick={toggleDatepicker}
          >
            <svg
              className="h-5 w-5 text-gray-400"
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
        </div>
      </div>

      <FloatingPortal id="datepicker-portal-root">
        {showDatePicker && (
          <div
            ref={refs.setFloating}
            className="bg-white rounded-lg shadow p-4 absolute z-50"
            style={{ top: y ?? 0, left: x ?? 0, position: strategy, width: "17rem", minHeight: "17rem", maxHeight: "auto" }}
          >
            <div className="flex justify-between items-center mb-2">
              <button
                type="button"
                aria-label="Today"
                onClick={today}
                className="font-bold transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full">Today</button>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <button
                  type="button"
                  aria-label="Decrement"
                  className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  onClick={decrement}
                >
                  <svg
                    className="h-6 w-6 text-gray-500 inline-flex"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
              {type === "date" && (
                <div
                  onClick={showMonthPicker}
                  className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                >
                  <p className="text-center">
                    {format(datePickerHeaderDate, "MMMM")}
                  </p>
                </div>
              )}
              {type !== "year" && (
                <div
                  onClick={type === "month" ? () => setType("date") : showYearPicker}
                  className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                >
                  <p className="text-center">
                    {format(datePickerHeaderDate, "yyyy")}
                  </p>
                </div>
              )}
              {type === "year" && (
                <div
                  onClick={() => setType("date")}
                  className="flex-grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg"
                >
                  <p className="text-center">
                    {`${format(subYears(datePickerHeaderDate, 5), "yyyy")} - ${format(addYears(datePickerHeaderDate, 6), "yyyy")}`}
                  </p>
                </div>
              )}
              <div>
                <button
                  type="button"
                  className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  onClick={increment}
                >
                  <svg
                    className="h-6 w-6 text-gray-500 inline-flex"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {type === "date" && (
              <>
                <div className="flex flex-wrap mb-3 -mx-1">
                  {DAYS.map((day, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="px-1"
                    >
                      <div className="text-gray-800 font-medium text-center text-xs">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap -mx-1">
                  {blankDays.map((_, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="text-center border p-1 border-transparent text-sm"
                    ></div>
                  ))}
                  {dayCount.map((d, i) => (
                    <div
                      key={i}
                      style={{ width: "14.26%" }}
                      className="px-1 mb-1"
                    >
                      <div
                        onClick={setDateValue(d)}
                        className={classNames(
                          'cursor-pointer text-center text-sm rounded-full leading-loose transition ease-in-out duration-100',
                          isSelectedDate(d) ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-200"
                        )}
                      >
                        {`${d}`}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {type === "month" && (
              <div className="flex flex-wrap -mx-1">
                {Array(12)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      onClick={setMonthValue(i)}
                      style={{ width: "25%" }}
                    >
                      <div
                        className={`cursor-pointer p-5 font-semibold text-center text-sm rounded-lg hover:bg-gray-200 ${isSelectedMonth(i)
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-200"
                          }`}
                      >
                        {format(
                          new Date(
                            datePickerHeaderDate.getFullYear(),
                            i,
                            datePickerHeaderDate.getDate()
                          ),
                          "MMM"
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}{" "}
            {type === "year" && (
              <div className="flex flex-wrap -mx-1">
                {getYearsArray(datePickerHeaderDate)
                  .map((year, i) => (
                    <div
                      key={i}
                      onClick={setYearValue(year)}
                      style={{ width: "25%" }}
                    >
                      <div
                        className={`cursor-pointer px-2 py-3 my-2 mx-1 text-center font-semibold text-sm rounded-lg hover:bg-gray-200 ${isSelectedYear(year)
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-200"
                          }`}
                      >
                        {year}
                      </div>
                    </div>
                  ))
                }
              </div>
            )}
          </div>
        )}
      </FloatingPortal>
    </div>
  )
}

export default DatePicker;