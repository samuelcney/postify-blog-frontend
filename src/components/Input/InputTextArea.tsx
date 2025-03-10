import { ReactNode } from "react";

interface InputProps {
  name: string;
  value?: string;
  placeholder?: string;
  onchange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  icon?: ReactNode;
  type?: string;
  labelText?: string;
  invert?: boolean;
  errorMessage?: string;
  isError?: boolean;
}
export const InputTextArea = ({
  onchange,
  value,
  placeholder,
  name,
  labelText,
  invert,
  isError,
  errorMessage,
}: InputProps) => {
  const isInverted = invert ? "invert" : "";
  return (
    <div className="flex flex-col w-full gap-1 flex-1">
      {labelText && (
        <div className="flex flex-col w-full">
          <label className={`text-[--foreground] text-base ml-2 ${isInverted}`}>
            {labelText}
          </label>
        </div>
      )}

      <div
        className={`w-full h-[220px] border border-[--foreground] rounded-lg p-3 ${isInverted} bg-background ${
          isError ? "border-red-600" : ""
        }`}
      >
        <textarea
          name={name}
          onChange={onchange}
          className="w-full bg-background outline-none pl-2 text-lg h-full resize-none"
          value={value}
          placeholder={placeholder}
        />
      </div>
      {isError && (
        <span className="text-red-600 text-sm ml-2">{errorMessage}</span>
      )}
    </div>
  );
};
