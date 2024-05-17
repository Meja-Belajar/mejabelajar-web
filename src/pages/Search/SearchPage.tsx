import { Outlet } from "react-router-dom";

import { motion } from "framer-motion";

import "@src/assets/global.css";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const Search = () => {
  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="bg-white-accent-1"
      >
        <div>
          <h1>Search Page</h1>
        </div>
      </motion.div>
      <div>
        <h1>Search</h1>
      </div>

      <Outlet />
    </>
  );
};

export default Search;
