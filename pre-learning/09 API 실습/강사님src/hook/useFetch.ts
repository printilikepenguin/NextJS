import { useEffect, useState } from "react";

type UseFetchReturn<T> = {
  data: T;
  isLoading: boolean;
  isError: boolean;
};

export default function useFetch<T>(
  url: string,
  initialData: T,
  options?: {
    method: string;
    headers?: {
      accept?: string;
      Authorization?: string;
    };
  }
): UseFetchReturn<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<T>(initialData);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("서버 상태가 이상합니다.");
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, isError };
}
