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
