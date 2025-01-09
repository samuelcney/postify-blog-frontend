import { ReactNode } from "react";

interface LoginRootProps {
  children: ReactNode;
  isRegister?: boolean;
}

export const AuthRoot = ({ children, isRegister }: LoginRootProps) => {
  return (
    <div
      className={`flex w-[90%] h-[90%] rounded-2xl border-[--foreground] border overflow-hidden ${
        isRegister ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex-grow h-full bg-[--foreground]">
        <div className="flex flex-col h-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-[--background] text-4xl font-bold tracking-wide">
              {isRegister
                ? "Não tem uma conta? Sem problemas"
                : "Bem-vindo ao Postify!"}
            </h1>
            <p className="text-[--background] text-4xl mt-2 tracking-wide">
              {isRegister
                ? "Faça aqui seu cadastro"
                : "Faça login para continuar"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-grow h-full p-6">{children}</div>
    </div>
  );
};
