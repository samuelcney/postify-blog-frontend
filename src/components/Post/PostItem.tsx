import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import axios from "axios";
import { PostProps } from "@/services/post/postService";

export const PostItem = ({ ...post }: PostProps) => {
  return (
    <div className="w-[50%] border-[0.1px] border-[#A8A8A8] flex flex-col p-2 rounded-md">
      <div className="w-full p-2 flex gap-2 items-center">
        <Icon name="CircleUserRound" size="32" />
        <p className="text-sm">{post?.user?.username}</p>
        <p className="text-[#A8A8A8] text-sm">•</p>
        <p className="text-[#A8A8A8] text-sm italic">
          {post?.createdAt.split(" ").map((part, index) => (
            <span className="" key={index}>
              {part}
              {index === 0 && <span className="mx-[0.30rem]">às</span>}
            </span>
          ))}
        </p>
      </div>

      <div className="w-full justify-center flex py-2">
        <div className="w-[97%] bg-[#A8A8A8] h-[0.1px]" />
      </div>

      <div className="flex flex-col justify-between h-full">
        <p className="text-sm p-2 text-justify">{post?.content}</p>

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
            <p className="text-[#A8A8A8] text-xs italic">
              # {post?.category.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
