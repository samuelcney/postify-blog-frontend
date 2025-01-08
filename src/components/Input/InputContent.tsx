import { ReactNode } from "react";

interface InputProps {
  name: string;
  value: string;
  placeholder?: string;
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  type?: string;
  labelText?: string;
}
export const InputContent = ({
  onchange,
  value,
  placeholder,
  icon,
  name,
  type,
  labelText,
}: InputProps) => {
  return (
    <div className="flex flex-col w-full gap-1">
      {labelText && (
        <div className="flex flex-col w-full">
          <label className="text-[--foreground] text-sm ml-2">
            {labelText}
          </label>
        </div>
      )}

      <div className="w-full border border-[--foreground] rounded-2xl p-3 bg-transparent flex">
        <input
          name={name}
          type={type}
          className="w-full bg-transparent outline-none"
          value={value}
          placeholder={placeholder}
        />
        {icon && <span>{icon}</span>}
      </div>
    </div>
  );
};
