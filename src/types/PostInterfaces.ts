export interface PostRequestDTO {
  content: string;
  userId: string | number;
  categoryId: number;
}

export interface PostProps {
  id: number;
  content: string;
  user: { id: number | string; username?: string };
  createdAt?: string;
  updatedAt?: string;
  category: { id: number | string; title?: string };
}
