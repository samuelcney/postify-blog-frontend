import { ButtonHTMLAttributes, ReactNode } from "react";
import Icon from "../Icon/Icon";

interface ButtonContentProps {
  title: string;
  onclick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  isLoading?: boolean;
}

export const ButtonContent = ({
  title,
  onclick,
  type,
  isLoading,
}: ButtonContentProps) => {
  return (
    <div className="w-full rounded-lg p-2 flex bg-[--foreground] text-[--background] transition-all duration-[350ms] h-10 hover:scale-[1.01]">
      <button
        className="w-full bg-transparent outline-none pl-2 text-xl font-bold justify-center items-center flex"
        onClick={onclick}
        type={type}
        disabled={isLoading}
      >
        {isLoading ? (
          <Icon name="LoaderCircle" className="animate-spin" size={40} />
        ) : (
          <h1 className="text-[#171717] font-bold tracking-wider text-xl">
            {title.toUpperCase()}
          </h1>
        )}
      </button>
    </div>
  );
};
