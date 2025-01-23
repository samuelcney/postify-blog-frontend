import { PostProps } from "@/types/PostInterfaces";
import Icon from "../Icon/Icon";

import { formatPostDateTime } from "@/utils/formatPostDateTime";
import { getCategoryColor } from "@/utils/getCategoryColor";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/auth";
import { useModal } from "@/context/modal";

interface PostItemProps {
  post: PostProps;
  feedPost?: boolean;
}

export const PostItem = ({ post, feedPost }: PostItemProps) => {
  const categoryColor = post?.category?.title
    ? getCategoryColor(post.category.title)
    : "#A8A8A8";

  const [openOptions, setOpenOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        feedPost ? "w-1/2" : "w-1/3"
      } border-[0.1px] border-lightgray	flex flex-col p-2 rounded-md`}
    >
      <div className="w-full justify-between items-center flex">
        <div className="p-2 flex gap-2 items-center">
          <Icon name="CircleUserRound" size="32" />
          <p className="text-sm">{post?.user?.username}</p>
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
