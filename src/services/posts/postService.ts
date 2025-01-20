import { axiosInstance } from "../axios/axiosInstance";

const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

const createPost = async (data: {
  content: string;
  userId: string | number;
  categoryId: number;
}) => {
  if (!data.content || !data.userId || !data.categoryId) {
    throw new Error("Missing required fields");
  }
  try {
    const response = await axiosInstance.post("/posts", {
      content: data.content,
      userId: data.userId,
      categoryId: data.categoryId,
    });
    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error.response.data.error || "Erro ao criar um post."
    );
  }
};

const deletePost = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/posts/${id}`);
    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error.response.data.error || "Erro ao deletar o post."
    );
  }
};

export const postService = {
  getAllPosts,
  createPost,
  deletePost,
};
