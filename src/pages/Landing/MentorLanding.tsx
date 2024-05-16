import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ErrorPage from "../ErrorPage";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { MentorService } from "@src/apis/services/mentorService";

import { BookingsWrapper } from "@src/components/Booking";
import Footer from "@src/components/Footer";
import Navigation from "@src/components/Navigation";

import { useFetch } from "@src/hooks/useFetch";

import { MentorDTO } from "@src/models/dtos/mentorDTO";
import { GetMentorByIdRequest } from "@src/models/requests/mentorRequest";

import LoadingPage from "@src/pages/LoadingPage";

import { NumberUtil } from "@src/utils/numberUtil";

import "@src/assets/global.css";
import { ImageUrl } from "@src/assets/imageUrl";
import { animate, exit, initial } from "@src/assets/pageTransitions";

// landing page for mentor
const MentorLanding = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.user.currentUser);

  const mentorState = useFetch<GetMentorByIdRequest, MentorDTO>({
    fetchProps: { mentor_id: currentUser.user_id },
    fetchCallback: MentorService.getMentorById,
  });

  if (mentorState.isLoading) {
    return <LoadingPage message="Validating your Credential as Mentor" />;
  }

  if (mentorState.error) {
    return <ErrorPage code={404} message={mentorState.error} />;
  }

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
          <section className="w-full border bg-gradient-to-l from-blue-accent-300 via-purple-500 to-pink-500 p-5 pb-12 text-white">
            <div className="mt-2 text-xl sm:mt-0 md:p-3">
              <h1 className="open-sans-600">
                Welcome, {currentUser.username}👋!
              </h1>
              <h3 className="mt-1 text-sm">
                What would you like to teach about today?
              </h3>
            </div>
          </section>

          <section className="black relative -top-3 flex w-full flex-col items-center justify-between rounded-xl bg-white px-3 drop-shadow-lg sm:flex-row">
            <h1 className="open-sans-600 mb-3 mt-5 p-3 sm:mb-0 sm:mt-0 md:ml-10">
              {`Total Revenue: ${NumberUtil.formatToRupiah(mentorState.data!.revenue)}`}
            </h1>
            <div className="flex w-full flex-col items-center gap-3 p-3 sm:flex-row sm:justify-between sm:p-5 md:mr-10 lg:w-3/4">
              <div
                className="open-sans-600 flex w-full cursor-pointer flex-row items-center gap-3 rounded-xl border-2 border-blue-accent-100 p-4 pr-12 transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50"
                onClick={() =>
                  alert(
                    "Under maintenance. During this period, please send your logbook to admin@mejabelajar.edu. Thank you!",
                  )
                }
              >
                <img src={ImageUrl.LOGBOOK} alt="icon tutor" className="w-8" />
                <h1 className="line-clamp-1">Log Book</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  fade
                  className="absolute right-10 sm:hidden"
                />
              </div>
              <div
                className="open-sans-600 flex w-full cursor-pointer flex-row items-center gap-3 rounded-xl border-2 border-blue-accent-100 p-4 pr-12 transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50"
                onClick={() => navigate("/")}
              >
                <img
                  src={ImageUrl.TO_ROLE_USER}
                  alt="icon tutor"
                  className="w-8"
                />
                <h1 className="line-clamp-1">Back As User</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  fade
                  className="absolute right-10 sm:hidden"
                />
              </div>
            </div>
          </section>

          {/* user schedule section  */}
          <BookingsWrapper mentorId={mentorState.data!.mentor_id} />

          <div className="pb-20" />
        </main>
      </motion.div>
      <Footer />
    </>
  );
};

export default MentorLanding;
