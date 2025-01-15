"use client";
import { Feed } from "@/components/Feed";
import { SideBar } from "@/components/Sidebar";
import { PostItemList } from "@/components/Post/PostItemList";
import Icon from "@/components/Icon/Icon";
import { Modal } from "@/components/Modal/Modal";
import { useState } from "react";
import { useModal } from "@/context/modal";

export default function Home() {
  const { isModalOpen, closeModal } = useModal();

  return (
    <div className="w-full flex flex-1 h-screen font-[family-name:var(--font-geist-sans)">
      <div className="w-full flex flex-1 h-screen flex-row">
        <SideBar.Root>
          <SideBar.Header>
            <h1 className="text-[1.8rem] font-extrabold tracking-[0.2rem] mr-3">
              Postify
            </h1>
            <Icon name="NotepadText" size="28" />
          </SideBar.Header>

          <SideBar.Content>
            <SideBar.LeftBar />
          </SideBar.Content>
        </SideBar.Root>

        <Feed.Root>
          <Feed.Content>
            <PostItemList />
          </Feed.Content>
        </Feed.Root>

        <SideBar.Root isRight>
          <SideBar.Content>
            <SideBar.RightBar />
          </SideBar.Content>
        </SideBar.Root>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
