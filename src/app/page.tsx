import { Feed } from "@/components/Feed"
import { SideBar } from "@/components/Sidebar"

export default function Home() {
  return (
    <div className="flex flex-1 h-screen font-[family-name:var(--font-geist-sans)">
      <div className="flex flex-1 h-screen flex-row">

        <SideBar.Root>
          <SideBar.Content>

          </SideBar.Content>
        </SideBar.Root>

        <Feed.Root>
          <Feed.Content>

          </Feed.Content>
        </Feed.Root>

        <SideBar.Root isRight>
          <SideBar.Content>

          </SideBar.Content>
        </SideBar.Root>
      </div>
    </div>
  );
}
