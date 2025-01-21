import { useState } from "react";
import { Input } from "../Input";
import { usePosts } from "@/hooks/post/usePost";
import { useAuth } from "@/context/auth";
import { Button } from "../Button";
import { useModal } from "@/context/modal";
import { Select } from "../Select/Select";
import { useCategory } from "@/hooks/post/useCategory";
import { error } from "console";
import { notify } from "../Toast/Toast";
import { useRequestState } from "@/hooks/useRequestState";

interface CreatePostModalProps {
  onPostCreated: () => void;
  closeModal: () => void;
}

export const CreatePostModal = ({
  onPostCreated,
  closeModal,
}: CreatePostModalProps) => {
  const [textContent, setTextContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const { isError, setError, loading, setLoading } = useRequestState();

  const { createPost, refetch } = usePosts();
  const { categories, error } = useCategory();
  const { user } = useAuth();

  const handleCreatePost = async () => {
    if (!categoryId || !textContent) {
      setError(true);
      return;
    }
    setLoading(true);
    try {
      await createPost({
        userId: user?.id,
        content: textContent,
        categoryId: Number(categoryId),
      });
      await refetch();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onPostCreated();
    } catch (err: any) {
      notify(error!!, "error");
    } finally {
      setLoading(false);
      setCategoryId("");
      setTextContent("");
      closeModal();
    }
  };

  return (
    <div className="w-full h-full px-4 py-6 overflow-hidden bg-[#171717] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[--foreground] mb-4">
        Criar Postagem
      </h2>

      <Select
        labelText="Escolha a categoria de sua postagem:"
        data={categories}
        onchange={(e) => setCategoryId(e)}
        errorMessage="Selecione uma categoria"
        isError={isError && !categoryId}
      />

      <Input.TextArea
        name="postContent"
        labelText="O que você gostaria de compartilhar com seus amigos?"
        onchange={(e) => setTextContent(e.target.value)}
        value={textContent}
        errorMessage="Campo obrigatório"
        isError={isError && !textContent}
      />

      <Button.Root isFullWidth>
        <Button.Content
          onclick={handleCreatePost}
          title="Compartilhar"
          isLoading={loading}
        />
      </Button.Root>
    </div>
  );
};
