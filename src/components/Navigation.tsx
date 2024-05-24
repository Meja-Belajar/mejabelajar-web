import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  faArrowRight,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import logo from "@public/logo.svg";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "@src/components/Logo";

import "@src/assets/global.css";

const navigationList = ["Profile"];

type NavigationProps = {
  disabled?: boolean;
};

/**
 * Navigation is a component that displays the navigation bar and search bar.
 *
 * @param {NavigationProps} props - The props object
 * @param {boolean} props.disabled - Whether the navigation bar is disabled
 */
const Navigation = (props: NavigationProps) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [isHidden, setIsHidden] = useState(false);

  const handleIconClick = () => {
    setIsHidden(true);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (props?.disabled) return;

    if (search) {
      navigate(`/search/${encodeURIComponent(search)}`);
    }
  };

  const currentUser = useSelector((state: any) => state.user.currentUser);
  return (
    <>
      <AnimatePresence>
        {!isHidden && !props?.disabled && (
          <motion.div
            className="open-sans-600 mb-3 flex h-6 items-center justify-center bg-white-accent-1 p-5 transition ease-linear"
            exit={{ y: -100 }}
          >
            <h1
              className="sm:text-md ease peer cursor-pointer text-xs text-red-500 transition hover:opacity-50"
              onClick={() => navigate("/promotion")}
            >
              50% OFF BY USING THIS VOUCHER
            </h1>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="peer-hover:opacity:50 cursor-pointer pl-3 text-red-500 transition ease-linear"
              fade
              onClick={() => navigate("/promotion")}
            />
            <FontAwesomeIcon
              icon={faClose}
              className="absolute right-5 cursor-pointer transition ease-linear hover:opacity-50"
              onClick={handleIconClick}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        className="mt-1 flex w-full items-center justify-around p-1"
        maxWidth="xl"
      >
        <div className="ml-4 flex flex-row items-center justify-center gap-5">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close" : "Open"}
            className="h-10 sm:hidden"
          />
          <Logo />
        </div>

        <div
          className="flex w-1/2 flex-row items-center gap-3 "
          style={{
            justifyContent: props?.disabled ? "flex-end" : "space-between",
          }}
        >
          <form
            className="hidden w-3/4 md:flex lg:w-full"
            style={{ display: props?.disabled ? "none" : "flex" }}
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <Input
              type="text"
              placeholder="search courses"
              variant="bordered"
              className="hidden w-full p-3 md:flex "
              classNames={{
                inputWrapper: [
                  "border-2 rounded-full focus:border-blue-accent-300",
                ],
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              startContent={
                <FontAwesomeIcon icon={faSearch} className="text-gray-300" />
              }
            />
          </form>
          <Link
            to="/profile"
            className="relative mr-4 aspect-square w-10 overflow-hidden rounded-full border"
          >
            <img
              src={currentUser?.profile_picture}
              alt="profile_image"
              className="h-full w-full"
            />
          </Link>
        </div>
        <NavbarMenu className="pt-20">
          {navigationList.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === navigationList.length - 1
                      ? "danger"
                      : "foreground"
                }
                className="w-full text-xl"
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <form
        className="flex w-full justify-center px-8"
        style={{ display: props?.disabled ? "none" : "flex" }}
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <Input
          type="text"
          placeholder="search courses"
          variant="bordered"
          className="mb-1 mt-4 flex w-full p-3 md:hidden"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startContent={
            <FontAwesomeIcon icon={faSearch} className="text-blue-accent-300" />
          }
        />
      </form>
    </>
  );
};

export default Navigation;
