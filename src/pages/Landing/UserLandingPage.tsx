import { motion } from "framer-motion";
import Navigation from "@src/components/Navigation";
import { exit, animate, initial } from "@src/assets/pageTransition";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Footer from "@src/components/Footer";
import { BookingsWrapper } from "@src/components/Booking";
import "@src/assets/global.css";
import {
  CDNIcon,
  WeeklyPopularCourses,
} from "@src/assets/data/userLandingData";
import { useSelector } from "react-redux";
import { WeeklyPopularMentorWrapper } from "@src/components/Mentor";
import { WeeklyPopularCoursesWrapper } from "@src/components/Course";

// landing page for user
const UserLanding = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
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
              <div
                className="open-sans-600 flex w-full cursor-pointer flex-row items-center gap-3 rounded-xl border-2 border-blue-accent-100 p-4 pr-12 transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50"
                onClick={() => navigate("/tutoring")}
              >
                <img src={CDNIcon.tutoring} alt="icon tutor" className="w-8" />
                <h1>Tutoring Class</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  fade
                  className="absolute right-10 sm:hidden"
                />
              </div>
              <div
                className="open-sans-600 flex w-full cursor-pointer flex-row items-center gap-3 rounded-xl border-2 border-blue-accent-100 p-4 pr-12 transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50"
                onClick={() => navigate("/search")}
              >
                <img src={CDNIcon.mentoring} alt="icon tutor" className="w-8" />
                <h1>Mentoring 1-to-1</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  fade
                  className="absolute right-10 sm:hidden"
                />
              </div>
              <div
                className="open-sans-600 flex w-full cursor-pointer flex-row items-center gap-3 rounded-xl border-2 border-blue-accent-100 p-4 pr-12 transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50"
                onClick={() => navigate("/mentor")}
              >
                <img
                  src={CDNIcon.for_mentor}
                  alt="icon tutor"
                  className="w-8"
                />
                <h1>For Mentor</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  fade
                  className="absolute right-10 sm:hidden"
                />
              </div>
            </div>
          </section>

          {/* user schedule section  */}
          <BookingsWrapper userId={currentUser.id} />

          {/* popular courses this week */}
          <WeeklyPopularCoursesWrapper />

          {/* popular mentors section */}
          <WeeklyPopularMentorWrapper />

          <div className="pb-20" />
        </main>
      </motion.div>
      <Footer />
    </>
  );
};

export default UserLanding;
