import { useEffect, useState } from "react";
import { postService } from "../../services/posts/postService";
import { PostProps, PostRequestDTO } from "@/types/PostInterfaces";

export const usePosts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await postService.getAllPosts();
      setPosts(data.reverse());
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching posts.");
    } finally {
      setIsLoading(false);
    }
  };

  const createPost = async (data: PostRequestDTO) => {
    if (!data.content || !data.userId || !data.categoryId)
      throw new Error("Preencha todos os campos.");
    try {
      const response = await postService.createPost(data);
      setPosts((prevPosts) => [response, ...prevPosts]);
    } catch (error: any) {
      setError(
        error.response.data.message ||
          "An error occurred while creating a post."
      );
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, isLoading, error, refetch: fetchPosts, createPost };
};
