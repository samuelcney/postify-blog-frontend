import { icons } from "lucide-react";
import Icon from "../Icon/Icon";

type IconNameType = keyof typeof icons;

interface SideBarItemProps {
  IconName?: IconNameType;
  Text?: string;
}

export const SideBarItem = ({ IconName = "House", Text }: SideBarItemProps) => {
  return (
    <div className="w-full flex gap-3 h-[3.2rem] items-center hover:bg-[#323232] rounded-lg px-1 cursor-pointer">
      <Icon name={IconName} />
      <h1 className="font-bold tracking-widest">{Text}</h1>
    </div>
  );
};
