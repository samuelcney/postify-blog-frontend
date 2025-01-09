import { useState } from "react";
import { Button } from "../Button";
import Icon from "../Icon/Icon";
import { Input } from "../Input";
import { useRouter } from "next/navigation";

export const LoginLayout = ({ onToggle }: { onToggle: () => void }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <Input.Root>
        <Input.Content
          labelText="Email"
          name="email"
          icon={<Icon name="AtSign" size={26} />}
          onchange={(e) => setUsername(e.target.value)}
          type="text"
        />

        <Input.Content
          labelText="Senha"
          name="senha"
          icon={<Icon name={hidePassword ? "EyeClosed" : "Eye"} size={26} />}
          onchange={(e) => setPassword(e.target.value)}
          type={hidePassword ? "password" : "text"}
          onclick={() => setHidePassword(!hidePassword)}
        />
      </Input.Root>

      <div className="w-[80%] items-end flex justify-end mt-2">
        <p className="text-sm mr-1 hover:cursor-pointer tracking-wide">
          Esqueci minha senha
        </p>
      </div>

      <Button.Root>
        <Button.Content title="Entrar" onclick={() => router.push("/home")} />
      </Button.Root>

      <div className="w-[80%] items-end flex justify-center mt-8">
        <p
          className="text-sm mr-1 hover:cursor-pointer tracking-wide hover:underline"
          onClick={onToggle}
        >
          Não possui uma conta? Cadastre-se aqui
        </p>
      </div>
    </div>
  );
};
