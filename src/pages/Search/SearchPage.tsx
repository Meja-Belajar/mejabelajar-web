
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import { encode } from "punycode";

import Navigation from "@src/components/Navigation";


import "@src/assets/global.css";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const Search = () => {
  return (
    <>
      <Navigation disabled />
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="flex flex-col items-center justify-center"
      >
        <Outlet />
      </motion.div>
    </>
  );
};

export default Search;
