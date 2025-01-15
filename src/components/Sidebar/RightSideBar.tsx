import { useAuth } from "@/context/auth";
import Icon from "../Icon/Icon";

export const RightSideBar = () => {
  const { user } = useAuth();

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <div className="w-[95%] h-20 flex flex-row items-center px-3 gap-2">
          <Icon name="CircleUserRound" size="50" className="border-l-2 pl-2" />
          <span className="flex flex-col">
            <h1 className="text-lg tracking-widest font-semibold">
              {user?.username}
            </h1>
            <h2 className="text-sm tracking-widest text-[#A8A8A8]">
              {user?.firstName} {user?.lastName}
            </h2>
          </span>
        </div>
      </div>
    </div>
  );
};
