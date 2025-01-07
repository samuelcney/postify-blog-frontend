import { ReactNode } from "react";

interface SideBarContentProps {
  children?: ReactNode;
}

export const SideBarContent = ({ children }: SideBarContentProps) => {
  return <div className="w-full h-full flex flex-col">{children}</div>;
};
