import { useState, useEffect } from "react";
import { userService } from "@/services/user/userService";

const useUserById = (id: string) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await userService.getUserById(id);
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  return { user, loading, error };
};

export default useUserById;
