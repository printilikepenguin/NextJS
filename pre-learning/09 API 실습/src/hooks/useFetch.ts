import { useEffect, useState } from "react";

type UseFetchReturn<T> = {
  data: T[]; // 배열로 한정하면 오브젝트
  // data: T;
  isLoading: boolean;
  isError: boolean;
};

export default function useFetch<T>(
  url: string,
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
  const [data, setData] = useState<T[]>([]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("서버 상태가 이상합니다.");
      }
      const data = await response.json();
      console.log(data.results);
      setData(data.results);
      // setData(data);
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
