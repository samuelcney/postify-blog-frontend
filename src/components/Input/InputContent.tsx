import { ReactNode } from "react";

interface InputProps {
  name: string;
  value?: string;
  placeholder?: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  type?: string;
  labelText?: string;
  onclick?: () => void;
  invert?: boolean;
  errorMessage?: string;
  isError?: boolean;
}
export const InputContent = ({
  onchange,
  value,
  placeholder,
  icon,
  name,
  type,
  labelText,
  onclick,
  invert,
  errorMessage,
  isError,
}: InputProps) => {
  const isInverted = invert ? "invert" : "";
  return (
    <div className="flex flex-col w-full gap-2">
      {labelText && (
        <div className="flex flex-col w-full">
          <label className={`text-[--foreground] text-sm ml-1 ${isInverted}`}>
            {labelText}
          </label>
        </div>
      )}

      <div
        className={`w-full border border-[--foreground] rounded-lg bg-transparent p-1 flex h-10 ${isInverted} ${
          isError ? "border-red-600" : ""
        }`}
      >
        <input
          name={name}
          type={type}
          className="w-full bg-transparent outline-none px-2 py-3 text-lg"
          value={value}
          placeholder={placeholder}
          onChange={onchange}
        />
        {icon && (
          <span className="mr-2 h-full items-center flex" onClick={onclick}>
            {icon}
          </span>
        )}
      </div>
      {isError && (
        <span className="text-red-600 text-sm ml-2">{errorMessage}</span>
      )}
    </div>
  );
};
