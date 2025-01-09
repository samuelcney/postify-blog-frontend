import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonContentProps {
  title: string;
  onclick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const ButtonContent = ({ title, onclick, type }: ButtonContentProps) => {
  return (
    <div className="w-full rounded-lg p-2 flex bg-[--foreground] text-[--background] transition-all duration-[350ms] h-14 hover:scale-[1.01]">
      <button
        className="w-full bg-transparent outline-none pl-2 text-xl font-bold"
        onClick={onclick}
        type={type}
      >
        <h1>{title}</h1>
      </button>
    </div>
  );
};
