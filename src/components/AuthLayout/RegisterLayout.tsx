import { useState } from "react";
import { Button } from "../Button";
import Icon from "../Icon/Icon";
import { Input } from "../Input";
import { singUp } from "@/services/auth/authService";
import { notify } from "../Toast/Toast";
import { useRequestState } from "@/hooks/useRequestState";

export const RegisterLayout = ({ onToggle }: { onToggle: () => void }) => {
  const size = 20;
  const [hidePassword, setHidePassword] = useState(true);
  const { loading, setError, setLoading, isError } = useRequestState();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleRegister = async () => {
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      notify("As senhas não coincidem", "error");
      return;
    }

    if (
      !formData.email ||
      !formData.password ||
      !formData.username ||
      !formData.firstName ||
      !formData.lastName
    ) {
      setError(true);
    }
    try {
      const userData = await singUp(formData);
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
    <div className="flex w-full h-full flex-col items-center justify-center ">
      <Input.Root>
        <Input.Content
          labelText="Email"
          name="email"
          icon={<Icon name="AtSign" size={size} />}
          onchange={(text) => handleInputChange("email", text.target.value)}
          type="text"
          isError={!formData.email && isError}
        />

        <Input.Content
          labelText="Nome de usuário"
          name="username"
          icon={<Icon name="User" size={size} />}
          onchange={(text) => handleInputChange("username", text.target.value)}
          type="text"
          isError={!formData.username && isError}
        />

        <Input.Content
          labelText="Primeiro Nome"
          name="firstName"
          onchange={(text) => handleInputChange("firstName", text.target.value)}
          type="text"
          isError={!formData.firstName && isError}
        />

        <Input.Content
          labelText="Sobrenome"
          name="lastName"
          onchange={(text) => handleInputChange("lastName", text.target.value)}
          type="text"
          isError={!formData.lastName && isError}
        />

        <Input.Content
          labelText="Senha"
          name="password"
          icon={<Icon name={hidePassword ? "EyeClosed" : "Eye"} size={size} />}
          onchange={(text) => handleInputChange("password", text.target.value)}
          type={hidePassword ? "password" : "text"}
          onclick={() => setHidePassword(!hidePassword)}
          isError={!formData.password && isError}
        />

        <Input.Content
          labelText="Confirmar senha"
          name="confirmPassword"
          icon={<Icon name={hidePassword ? "EyeClosed" : "Eye"} size={size} />}
          onchange={(text) =>
            handleInputChange("confirmPassword", text.target.value)
          }
          type={hidePassword ? "password" : "text"}
          onclick={() => setHidePassword(!hidePassword)}
          isError={!formData.confirmPassword && isError}
        />
      </Input.Root>

      <Button.Root>
        <Button.Content
          title="Cadastrar"
          onclick={handleRegister}
          isLoading={loading}
        />
        <div className="w-[80%] flex justify-center">
          <p
            className="text-sm mr-1 hover:cursor-pointer tracking-wide hover:underline"
            onClick={onToggle}
          >
            Já possui uma conta? Faça login aqui
          </p>
        </div>
      </Button.Root>
    </div>
  );
};
