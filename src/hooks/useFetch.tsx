import { useState } from "react";

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
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setLoading(false);
      }
    }
  };

  fetchData();

  return { data, isLoading, error };
};
