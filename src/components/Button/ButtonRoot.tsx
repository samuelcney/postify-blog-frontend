import { ReactNode } from "react";

interface ButtonRootProps {
  children: ReactNode;
  isFullWidth?: boolean;
  isRow?: boolean;
}

export const ButtonRoot = ({
  children,
  isFullWidth,
  isRow,
}: ButtonRootProps) => {
  const isfullSize = isFullWidth ? "w-full" : "w-[80%]";
  const isFlexRow = isRow ? "flex-row" : "flex-col";

  return (
    <div className={`flex ${isFlexRow} ${isfullSize} gap-6 items-center mt-12`}>
      {children}
    </div>
  );
};
