import { useEffect, useState } from "react";
import { Input } from "../Input";
import { usePosts } from "@/hooks/post/usePost";
import { useAuth } from "@/context/auth";
import { Button } from "../Button";
import { useModal } from "@/context/modal";

export const CreatePostModal = () => {
  const [textContent, setTextContent] = useState("");

  const { createPost, isLoading, refetch } = usePosts();
  const { user } = useAuth();
  const { closeModal } = useModal();

  const handleCreatePost = async () => {
    try {
      await createPost({
        userId: user?.id,
        content: textContent,
        categoryId: 1,
      });
      await refetch();
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setTextContent("");
      closeModal();
    }
  };

  return (
    <div className="w-full flex items-center px-2 flex-col h-full">
      <h1 className="text-2xl font-bold text-background">Compartilhar Post</h1>

      <Input.TextArea
        name="teste"
        labelText="Digite aqui o que deseja compartilhar com seus amigos!"
        onchange={(e) => setTextContent(e.target.value)}
        value={textContent}
        invert
      />
      <Button.Root>
        <Button.Content
          onclick={() => handleCreatePost()}
          title="Compartilhar"
          isLoading={isLoading}
        />
      </Button.Root>
    </div>
  );
};
