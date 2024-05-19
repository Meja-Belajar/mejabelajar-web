import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";
import { motion } from "framer-motion";

import "@src/assets/global.css";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const recommendations = ["Calculus", "Tom Holland", "Algebra"];

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
      <div className="mt-2 flex flex-row gap-3">
        {
          recommendations.map((recommendation, index) => (
            <button
              key={index}
              onClick={() => {
                setSearch(recommendation);
                navigate(`/search/${encodeURIComponent(recommendation)}`);
              }}
              className="border rounded-full px-2 text-sm py-1 lato-regular transition ease-soft-spring hover:border-blue-accent-300"
            >
              {recommendation}
            </button>
          ))
        }
      </div>
    </>
  );
};

export default SearchDefault;
