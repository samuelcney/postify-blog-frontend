import { useState } from "react";
import { Button } from "../Button";
import Icon from "../Icon/Icon";
import { Input } from "../Input";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import { signIn } from "@/services/auth/authService";
import { toast, TypeOptions } from "react-toastify";

export const LoginLayout = ({ onToggle }: { onToggle: () => void }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const notify = (message: string, type: TypeOptions) =>
    toast(message, { type });

  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const userData = await signIn({ email, password });

      await new Promise((resolve) => setTimeout(resolve, 1000));
      login(userData);
      router.push("/home");
    } catch (error: any) {
      notify(error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <Input.Root>
        <Input.Content
          labelText="Email"
          name="email"
          icon={<Icon name="AtSign" size={26} />}
          onchange={(e) => setEmail(e.target.value)}
          type="text"
          value={email}
        />

        <Input.Content
          labelText="Senha"
          name="senha"
          icon={<Icon name={hidePassword ? "EyeClosed" : "Eye"} size={26} />}
          onchange={(e) => setPassword(e.target.value)}
          type={hidePassword ? "password" : "text"}
          onclick={() => setHidePassword(!hidePassword)}
          value={password}
        />
      </Input.Root>

      <div className="w-[80%] items-end flex justify-end mt-2">
        <p className="text-sm mr-1 hover:cursor-pointer tracking-wide">
          Esqueci minha senha
        </p>
      </div>

      <Button.Root>
        <Button.Content
          title="Entrar"
          onclick={() => handleLogin()}
          isLoading={loading}
        />
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
