import { icons } from "lucide-react";
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof icons;
  size?: string | number;
}

const Icon = ({ name, size, ...rest }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...rest} size={size} />;
};

export default Icon;
