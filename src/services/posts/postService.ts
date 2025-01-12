import { axiosInstance } from "../axios/axiosInstance";

export interface PostProps {
  id: number | string;
  content: string;
  user: { username: string };
  createdAt: string;
  updatedAt?: string;
  category: { title: string };
}

const getAllPosts = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const postService = {
  getAllPosts,
};
