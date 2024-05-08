import { motion } from "framer-motion";
import { animate, exit, initial } from "@src/assets/PageTransition";
import Footer from "@src/components/Footer";
import Logo from "@src/components/Logo";
import {
  Button,
  Input,
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Skeleton,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  faArrowUpRightFromSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "@src/assets/images/img/teacher.png";
import star from "@src/assets/images/icon/star.svg";

import BestMentors from "@src/assets/data/BestMentors.json";
import Programs from "@src/assets/data/Programs.json";
import UserReviews from "@src/assets/data/UserReviews.json";
import PopularCourses from "@src/assets/data/PopularCourses.json";
import NavigationLists from "@src/assets/data/NavigationLists.json";

import "@src/assets/global.css";

// Landing page for guest
const GuestLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    navigate(`/search/${encodeURIComponent(search)}`);
  };

  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="bg-white-accent-1 pb-32"
      >
        <main className="relative min-h-[45vw] bg-cover md:bg-teacher">
          <Navbar
            className="flex w-full flex-row items-center justify-around border-none bg-transparent p-3 px-12 blur-none"
            onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll
            maxWidth="xl"
            isBlurred={false}
          >
            <div>
              <Logo />
            </div>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close" : "Open"}
              className="md:hidden"
            />
            <div className="hidden flex-row items-center rounded-full bg-white px-3 py-2 text-sm shadow-lg md:flex">
              <ul className="open-sans-600 ml-2 mr-6 flex flex-row items-center gap-4">
                {NavigationLists.map((item, index) => (
                  <li
                    key={index}
                    className="transition duration-300 ease-linear hover:opacity-50"
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <Button
                className="height-2 open-sans-600 rounded-full bg-blue-accent-300 px-5 text-sm text-white"
                size="sm"
              >
                <Link to="/register">sign up</Link>
              </Button>
            </div>

            <NavbarMenu className="mt-5 px-10 pt-20">
              {NavigationLists.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    color={
                      index === 2
                        ? "primary"
                        : index === NavigationLists.length - 1
                          ? "danger"
                          : "foreground"
                    }
                    className="w-full text-xl "
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>

          <form
            className="mt-10 flex w-full flex-col items-center justify-center py-20"
            onSubmit={handleSearch}
          >
            <div className="z-10 text-center">
              <h1 className="mb-0 p-5 text-6xl text-blue-accent-400 sm:mb-5 sm:p-0">
                Discover Your Perfect <br /> Mentor Today!
              </h1>
              <h3 className="p-5 text-xl text-blue-accent-400 sm:p-0">
                Meja Belajar now is your gateway to <br />
                connecting with experienced mentors who <br />
                are eager to share their knowledge and <br />
                expertise with you.
              </h3>
            </div>

            <Input
              color="default"
              type="text"
              placeholder="search your course"
              variant="bordered"
              className="relative mt-10 w-3/4 focus:border-white sm:w-1/2 md:w-1/3"
              classNames={{
                label: "text-blue-accent-400",
                input:
                  "bg-white focus:border-white-accent-1 border-white-accent-1",
                inputWrapper: ["bg-white border border-none"],
              }}
              radius="full"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              startContent={
                <FontAwesomeIcon
                  icon={faSearch}
                  className="mr-3 text-blue-accent-300"
                />
              }
            />
          </form>
        </main>

        <section className="mt-20 flex w-full items-center justify-center">
          <div className="m-5 flex w-full flex-col justify-between rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-blue-accent-300 p-8 shadow-md drop-shadow-lg sm:m-10 sm:h-96 sm:flex-row sm:gap-10">
            <div className="mb-10 w-full overflow-hidden rounded-2xl bg-white-accent-1 p-3 shadow-md drop-shadow-md sm:mb-0 sm:h-auto sm:w-1/3">
              <Skeleton className="flex w-full flex-col rounded-lg">
                <div className="h-[5vh] rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-3 flex w-3/4 flex-col rounded-lg">
                <div className="h-[5vh] rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-3 flex w-3/4 flex-col rounded-lg">
                <div className="h-[5vh] rounded-lg bg-default-200" />
              </Skeleton>
              <Skeleton className="mt-3 flex w-1/2 flex-col rounded-lg">
                <div className="h-[5vh] rounded-lg bg-default-200" />
              </Skeleton>
            </div>
            <div className="flex w-full flex-col justify-center p-1 text-white-accent-1 sm:w-2/3 sm:p-3 sm:pr-10">
              <h1 className="p-3 text-3xl">Enhance Academic Performance</h1>
              <h1 className="p-2 pl-3 text-xl sm:text-justify">
                Meja Belajar assists university students in enhancing their
                academic performance with the aid of our mentors. Whenever
                you're ready, our mentors are always prepared to provide
                assistance.
              </h1>
              <div className="mt-10 flex items-center">
                <Link
                  to="/announcement"
                  className="peer p-3 underline decoration-transparent underline-offset-4 transition duration-300 ease-linear hover:decoration-white-accent-1"
                >
                  learn more
                </Link>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  fade
                  className="peer-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-between gap-5 bg-gradient-to-b from-white-accent-1 via-white to-white-accent-1 px-5 pb-28 pt-20 sm:px-20 sm:pb-48 sm:pt-36 lg:flex-row lg:px-36">
          <div className="px-5 py-10">
            <h1 className="text-4xl">Our Program</h1>
            <h2 className="mt-2 text-sm">
              Whether you're a student, professional, or entrepreneur
            </h2>
          </div>
          {Programs.map((item, index) => (
            <div key={index} className="px-5 py-10">
              <img src={star} className="mb-4" />
              <h1 className="open-sans-600 text-xl">{item.title}</h1>
              <p className="mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="flex w-full flex-col items-center justify-center p-10">
          <div className="mb-20 text-center text-4xl text-blue-accent-400">
            <h1>
              View some reviews <br />
              from <a className="special-font">Meja Belajar'</a> users
            </h1>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-14 sm:gap-8 md:flex-row lg:px-14">
            {UserReviews.map((item, index) => (
              <div
                key={index}
                className="flex aspect-square w-3/4 flex-col justify-between rounded-3xl bg-blue-accent-300 p-5 shadow-xl shadow-blue-accent-300 drop-shadow-md lg:max-w-[25%]"
              >
                <div className="flex flex-row items-center justify-between gap-5 p-2">
                  <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-200">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="text-white">
                    <h1 className="open-sans-600 text-xl">{item.name}</h1>
                    <h2 className="text-sm">{item.role}</h2>
                  </div>
                </div>

                <div className="line-clamp-3 overflow-hidden px-3 pt-3 text-white">
                  <p>{item.review}</p>
                </div>

                <div className="mt-2 flex flex-row items-center justify-start p-3">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 w-full bg-gradient-to-r from-purple-500 to-blue-accent-300 p-10 md:mt-32">
          <div className="p-3 text-white">
            <h1 className="open-sans-600 text-3xl">Our Best Mentor</h1>
            <p>
              Congratulations to our top mentor for the odd semester, whose
              exceptional performance and dedication have set a new standard for
              excellence in mentorship.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 p-4 md:flex-row">
            {BestMentors.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4">
                <div className="mb-3 aspect-square w-full rounded-2xl bg-white p-3">
                  <img src={item.image} />
                </div>
                <div className="text-center text-white">
                  <h1 className="open-sans-600 text-lg">{item.name}</h1>
                  <h2 className="text-sm opacity-80">{item.degree}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 flex flex-col pt-10">
          <div className="flex w-full flex-row items-center justify-center">
            <h1 className="open-sans-600 text-3xl text-blue-accent-400">
              Our Popular Course
            </h1>
          </div>
          <div className="mt-20 flex flex-col items-center justify-center gap-3 px-2 sm:flex-row  sm:gap-10 ">
            {PopularCourses.map((item, index) => (
              <div
                key={index}
                className="flex aspect-square w-1/2 flex-col items-center justify-center rounded-xl bg-purple-500 p-5 shadow-purple-500 drop-shadow-2xl sm:w-1/5"
              >
                <div className="aspect-square w-1/2 rounded-full bg-white">
                  <img src={item.img} alt={item.alt} />
                </div>
                <h1 className="open-sans-300 open-sans-600 mt-5 text-center text-lg text-white">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-36 flex w-full flex-row items-center justify-center">
          <div className="mx-3 flex w-4/5 flex-col items-center justify-between gap-20 rounded-3xl border border-purple-300 bg-white p-10 shadow-2xl shadow-purple-300 sm:flex-row sm:gap-0">
            <div className="pt-5 text-center text-3xl text-purple-500 sm:pl-5 sm:pt-0">
              <h1 className="open-sans-600">200</h1>
              <h3 className="open-sans-300">Students</h3>
            </div>
            <div className="hidden h-28 w-[0.1rem] bg-purple-500 sm:block" />
            <div className="text-center text-3xl text-purple-500">
              <h1 className="open-sans-600">20</h1>
              <h3 className="open-sans-300">Mentors</h3>
            </div>
            <div className="hidden h-28 w-[0.1rem] bg-purple-500 sm:block" />
            <div className="pb-5 text-center text-3xl text-purple-500 sm:pb-0 sm:pr-5">
              <h1 className="open-sans-600">5</h1>
              <h3 className="open-sans-300">Tutors</h3>
            </div>
          </div>
        </section>
        <section className="mt-32 flex w-full flex-col items-center justify-center">
          <div className="open-sans-600 p-4 text-center text-3xl text-blue-accent-400 sm:w-1/2">
            <h1>
              Let’s enhance your academic journey with the guidance of our top
              mentor
            </h1>
          </div>
          <div className="mt-10 flex w-1/2 items-center justify-center">
            <button
              className="open-sans-600 mt-5 w-full rounded-full bg-blue-accent-300 p-3 text-lg text-white shadow-md shadow-blue-accent-300 drop-shadow-xl transition duration-300 ease-linear hover:shadow-lg sm:w-1/3"
              onClick={() => navigate("/register")}
            >
              sign up now
            </button>
          </div>
        </section>

        <div className="p-5" />
      </motion.div>

      <Footer />
    </>
  );
};

export default GuestLanding;
