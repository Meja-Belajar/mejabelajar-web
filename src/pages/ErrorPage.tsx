import { motion } from 'framer-motion';
import { animate, exit, initial } from '@assets/PageTransition';
import img from '@assets/images/image-removebg-preview.png'
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import peopleConfuse from '@assets/lotties/people-confuse.json';
import Lottie from 'react-lottie';

const ErrorPage: React.FC = () => {
  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className='mt-3 p-10 flex items-center justify-center'
      >
        <div className='mt-5 sm:mt-2 w-3/4 flex flex-col items-center justify-between'>
          <div className='w-full sm:w-1/2 flex flex-row items-center justify-center p-5'>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: peopleConfuse,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
            />
          </div>
          <div className='w-full text-center flex flex-col items-center p-3 mt-3 '>
            <h1 className='text-3xl sm:text-6xl open-sans-600'>404 ERROR</h1>
            <p className='mt-5 text-xl open-sans-500 opacity-80 text-center'>Ooops! Something's missing .... </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ErrorPage