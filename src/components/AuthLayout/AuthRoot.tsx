import { ReactNode } from "react";

interface LoginRootProps {
  children: ReactNode;
  isRegister?: boolean;
}

export const AuthRoot = ({ children, isRegister }: LoginRootProps) => {
  return (
    <div
      className={`flex flex-col w-[50%] h-full overflow-hidden backdrop-blur-xl bg-transparent justify-center ${
        isRegister ? "border-r-2" : "border-l-2"
      } items-center gap-6`}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-[1.8rem] font-bold tracking-widest">
          {!isRegister ? "Bem vindo ao Postify!" : ""}
        </h1>
        <h1 className="text-[1.4rem] font-semibold tracking-widest">
          {!isRegister
            ? "Faça o login para entrar"
            : "Faça aqui o seu cadastro"}
        </h1>
      </div>
      <div className="flex w-[72%] p-1 justify-center items-center">
        {children}
      </div>
    </div>
  );
};
