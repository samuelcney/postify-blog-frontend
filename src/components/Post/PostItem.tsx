import { PostProps } from "@/types/PostInterfaces";
import Icon from "../Icon/Icon";

import { formatPostDateTime } from "@/utils/formatPostDateTime";
import { getCategoryColor } from "@/utils/getCategoryColor";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/auth";
import { useModal } from "@/context/modal";
import { useRouter } from "next/navigation";
import { notify } from "../Toast/Toast";
import { favoriteService } from "@/services/posts/favoriteService";
import { set } from "react-hook-form";

interface PostItemProps {
  post: PostProps;
  feedPost?: boolean;
}

export const PostItem = ({ post, feedPost }: PostItemProps) => {
  const categoryColor = post?.category?.title
    ? getCategoryColor(post.category.title)
    : "#A8A8A8";

  const [openOptions, setOpenOptions] = useState(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const optionsRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const { user } = useAuth();
  const { openModal } = useModal();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target as Node)
    ) {
      setOpenOptions(false);
    }
  };

  const loadFavoritePosts = async () => {
    try {
      const response = await favoriteService.getFavoritesByPost(post.id);
      if (response) {
        setIsFavorite(
          response.some((favorite: any) => favorite.user.id === user?.id)
        );
      }
    } catch (err: any) {
      notify(err, "error");
      setIsFavorite((prev) => !prev);
    }
  };

  useEffect(() => {
    loadFavoritePosts();
  }, [user?.id]);

  const handleFavoritePost = async (postId: string, userId: string) => {
    try {
      await favoriteService.favoritePost(postId, userId);
      setIsFavorite((prev) => !prev);
    } catch (err: any) {
      notify(err, "error");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        feedPost ? "w-1/2" : "w-1/3 h-1/2"
      } border-[0.1px] border-lightgray	flex flex-col p-2 rounded-md`}
    >
      <div className="w-full justify-between items-center flex">
        <div className="p-2 flex gap-2 items-center">
          <Icon name="CircleUserRound" size="32" />
          <p
            className="text-sm cursor-pointer"
            onClick={() => router.push(`/profile/${post?.user?.id}`)}
          >
            {post?.user?.username}
          </p>
          <p className="text-lightgray text-sm">•</p>
          <p className="text-lightgray text-xs italic tracking-wider">
            {formatPostDateTime(post?.createdAt || "")}
          </p>
        </div>

        <span className="relative cursor-pointer mr-2">
          <Icon
            name="Ellipsis"
            size="32"
            onClick={() => {
              setOpenOptions((prev) => !prev);
            }}
          />

          {openOptions && (
            <span
              ref={optionsRef}
              className="absolute right-[-480%] top-[-50%] bg-[#171717] text-white p-2 rounded-md shadow-md w-[130px] z-50 cursor-pointer gap-2 flex flex-col"
            >
              <p className="hover:bg-[#323232] p-2 rounded-md">Ver detalhes</p>

              {user?.id === post?.user?.id && (
                <span
                  className="flex flex-row items-center gap-2 hover:bg-[#323232] p-2 rounded-md"
                  onClick={() => openModal("deletePost", { postId: post?.id })}
                >
                  <p>Excluir</p>
                  <Icon name="Trash2" size={18} />
                </span>
              )}
            </span>
          )}
        </span>
      </div>

      <div className="w-full justify-center flex py-2">
        <div className="w-[97%] bg-lightgray h-[0.1px]" />
      </div>

      <div className="flex flex-col justify-between h-full">
        <p
          className="text-sm p-2 text-justify break-words"
          style={{ wordBreak: "break-word" }}
        >
          {post?.content}
        </p>

        <div className="w-full flex p-2 gap-4 items-center">
          <div className="flex gap-4 w-full">
            <Icon
              name="Heart"
              size={28}
              className="hover:opacity-50 transition duration-200 cursor-pointer"
              fill={isFavorite ? "red" : "none"}
              color={isFavorite ? "red" : "white"}
              onClick={() => handleFavoritePost(post?.id, user?.id ?? "")}
            />
            <Icon
              name="MessageCircle"
              size={28}
              className="hover:opacity-50 transition duration-200 cursor-pointer"
            />
          </div>

          <div className="flex w-full items-center justify-end">
            <p
              className={`text-xs italic tracking-wider`}
              style={{ color: categoryColor }}
            >
              # {post?.category.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
