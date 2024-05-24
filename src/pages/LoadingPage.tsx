import { motion } from "framer-motion";
import Lottie from "lottie-react";

import "@src/assets/global.css";
import loadingDot from "@src/assets/lotties/loading-dot.json";
import { animate, exit, initial } from "@src/assets/pageTransitions";

type LoadingPageProps = {
  message: string;
};

/**
 * LoadingPage is a component that displays a loading animation and a loading message.
 *
 * @param {LoadingPageProps} props - The props object
 * @param {string} props.message - The message to display
 */
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
              animationData={loadingDot}
              loop={true}
              style={{ width: "300px", height: "300px" }}
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
