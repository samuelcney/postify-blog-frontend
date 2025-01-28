import { usePosts } from "@/hooks/posts/usePost";
import { Button } from "../Button";
import { notify } from "../Toast/Toast";
import { useRequestState } from "@/hooks/useRequestState";

interface DeletePostModalProps {
  onDeletePost: () => void;
  closeModal: () => void;
  postId: number;
}
export const DeletePostModal = ({
  onDeletePost,
  postId,
  closeModal,
}: DeletePostModalProps) => {
  const { deletePost, refetch } = usePosts();
  const { loading, setLoading } = useRequestState();

  const handleDeletePost = async (id: number) => {
    if (id === undefined) return;
    setLoading(true);
    try {
      await deletePost(id);
      await refetch();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onDeletePost();
      notify("Post excluido com sucesso!", "success");
    } catch (err: any) {
      notify(err, "error");
    } finally {
      setLoading(false);
      closeModal();
    }
  };
  return (
    <div className="w-full h-full px-4 py-6 overflow-hidden bg-[#171717] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[--foreground] mb-4">
        Tem certeza que deseja excluir essa postagem?
      </h2>

      <Button.Root isFullWidth isRow>
        <Button.Content onclick={closeModal} title="Cancelar" />
        <Button.Content
          onclick={() => handleDeletePost(postId)}
          title="Sim, tenho certeza"
          isLoading={loading}
        />
      </Button.Root>
    </div>
  );
};
