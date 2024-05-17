import { useParams } from "react-router-dom";

import { motion } from "framer-motion";

import "@src/assets/global.css";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const SearchResult = () => {
  const { query } = useParams();

  const queryResult = useFetch<SearchRequest, MentorDTO[]>({
    fetchProps: { query: query as string },
    fetchCallback: MentorService.getMentorByName,
  });

  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="mt-4 min-h-screen w-full bg-white-accent-1 px-3 pt-10 sm:px-10"
      >
        <h1 className="open-sans-600 mb-10 text-xl sm:ml-2">{`Search result for ${query || "..."}`}</h1>

        {!queryResult.isLoading && (
          <SearchMentorWrapper data={queryResult.data!} />
        )}
      </motion.div>
    </>
  );
};

export default SearchResult;
