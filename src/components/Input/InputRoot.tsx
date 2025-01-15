import { ReactNode } from "react";

interface InputRootProps {
  children: ReactNode;
  isFullWidth?: boolean;
  isRow?: boolean;
}

export const InputRoot = ({ children, isFullWidth, isRow }: InputRootProps) => {
  const isfullSize = isFullWidth ? "w-full" : "w-[75%]";
  const isFlexRow = isRow ? "flex-row" : "flex-col";

  return (
    <div
      className={`flex ${isFlexRow} ${isfullSize} gap-6 items-center justify-between`}
    >
      {children}
    </div>
  );
};
