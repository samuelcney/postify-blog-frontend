import { axiosInstance } from "../axios/axiosInstance";

const getAllCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const categoryService = { getAllCategories };
