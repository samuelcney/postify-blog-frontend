import { SideBar } from ".";
import packageJson from "../../../package.json";
const version = packageJson.version;

export const LeftSideBar = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-4 mt-12 pl-3">
        <SideBar.Item IconName="House" Text="Página Inicial" />
        <SideBar.Item IconName="Search" Text="Pesquisa" />
        <SideBar.Item IconName="User" Text="Perfil" />
        <SideBar.Item IconName="Settings" Text="Configurações" />
        <SideBar.Item IconName="LogOut" Text="Sair" />
      </div>
      <div className="w-full items-center justify-center">
        <h1 className="font-light text-center text-sm">V {version}</h1>
      </div>
    </div>
  );
};
