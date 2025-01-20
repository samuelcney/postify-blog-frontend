import { useEffect } from "react";
import Icon from "../Icon/Icon";
import { PostItem } from "./PostItem";
import { usePosts } from "@/hooks/post/usePost";

export const PostItemList = () => {
  const { posts, isLoading } = usePosts();

  if (posts.length === 0) {
    return <div>Parece que ainda não tem nenhum post por aqui...</div>;
  }

  return (
    <>
      {isLoading && (
        <div className="flex items-center">
          <Icon name="LoaderCircle" className="animate-spin" size={40} />
        </div>
      )}
      {posts?.map((post) => (
        <PostItem {...post} key={post.id} />
      ))}
    </>
  );
};
