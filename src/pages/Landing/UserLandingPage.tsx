import { motion } from "framer-motion";
import Navigation from "@src/components/Navigation";
import { exit, animate, initial } from "@src/assets/PageTransition";
import icon from "@public/logo.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BecomeMentor from "@src/components/BecomeMentor";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Footer from "@src/components/Footer";
import booking from "@src/assets/data/bookingDummy.json";
import BookingCard from "@src/components/BookingCard";
import PopularMentor from "@src/components/PopularMentor";
import "@src/assets/global.css";

// landing page for user
const UserLanding = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="bg-white-accent-1"
      >
        <main className="mt-3">
          <section className="w-full border bg-gradient-to-r from-blue-accent-300 via-purple-500 to-pink-500 p-5 pb-12 text-white">
            <div className="text-xl md:p-3">
              <h1 className="open-sans-600">Hay, Friends 👋!</h1>
              <h3 className="mt-1 text-sm">
                What would you like to learn about today?{" "}
              </h3>
            </div>
          </section>

          <section className="black relative -top-3 flex w-full flex-col items-center justify-between rounded-xl bg-white drop-shadow-lg sm:flex-row">
            <h1 className="open-sans-600 mb-3 mt-5 p-3 sm:mb-0 sm:mt-0 md:ml-10">
              Best option
              <span className="text-blue-accent-300"> FOR YOU🫰 </span>
            </h1>
            <div className="flex w-full flex-col items-center gap-3 p-3 sm:flex-row sm:justify-between sm:p-5 md:mr-10 lg:w-3/4">
              <div className="open-sans-600 flex w-full cursor-pointer flex-row items-center gap-3 rounded-xl border-2 border-blue-accent-100 p-4 pr-12 transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50">
                <img src={icon} alt="icon tutor" className="w-8" />
                <h1>Tutoring Class</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  fade
                  className="absolute right-10 sm:hidden"
                />
              </div>
              <div className="open-sans-600 flex w-full cursor-pointer flex-row items-center gap-3 rounded-xl border-2 border-blue-accent-100 p-4 pr-12 transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50">
                <img src={icon} alt="icon tutor" className="w-8" />
                <h1>Mentoring 1-to-1</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  fade
                  className="absolute right-10 sm:hidden"
                />
              </div>
              <div className="open-sans-600 flex w-full cursor-pointer flex-row items-center gap-3 rounded-xl border-2 border-blue-accent-100 p-4 pr-12 transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50">
                <img src={icon} alt="icon tutor" className="w-8" />
                <h1>Scheduled Mentoring</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  fade
                  className="absolute right-10 sm:hidden"
                />
              </div>
            </div>
          </section>

          <section>
            <div className="mt-10 flex w-full items-center justify-start">
              <h1 className="open-sans-600 mb-5 ml-8 text-2xl">
                Your Schedule
              </h1>
            </div>
            {booking.length > 0 ? (
              booking.map((book) => (
                <BookingCard key={book?.booking?.id} booking={book} />
              ))
            ) : (
              <section>
                <h1>There's no bookings</h1>
              </section>
            )}

            {booking.length > 0 && (
              <section className="mt-10 flex w-full items-center justify-center">
                <Button
                  className="h-10 w-1/2 rounded-full bg-blue-accent-300 text-white-accent-1 shadow-sm drop-shadow-lg sm:w-1/6"
                  onClick={() => {}}
                >
                  VIEW ALL
                </Button>
              </section>
            )}
          </section>

          <section className="mt-20">
            <div className="open-sans-600 flex w-full flex-row items-center p-3 text-2xl">
              <h1 className="ml-8">Popular Mentor This Week</h1>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="z-[99] ml-3 mt-1 text-black"
                fade
              />
            </div>

            <PopularMentor />
          </section>
          <BecomeMentor />
        </main>
      </motion.div>
      <Footer />
    </>
  );
};

export default UserLanding;
