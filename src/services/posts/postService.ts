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
  try {
    const response = await axiosInstance.post("/posts", {
      content: data.content,
      userId: data.userId,
      categoryId: data.categoryId,
    });
    return response.data;
  } catch (error: any) {
    console.log("service", error);
  }
};

export const postService = {
  getAllPosts,
  createPost,
};
