import { axiosInstance } from "../axios/axiosInstance";

const getAllUser = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error.response.data.error || "Erro ao buscar usuários."
    );
  }
};

const getUserById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);

    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error.response.data.error || "Erro ao encontrar usuário."
    );
  }
};

export const userService = { getAllUser, getUserById };
