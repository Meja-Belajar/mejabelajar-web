import { motion } from 'framer-motion'
import Navigation from '@components/Navigation'
import { exit, animate, initial } from '@assets/PageTransition'
import '@assets/global.css';
import icon from '@public/logo.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BecomeMentor from '@components/BecomeMentor';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import Footer from '@components/Footer';
import booking from '@assets/data/bookingDummy.json';
import BookingCard from '@src/components/BookingCard';
import PopularMentor from '@src/components/PopularMentor';

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
        className='bg-white-accent-1'
        >

        <main className='mt-3'>
          <section className='border w-full p-5 pb-12 bg-gradient-to-r from-blue-accent-300 via-purple-500 to-pink-500 text-white'>
            <div className='text-xl md:p-3'>
              <h1 className='open-sans-600'>Hay, Friends 👋!</h1>
              <h3 className='text-sm mt-1'>What would you like to learn about today? </h3>
            </div>
          </section>

          <section className='black rounded-xl drop-shadow-lg w-full bg-white relative -top-3 flex flex-col sm:flex-row items-center justify-between'>
            <h1 className='p-3 open-sans-600 md:ml-10 mt-5 mb-3 sm:mb-0 sm:mt-0'>Best option<span className='text-blue-accent-300'> FOR YOU🫰 </span></h1>
            <div className='flex gap-3 flex-col p-3 sm:flex-row sm:justify-between sm:p-5 lg:w-3/4 items-center w-full md:mr-10'>

              <div className='pr-12 w-full p-4 open-sans-600 rounded-xl border-2 border-blue-accent-100 flex flex-row items-center gap-3 cursor-pointer transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50'>
                <img src={icon} alt="icon tutor" className='w-8'/>
                <h1>
                  Tutoring Class
                </h1>
                <FontAwesomeIcon icon={faArrowRight} fade className='sm:hidden absolute right-10'/>
              </div>
              <div className='pr-12 w-full p-4 open-sans-600 rounded-xl border-2 border-blue-accent-100 flex flex-row items-center gap-3 cursor-pointer transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50'>
                <img src={icon} alt="icon tutor" className='w-8'/>
                <h1>
                  Mentoring 1-to-1
                </h1>
                <FontAwesomeIcon icon={faArrowRight} fade className='sm:hidden absolute right-10'/>
              </div>
              <div className='pr-12 w-full p-4 open-sans-600 rounded-xl border-2 border-blue-accent-100 flex flex-row items-center gap-3 cursor-pointer transition ease-out hover:bg-blue-accent-300 hover:bg-opacity-50'>
                <img src={icon} alt="icon tutor" className='w-8'/>
                <h1>
                  Scheduled Mentoring
                </h1>
                <FontAwesomeIcon icon={faArrowRight} fade className='sm:hidden absolute right-10'/>

              </div>
            </div>
             
          </section>


          <section>
            <div className='w-full flex items-center justify-start mt-10'>
              <h1 className='text-2xl open-sans-600 ml-8 mb-5'>Your Schedule</h1>
            </div>
            {
              booking.length > 0 ?
                booking.map((book) => (
                  <BookingCard key={book?.booking?.id} booking={book} />
                ))
              :
              <section>
                <h1>There's no bookings</h1>
              </section> 
            }

            {
              booking.length > 0 && (
                <section className='w-full flex items-center justify-center mt-10'>
                  <Button
                    className='w-1/2 sm:w-1/6 h-10 rounded-full text-white-accent-1 bg-blue-accent-300 drop-shadow-lg shadow-sm'
                    onClick={() => {

                    }}
                  >
                    VIEW ALL
                  </Button>
                </section>
              )
            }
          </section>


          <section className='mt-20'>
            <div className='w-full p-3 open-sans-600 text-2xl flex items-center flex-row'>

              <h1 className='ml-8'>Popular Mentor This Week</h1>
              <FontAwesomeIcon icon={faArrowRight} className="z-[99] text-black ml-3 mt-1" fade/>
            </div>

            <PopularMentor />
          </section>
          <BecomeMentor />

          
        </main>    


      </motion.div>
      <Footer/>
    </>
  )
}

export default UserLanding