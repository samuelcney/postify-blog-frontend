import { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  error?: FieldError;
  register: UseFormRegisterReturn;
  invert?: boolean;
  onclick?: () => void;
}

export const InputContent = ({
  label,
  type = "text",
  placeholder = "",
  icon,
  error,
  register,
  invert = false,
  onclick,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          className={`text-[--foreground] text-sm ml-1 ${
            invert ? "invert" : ""
          }`}
        >
          {label}
        </label>
      )}

      <div
        className={`w-full border rounded-lg p-1 flex items-center h-10 ${
          invert ? "invert" : ""
        } ${error ? "border-red-600" : "border-[--foreground]"}`}
      >
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          className="w-full 
          h-full bg-transparent px-2 py-3 text-lg focus:outline-none"
        />
        {icon && (
          <span
            className="mr-2 flex items-center cursor-pointer"
            onClick={onclick}
          >
            {icon}
          </span>
        )}
      </div>

      {Boolean(error) && (
        <span className="text-red-600 text-sm ml-2">
          {typeof error === "object" ? error.message : error}
        </span>
      )}
    </div>
  );
};
