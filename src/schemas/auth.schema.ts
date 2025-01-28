import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  password: z.string(),
});

const registerSchema = z
  .object({
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email({ message: "Email inválido" }),
    password: z
      .string()
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  });

export { loginSchema, registerSchema };
