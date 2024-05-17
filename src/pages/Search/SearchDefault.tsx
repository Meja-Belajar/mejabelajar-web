import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { motion } from "framer-motion";

import "@src/assets/global.css";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const SearchDefault = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${encodeURIComponent(search)}`);
        }}
        className="mt-14 flex w-[80%] flex-col items-center sm:w-1/2"
      >
        <h1 className="open-sans-600 mb-10 text-3xl">Explore</h1>
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startContent={<FontAwesomeIcon icon={faSearch} className="mr-3" />}
          variant="underlined"
          placeholder="Search"
          className="py-5"
        />
      </form>
    </>
  );
};

export default SearchDefault;
