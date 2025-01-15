import { useRouter } from "next/navigation";
import { SideBar } from ".";
import packageJson from "../../../package.json";
import { useAuth } from "@/context/auth";
const version = packageJson.version;

export const LeftSideBar = () => {
  const router = useRouter();

  const { logout } = useAuth();

  const handleLogout = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    logout();
    router.push("/");
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-4 mt-12 pl-3">
        <SideBar.Item
          IconName="House"
          Text="Página Inicial"
          onclick={() => router.refresh()}
        />
        <SideBar.Item IconName="Search" Text="Pesquisa" />
        <SideBar.Item IconName="User" Text="Perfil" />
        <SideBar.Item IconName="Settings" Text="Configurações" />
        <SideBar.Item
          IconName="LogOut"
          Text="Sair"
          onclick={() => handleLogout()}
        />
      </div>
      <div className="w-full items-center justify-center">
        <h1 className="font-light text-center text-sm text-[#A8A8A8]">
          V {version}
        </h1>
      </div>
    </div>
  );
};
