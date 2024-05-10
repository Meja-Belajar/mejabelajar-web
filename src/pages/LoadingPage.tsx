import { motion } from "framer-motion";
import { animate, exit, initial } from "@src/assets/pageTransition";
import img from "@src/assets/images/image-removebg-preview.png";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import loadingDot from "@src/assets/lotties/loading-dot.json";
import Lottie from "react-lottie";
import "@src/assets/global.css";

type LoadingPageProps = {
  message: string;
};

const LoadingPage = (props: LoadingPageProps) => {
  const { message } = props;

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
                animationData: loadingDot,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
          <div className="mt-3 flex w-full flex-col items-center p-3 text-center ">
            <p className="open-sans-500 mt-5 text-center text-xl opacity-80">
              {message}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LoadingPage;