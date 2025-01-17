import { ReactNode } from "react";

interface LoginRootProps {
  children: ReactNode;
  isRegister?: boolean;
}

export const AuthRoot = ({ children, isRegister }: LoginRootProps) => {
  return (
    <div
      className={`flex flex-col w-[55%] h-full overflow-hidden backdrop-blur-xl bg-transparent justify-evenly ${
        isRegister ? "items-end" : ""
      }`}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[1.55rem] font-bold tracking-widest">
          {!isRegister ? "Bem vindo ao Postify!" : ""}
        </h1>
        <h1 className="text-[1.3rem] font-semibold tracking-widest">
          {!isRegister
            ? "Faça o login para entrar"
            : "Faça aqui o seu cadastro"}
        </h1>
      </div>
      <div className="flex w-full p-1">{children}</div>
    </div>
  );
};
