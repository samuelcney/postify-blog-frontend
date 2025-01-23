import { ReactNode } from "react";

interface RightSideBarProps {
  children?: ReactNode;
}

export const RightSideBar = ({ children }: RightSideBarProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      {children}
    </div>
  );
};
