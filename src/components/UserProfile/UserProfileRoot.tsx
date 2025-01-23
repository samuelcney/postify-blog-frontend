import { ReactNode } from "react";

interface ProfileRootProps {
  children?: ReactNode;
}

export const UserProfileRoot = ({ children }: ProfileRootProps) => {
  return <div className="w-full mt-10">{children}</div>;
};
