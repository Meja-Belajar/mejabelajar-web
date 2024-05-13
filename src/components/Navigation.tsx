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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@src/components/Logo";
import { useSelector } from "react-redux";
import "@src/assets/global.css";

const navigationList = ["Announcement", "History"];

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [isHidden, setIsHidden] = useState(false);

  const handleIconClick = () => {
    setIsHidden(true);
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (search) {
      navigate(`/search/${search}`);
    }
  };

  const location = useLocation();
  const currentUser = useSelector((state: any) => state.user.currentUser);

  if (["/login", "/register"].includes(location.pathname)) return null;
  else
    return (
      <>
        <AnimatePresence>
          {!isHidden && (
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
          className="mt-1 w-full p-1"
          maxWidth="xl"
        >
          <div className="ml-4 flex flex-row items-center justify-center gap-5">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close" : "Open"}
              className="sm:hidden"
            />
            <Logo />
          </div>

          <form
            className="flex w-3/4 flex-row justify-end gap-10 lg:w-1/2"
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

            <div className="flex items-center gap-3">
              <>
                <Link
                  to="/profile"
                  className="relative mr-4 aspect-square w-10 overflow-hidden rounded-full border"
                >
                  <img
                    src={currentUser?.profile_picture}
                    alt=""
                    className="h-full w-full"
                  />
                </Link>
              </>
            </div>
          </form>

          <NavbarMenu className="pt-20" >
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

        <nav className="flex w-full justify-center px-8">
          <Input
            type="text"
            placeholder="search courses"
            variant="bordered"
            className="flex w-full p-3 md:hidden"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            startContent={
              <FontAwesomeIcon
                icon={faSearch}
                className="text-blue-accent-300"
              />
            }
          />
        </nav>
      </>
    );
};

export default Navigation;
