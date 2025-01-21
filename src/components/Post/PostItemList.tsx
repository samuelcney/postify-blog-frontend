import Icon from "../Icon/Icon";
import { PostItem } from "./PostItem";
import { usePosts } from "@/hooks/post/usePost";

export const PostItemList = () => {
  const { posts, isLoading } = usePosts();

  if (posts.length === 0) {
    return (
      <div className="flex items-center">
        <Icon name="LoaderCircle" className="animate-spin" size={40} />
      </div>
    );
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
