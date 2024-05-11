import { motion } from "framer-motion";
import { animate, exit, initial } from "@src/assets/pageTransitions";
import img from "@src/assets/images/image-removebg-preview.png";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import peopleConfuse from "@src/assets/lotties/people-confuse.json";
import Lottie from "react-lottie";
import "@src/assets/global.css";

type ErrorPageProps = {
  code: number;
  message: string;
};

const ErrorPage = (props: ErrorPageProps) => {
  const { code, message } = props;

  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="mt-3 flex items-center justify-center p-10"
      >
        <div className="mt-5 flex w-3/4 flex-col items-center justify-between sm:mt-2">
          <div className="flex w-full flex-row items-center justify-center p-5 sm:w-1/2">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: peopleConfuse,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
          <div className="mt-3 flex w-full flex-col items-center p-3 text-center ">
            <h1 className="open-sans-600 text-3xl sm:text-6xl">{code} ERROR</h1>
            <p className="open-sans-500 mt-5 text-center text-xl opacity-80">
              {message}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ErrorPage;
