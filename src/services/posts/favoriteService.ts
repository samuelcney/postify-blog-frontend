import { axiosInstance } from "../axios/axiosInstance";

const getFavoritesByPost = async (postId: string) => {
  try {
    const response = await axiosInstance.get(`/posts/${postId}/favorites`);
    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error.response.data.error || "Erro ao favoritar o post."
    );
  }
};

const favoritePost = async (postId: string, userId: string) => {
  try {
    const response = await axiosInstance.post(`/posts/${postId}/favorites`, {
      userId,
    });
    return response.data;
  } catch (error: any) {
    return Promise.reject(
      error.response.data.error || "Erro ao favoritar o post."
    );
  }
};

export const favoriteService = { getFavoritesByPost, favoritePost };
