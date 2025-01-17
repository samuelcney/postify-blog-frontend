import { categoryService } from "@/services/posts/categoryService";
import CategoryProps from "@/types/CategoryInterface";
import { useEffect, useState } from "react";

export const useCategory = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await categoryService.getAllCategories();
      setCategories(data);
    } catch (error: any) {
      setError(
        error.response.data.message ||
          "An error occurred while fetching categories."
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, isLoading, error };
};
