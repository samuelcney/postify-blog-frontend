import { useEffect, useState } from "react";
import { postService, PostProps } from "../../services/post/postService";

export const usePosts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await postService.getAllPosts();
      setPosts(data);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching posts.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, isLoading, error, refetch: fetchPosts };
};
