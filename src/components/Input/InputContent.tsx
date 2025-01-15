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
}: InputProps) => {
  const isInverted = invert ? "invert" : "";
  return (
    <div className="flex flex-col w-full gap-1">
      {labelText && (
        <div className="flex flex-col w-full">
          <label
            className={`text-[--foreground] text-base ml-2 font-semibold ${isInverted}`}
          >
            {labelText}
          </label>
        </div>
      )}

      <div
        className={`w-full border border-[--foreground] rounded-lg p-3 bg-transparent flex h-10 ${isInverted}`}
      >
        <input
          name={name}
          type={type}
          className="w-full bg-transparent outline-none pl-2 text-lg"
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
    </div>
  );
};
