import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  password: z.string().nonempty({ message: "" }),
});

const registerSchema = z
  .object({
    username: z.string().nonempty({ message: "" }),
    firstName: z.string().nonempty({ message: "" }),
    lastName: z.string().nonempty({ message: "" }),
    email: z
      .string()
      .nonempty({ message: "Email é obrigatório" })
      .email({ message: "Email inválido" }),
    password: z
      .string()
      .min(8, { message: "Senha deve ter no mínimo 8 caracteres" }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  });

export { loginSchema, registerSchema };
