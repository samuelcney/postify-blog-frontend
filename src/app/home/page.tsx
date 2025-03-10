"use client";
import { Feed } from "@/components/Feed";
import { SideBar } from "@/components/Sidebar";
import { PostItemList } from "@/components/Post/PostItemList";
import Icon from "@/components/Icon/Icon";
import { Modal } from "@/components/Modal/index";
import { useModal } from "@/context/modal";
import { useState } from "react";
import { UserProfile } from "@/components/UserProfile";

export default function HomePage() {
  const { isModalOpen, closeModal, modalType, modalProps } = useModal();

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
            <PostItemList key={refreshKey} feedPost />
          </Feed.Content>
        </Feed.Root>

        <SideBar.Root isRight>
          <SideBar.Content>
            <SideBar.RightBar>
              <UserProfile.Card />
            </SideBar.RightBar>
          </SideBar.Content>
        </SideBar.Root>
      </div>

      {modalType === "createPost" && (
        <Modal.Root isOpen={isModalOpen} onClose={closeModal}>
          <Modal.CreatePost
            onPostCreated={handleRefreshFeed}
            closeModal={closeModal}
          />
        </Modal.Root>
      )}

      {modalType === "deletePost" && (
        <Modal.Root
          isOpen={isModalOpen}
          onClose={closeModal}
          heightPercentage={30}
        >
          <Modal.DeletePost
            postId={modalProps?.postId}
            onDeletePost={handleRefreshFeed}
            closeModal={closeModal}
          />
        </Modal.Root>
      )}
    </div>
  );
}
