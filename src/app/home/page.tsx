"use client";
import { Feed } from "@/components/Feed";
import { SideBar } from "@/components/Sidebar";
import { PostItemList } from "@/components/Post/PostItemList";

export default function Home() {
  return (
    <div className="w-full flex flex-1 h-screen font-[family-name:var(--font-geist-sans)">
      <div className="w-full flex flex-1 h-screen flex-row">
        <SideBar.Root>
          <SideBar.Header>
            <h1 className="text-[1.8rem] font-bold tracking-widest">Postify</h1>
          </SideBar.Header>

          <SideBar.Content>
            <SideBar.LeftSideBar />
          </SideBar.Content>
        </SideBar.Root>

        <Feed.Root>
          <Feed.Content>
            <PostItemList />
          </Feed.Content>
        </Feed.Root>

        <SideBar.Root isRight>
          <SideBar.Content></SideBar.Content>
        </SideBar.Root>
      </div>
    </div>
  );
}
