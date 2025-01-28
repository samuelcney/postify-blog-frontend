import { useState } from "react";
import { Button } from "../Button";
import Icon from "../Icon/Icon";
import { Input } from "../Input";
import { singUp } from "@/services/auth/authService";
import { notify } from "../Toast/Toast";
import { useRequestState } from "@/hooks/useRequestState";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

type RegisterData = z.infer<typeof registerSchema>;

export const RegisterLayout = ({ onToggle }: { onToggle: () => void }) => {
  const size = 20;
  const [hidePassword, setHidePassword] = useState(true);
  const { loading, setLoading } = useRequestState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data: RegisterData) => {
    setLoading(true);
    try {
      const userData = await singUp(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      notify("Cadastro realizado com sucesso", "success");
      onToggle();
      return userData;
    } catch (error: any) {
      notify(error, "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <form
        className="flex w-full h-full flex-col items-center justify-center"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Input.Root>
          <Input.Content
            label="Email"
            icon={<Icon name="AtSign" size={size} />}
            type="text"
            register={register("email")}
            error={errors.email}
          />

          <Input.Content
            label="Nome de usuário"
            icon={<Icon name="User" size={size} />}
            type="text"
            register={register("username")}
            error={errors.username}
          />

          <Input.Content
            label="Primeiro Nome"
            type="text"
            register={register("firstName")}
            error={errors.firstName}
          />

          <Input.Content
            label="Sobrenome"
            type="text"
            register={register("lastName")}
            error={errors.lastName}
          />

          <Input.Content
            label="Senha"
            icon={
              <Icon name={hidePassword ? "EyeClosed" : "Eye"} size={size} />
            }
            type={hidePassword ? "password" : "text"}
            onclick={() => setHidePassword(!hidePassword)}
            register={register("password")}
            error={errors.password}
          />

          <Input.Content
            label="Confirmar senha"
            register={register("passwordConfirmation")}
            icon={
              <Icon name={hidePassword ? "EyeClosed" : "Eye"} size={size} />
            }
            type={hidePassword ? "password" : "text"}
            onclick={() => setHidePassword(!hidePassword)}
            error={errors.passwordConfirmation}
          />
        </Input.Root>

        <Button.Root>
          <Button.Content title="Cadastrar" isLoading={loading} />
          <div className="w-[80%] flex justify-center">
            <p
              className="text-sm mr-1 hover:cursor-pointer tracking-wide hover:underline"
              onClick={onToggle}
            >
              Já possui uma conta? Faça login aqui
            </p>
          </div>
        </Button.Root>
      </form>
    </div>
  );
};
