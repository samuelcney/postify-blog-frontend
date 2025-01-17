import { axiosInstance } from "../axios/axiosInstance";

interface User {
  email: string;
  password: string;
}

export const signIn = async (data: User) => {
  try {
    const response = await axiosInstance.post("/login", data);
    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error.response.data.error || "Erro ao realizar login"
    );
  }
};

export const singUp = async (data: UserCreateDTO) => {
  if (
    !data.email ||
    !data.password ||
    !data.username ||
    !data.firstName ||
    !data.lastName
  )
    return Promise.reject("Preencha todos os campos");
  try {
    const response = await axiosInstance.post("/users", {
      username: data.username,
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
    return response.data;
  } catch (error: any) {
    return Promise.reject(error.response.data.message);
  }
};
