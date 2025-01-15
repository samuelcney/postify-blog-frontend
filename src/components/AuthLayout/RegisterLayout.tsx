import { useState } from "react";
import { Button } from "../Button";
import Icon from "../Icon/Icon";
import { Input } from "../Input";

export const RegisterLayout = ({ onToggle }: { onToggle: () => void }) => {
  const size = 24;
  const [hidePassword, setHidePassword] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <Input.Root>
        <Input.Content
          labelText="Email"
          name="email"
          icon={<Icon name="AtSign" size={size} />}
          onchange={(text) => handleInputChange("email", text.target.value)}
          type="text"
        />

        <Input.Content
          labelText="Nome de usuário"
          name="username"
          icon={<Icon name="User" size={size} />}
          onchange={(text) => handleInputChange("username", text.target.value)}
          type="text"
        />

        <Input.Content
          labelText="Senha"
          name="password"
          icon={<Icon name={hidePassword ? "EyeClosed" : "Eye"} size={size} />}
          onchange={(text) => handleInputChange("password", text.target.value)}
          type={hidePassword ? "password" : "text"}
          onclick={() => setHidePassword(!hidePassword)}
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
        />
      </Input.Root>

      <Button.Root>
        <Button.Content title="Cadastrar" />
      </Button.Root>

      <div className="w-[80%] items-end flex justify-center mt-8">
        <p
          className="text-sm mr-1 hover:cursor-pointer tracking-wide hover:underline"
          onClick={onToggle}
        >
          Já possui uma conta? Faça login aqui
        </p>
      </div>
    </div>
  );
};
