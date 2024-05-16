import { useEffect, useState } from "react";

type FetchProps<Request, ResponseDTO> = {
  fetchProps: Request;
  fetchCallback: (Request: Request) => Promise<ResponseDTO>;
};

export const useFetch = <Request extends object, ResponseDTO extends object>({
  fetchProps,
  fetchCallback,
}: FetchProps<Request, ResponseDTO>) => {
  const [data, setData] = useState<ResponseDTO | null>({} as ResponseDTO);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response: ResponseDTO = await fetchCallback(fetchProps);

      setData(response);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};
