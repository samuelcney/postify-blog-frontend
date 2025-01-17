import { axiosInstance } from "../axios/axiosInstance";

const getAllCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error.response.data.error || "Erro ao carregar as categorias."
    );
  }
};

export const categoryService = { getAllCategories };
