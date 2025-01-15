import { PostProps } from "@/types/PostInterfaces";
import Icon from "../Icon/Icon";

import { formatPostDateTime } from "@/utils/formatPostDateTime";
import { getCategoryColor } from "@/utils/getCategoryColor";

export const PostItem = ({ ...post }: PostProps) => {
  const categoryColor = post?.category?.title
    ? getCategoryColor(post.category.title)
    : "#A8A8A8";
  return (
    <div className="w-[50%] border-[0.1px] border-lightgray	flex flex-col p-2 rounded-md">
      <div className="w-full p-2 flex gap-2 items-center">
        <Icon name="CircleUserRound" size="32" />
        <p className="text-sm">{post?.user?.username}</p>
        <p className="text-lightgray text-sm">•</p>
        <p className="text-lightgray text-xs italic tracking-wider">
          {formatPostDateTime(post?.createdAt || "")}
        </p>
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
              className="hover:opacity-50 transition duration-200"
            />
            <Icon
              name="MessageCircle"
              size={28}
              className="hover:opacity-50 transition duration-200"
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
