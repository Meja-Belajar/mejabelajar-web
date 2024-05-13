import { useParams } from "react-router-dom";
import { initial, animate, exit } from "@src/assets/pageTransitions";
import { motion } from "framer-motion";
import "@src/assets/global.css";

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
        <div>
          
        </div>
      </motion.div>
    </>
  );
};

export default SearchResult;
