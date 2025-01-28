import { useAuth } from "@/context/auth";
import { usePosts } from "@/hooks/post/usePost";
import Icon from "../Icon/Icon";
import { PostItem } from "../Post/PostItem";

export const UserProfileContent = () => {
  const { user } = useAuth();

  const { posts } = usePosts();

  const postsArray = posts.filter((post) => user?.id === post.user.id);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center ml-24">
        <Icon
          name="CircleUserRound"
          size={150}
          strokeWidth={0.5}
          className="flex-shrink-0"
        />

        <div className="flex flex-col ml-12 gap-4">
          <h1 className="font-semibold text-2xl">@ {user?.username}</h1>
          <h2 className="ml-1">
            {user?.firstName} {user?.lastName}
          </h2>
          <h3 className="ml-1">
            {postsArray.length === 1
              ? `${postsArray.length} publicação`
              : `${postsArray.length} publicações`}
          </h3>
        </div>
      </div>

      <div className="w-full justify-center flex py-2 my-8">
        <div className="w-[97%] bg-lightgray h-[0.1px]" />
      </div>

      <div
        className="flex flex-row h-full py-4 gap-12 overflow-y-auto flex-wrap justify-center"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#ffffff transparent",
        }}
      >
        {postsArray?.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
