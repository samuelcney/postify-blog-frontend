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
}
export const InputTextArea = ({
  onchange,
  value,
  placeholder,
  name,
  labelText,
  invert,
}: InputProps) => {
  const isInverted = invert ? "invert" : "";
  return (
    <div className="flex flex-col w-full gap-1 h-full">
      {labelText && (
        <div className="flex flex-col w-full">
          <label className={`text-[--foreground] text-base ml-2 ${isInverted}`}>
            {labelText}
          </label>
        </div>
      )}

      <div
        className={`w-full border border-[--foreground] rounded-lg p-3 bg-transparent flex h-full ${isInverted}`}
      >
        <textarea
          name={name}
          onChange={onchange}
          className="w-full bg-transparent outline-none pl-2 text-lg h-52 resize-none"
          value={value}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
