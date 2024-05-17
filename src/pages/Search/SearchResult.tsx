import { useParams } from "react-router-dom";

import { motion } from "framer-motion";

import "@src/assets/global.css";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const SearchResult = () => {
  const { query } = useParams();
  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="bg-white-accent-1"
      >
        <div>
          <h1>Search Result {query}</h1>
        </div>
      </motion.div>
    </>
  );
};

export default SearchResult;
