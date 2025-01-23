import { ReactNode } from "react";

interface SideBarRootProps {
  children?: ReactNode;
  isRight?: boolean;
}

export const SideBarRoot = ({ children, isRight }: SideBarRootProps) => {
  return (
    <div
      className={`h-full flex flex-col ${
        isRight ? "flex-[1.4]" : "flex-[1]"
      } bg-[--background] ${
        !isRight ? "border-r" : "border-0"
      } border-[--foreground] p-4 sticky`}
    >
      {children}
    </div>
  );
};
