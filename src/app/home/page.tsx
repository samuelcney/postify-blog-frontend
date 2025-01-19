"use client";
import { Feed } from "@/components/Feed";
import { SideBar } from "@/components/Sidebar";
import { PostItemList } from "@/components/Post/PostItemList";
import Icon from "@/components/Icon/Icon";
import { Modal } from "@/components/Modal/index";
import { useModal } from "@/context/modal";
import { useState } from "react";

export default function Home() {
  const { isModalOpen, closeModal } = useModal();

  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefreshFeed = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="w-full flex flex-1 h-screen font-[family-name:var(--font-geist-sans)">
      <div className="w-full flex flex-1 h-screen flex-row">
        <SideBar.Root>
          <SideBar.Header>
            <h1
              className="text-[2rem] font-extrabold tracking-[0.22rem] mr-3 text-transparent"
              style={{ WebkitTextStroke: "2px #ffffff" }}
            >
              Postify
            </h1>
            <Icon name="Mails" size="30" />
          </SideBar.Header>

          <SideBar.Content>
            <SideBar.LeftBar />
          </SideBar.Content>
        </SideBar.Root>

        <Feed.Root>
          <Feed.Content>
            <PostItemList key={refreshKey} />
          </Feed.Content>
        </Feed.Root>

        <SideBar.Root isRight>
          <SideBar.Content>
            <SideBar.RightBar />
          </SideBar.Content>
        </SideBar.Root>
      </div>
      <Modal.Root isOpen={isModalOpen} onClose={closeModal}>
        <Modal.CreatePost onPostCreated={handleRefreshFeed} />
      </Modal.Root>
    </div>
  );
}
