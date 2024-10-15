import React from "react";

export interface FormInputProps {
  label: string;
  name: string;
  type: string;
  register: any;
  errors: any;
  required?: boolean;
  errorMessage?: string;
  validate?: (val: string) => string | boolean;
  classNames?: string;
  patterm?: boolean;
  autocomplete?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  register,
  errors,
  required = false,
  errorMessage = "",
  validate = () => true,
  classNames = "",
  autocomplete,
}) => {

  return (
    <div className={classNames}>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={name}
          type={type}
          autoComplete={type === "tel" && autocomplete ? "tel" : undefined}
          pattern={type === "email" ? /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ : undefined}
          {...register(name, { required, validate: { validate } })}
          className={errors[name] ? "block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" 
            : "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
        />
      </div>
      {errors[name] && (
        <span className={"mt-2 text-sm text-red-600"}>
          {errorMessage || `This is a required field`}
        </span>
      )}
    </div>
  );
};

export default FormInput;
