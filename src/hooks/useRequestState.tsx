import { useState } from "react";

interface UseRequestState {
  loading: boolean;
  isError: boolean;
  errorMessage: string;
  setLoading: (value: boolean) => void;
  setError: (value: boolean) => void;
  setErrorMessage: (message: string) => void;
  reset: () => void;
}

export const useRequestState = (): UseRequestState => {
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const reset = () => {
    setLoading(false);
    setError(false);
    setErrorMessage("");
  };

  return {
    loading,
    isError,
    errorMessage,
    setLoading,
    setError,
    setErrorMessage,
    reset,
  };
};
