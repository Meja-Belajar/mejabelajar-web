import { useEffect, useState } from "react";

type FetchProps<Request, ResponseDTO> = {
  fetchProps: Request;
  fetchCallback: (Request: Request) => Promise<ResponseDTO>;
};

/**
 * useFetch is a custom hook that fetches data from an API and returns the data, loading state, and error message.
 *
 * @template Request - The type of the request object to be passed to the fetchCallback function
 * @template ResponseDTO - The type of the response object returned by the fetchCallback function
 *
 * @param {Object} params - The parameters object
 * @param {Request} params.fetchProps - The request object to be passed to the fetchCallback function
 * @param {function(Request): Promise<ResponseDTO>} params.fetchCallback - The function that will be called to fetch the data
 *
 * @returns {Object} - The state of the fetch request
 * @returns {ResponseDTO | null} data - The response data returned by the fetchCallback function
 * @returns {boolean} isLoading - A boolean indicating whether the data is still loading
 * @returns {Error | null} error - An error object if the fetch fails
 *
 * @example
 * const mentorState = useFetch<GetMentorByUserIdRequest, MentorDTO>({
 *  fetchProps: { user_id: currentUser.user_id },
 *  fetchCallback: MentorService.getMentorByUserId,
 * });
 *
 * if (mentorState.isLoading) return <LoadingPage message="Validating your Credential as Mentor" />;
 * else if (mentorState.error) return <ErrorPage code={404} message={mentorState.error.message} />;
 * else return <MainContent />;
 */
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

  return { data, setData, isLoading, error };
};
