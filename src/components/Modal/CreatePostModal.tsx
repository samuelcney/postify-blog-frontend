import { useEffect, useState } from "react";
import { Input } from "../Input";
import { usePosts } from "@/hooks/post/usePost";
import { useAuth } from "@/context/auth";
import { Button } from "../Button";
import { useModal } from "@/context/modal";
import { useRouter } from "next/navigation";

export const CreatePostModal = ({
  onPostCreated,
}: {
  onPostCreated: () => void;
}) => {
  const [textContent, setTextContent] = useState("");

  const { createPost, isLoading, refetch } = usePosts();
  const { user } = useAuth();
  const { closeModal } = useModal();
  const router = useRouter();

  const handleCreatePost = async () => {
    try {
      await createPost({
        userId: user?.id,
        content: textContent,
        categoryId: 2,
      });
      await refetch();
      onPostCreated();
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setTextContent("");
      closeModal();
    }
  };

  return (
    <div className="w-full h-full px-4 py-6 overflow-hidden bg-[#171717] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[--foreground] mb-4">
        Criar Postagem
      </h2>
      <select className="w-full border border-[--foreground] rounded-lg p-3 bg-[--background] flex h-12 outline-none text-[--foreground] focus:ring-2 focus:ring-[--highlight] mb-6">
        <option value="1" className="bg-background text-[--foreground]">
          Público
        </option>
        <option value="2" className="bg-background text-[--foreground]">
          Privado
        </option>
      </select>

      <Input.TextArea
        name="postContent"
        labelText="O que você gostaria de compartilhar com seus amigos?"
        onchange={(e) => setTextContent(e.target.value)}
        value={textContent}
      />

      <Button.Root isFullWidth>
        <Button.Content
          onclick={handleCreatePost}
          title="Compartilhar"
          isLoading={isLoading}
        />
      </Button.Root>
    </div>
  );
};
