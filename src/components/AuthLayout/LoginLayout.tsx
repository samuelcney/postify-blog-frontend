import { signIn } from "@/services/auth/authService";
import { Button } from "../Button";
import Icon from "../Icon/Icon";
import { Input } from "../Input";
import { notify } from "../Toast/Toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schemas/auth.schema";
import { useRequestState } from "@/hooks/useRequestState";

type LoginData = z.infer<typeof loginSchema>;

export const LoginLayout = ({ onToggle }: { onToggle: () => void }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const { loading, setLoading } = useRequestState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (data: LoginData) => {
    setLoading(true);
    try {
      const userData = await signIn(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      login(userData.data);
      router.push("/home");
    } catch (error: any) {
      notify(error || "Erro ao fazer login", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-full">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex w-full h-full flex-col items-center justify-center gap-2"
      >
        <Input.Root>
          <Input.Content
            label="Email"
            icon={<Icon name="AtSign" size={26} />}
            type="text"
            register={register("email")}
            error={errors.email}
          />
          <Input.Content
            label="Senha"
            icon={
              <Icon
                name={hidePassword ? "EyeClosed" : "Eye"}
                size={26}
                onClick={() => setHidePassword(!hidePassword)}
              />
            }
            type={hidePassword ? "password" : "text"}
            register={register("password")}
            error={errors.password}
          />
        </Input.Root>

        <div className="w-[75%] flex justify-end mt-2 mb-1">
          <p className="text-sm hover:cursor-pointer tracking-wide">
            Esqueci minha senha
          </p>
        </div>

        <Button.Root>
          <Button.Content title="Entrar" type="submit" isLoading={loading} />
        </Button.Root>

        <div className="w-[80%] flex justify-center mt-6">
          <p
            className="text-sm hover:cursor-pointer tracking-wide hover:underline"
            onClick={onToggle}
          >
            Não possui uma conta? Cadastre-se aqui
          </p>
        </div>
      </form>
    </div>
  );
};
