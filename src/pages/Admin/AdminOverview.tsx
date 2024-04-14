import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faBell, faBellSlash, faCheck, faEllipsisVertical, faSortDown, faSortUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import BookingLists from '@assets/data/BookingLists.json';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';

const AdminOverview = () => {
  const [isBell, setIsBell] = useState<boolean>(false);
  const [isBookingView, setIsBookingView] = useState<boolean>(false);

  return (
    <>
      <motion.div className='px-8 py-5'>
        <section
          className='w-full rounded-2xl p-8 bg-purple-accent-500 shadow-lg drop-shadow-lg'
        >
          <div className='text-3xl open-sans-600 text-white flex flex-col sm:flex-row items-start justify-between'>
            <div>
              <h1>Welcome</h1>
              <h2>Back ADMINNAME !</h2>
            </div>
            <div className='rounded-2xl bg-white flex flex-row justify-between items-center p-2 mt-5 sm:mt-0'>
              <FontAwesomeIcon 
                icon={isBell ? faBell : faBellSlash} 
                className='ml-2 text-black cursor-pointer w-5' 
                onClick={() => setIsBell(!isBell)}
              />
              <img src="" alt="sds" className='w-1/2 rounded-2xl aspect-square border border-black' />
            </div>
          </div>

          <div className='mt-16 flex flex-col gap-5 text-white sm:flex-row sm:justify-between sm:w-1/2'>
            <div className='p-1'>
              <h3 className='open-sans-600 text-white-accent-1'>Total Bookings</h3>
              <h1 className='text-3xl open-sans-600'>12</h1>
            </div>
            <div className='p-1'>
              <h3 className='open-sans-600 text-white-accent-1'>Total Income</h3>
              <h1 className='text-3xl open-sans-600'>Rp230.120,-</h1>
            </div>
            <div className='p-1'>
              <h3 className='open-sans-600 text-white-accent-1'>Total Request</h3>
              <h1 className='text-3xl open-sans-600'>10</h1>
            </div>

          </div>
        </section>

        <div className='mt-10'/>

        <AnimatePresence>
          {
            isBookingView === false ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='bg-blue-accent-300 rounded-2xl p-8 shadow-lg drop-shadow-lg text-white'
              > 
                <nav className='w-full flex flex-row justify-between items-center'>
                  <h1 className='text-3xl'>
                    Available Mentors
                  </h1>
                  <div 
                    className='cursor-pointer p-2 flex items-center justify-center pb-3'
                    onClick={() => setIsBookingView(!isBookingView)}
                  >
                    <FontAwesomeIcon icon={faSortDown} className='text-xl'/>
                  </div>
                </nav>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='bg-blue-accent-300 rounded-2xl p-8 shadow-lg drop-shadow-lg text-white'
              > 
                <nav className='w-full flex flex-row justify-between items-center mb-5'>
                  <h1 className=' text-3xl'>
                    Available Mentors
                  </h1>
                  <div 
                    className='cursor-pointer p-2 flex items-center justify-center pt-3'
                    onClick={() => setIsBookingView(!isBookingView)}
                  >
                    <FontAwesomeIcon icon={faSortUp} className='text-xl'/>
                  </div>
                </nav>
                
                {
                  BookingLists.map((booking, index) => (
                    <div key={index} className='w-full px-6 py-4 mt-3 bg-blue-accent-500 rounded-2xl bg-white text-black'>
                      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
                        <h1 className='text-2xl'>{booking.userId}</h1>
                        <h2 className='text-lg'>{booking.courseId}</h2>
                      </div>
                      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
                        <h3 className='text-lg'>{booking.createdAt}</h3>
                        <h3 className='text-lg'>{booking.mentorId}</h3>
                      </div>
                    </div>
                  ))
                }
              </motion.div>
             
            )
            
          }
        </AnimatePresence>

        <section className='mt-20'>
          <div>
            <span className='text-3xl mr-1 open-sans-600'>Transactions</span>
            <sup className='-top-3'>23</sup>
          </div>
          <div className='mt-5'>
            {
              BookingLists.map((booking, index) => (
                <PopOverComponent key={index} index={index} booking={booking} />
              ))
            }
          </div>
        </section>
      </motion.div>
    </>
  );
}

export const PopOverComponent = ({index, booking}: any) => {
  const [isPopOver, setIsPopOver] = useState<boolean>(false);
  
  const handleCancel = () => {
    setIsPopOver(false);
    console.log('Cancel');
  }
  
  const handleAccept = () => {
    setIsPopOver(false);
    console.log('Accept');
  }

  return (
    <div key={index} className='w-full px-6 py-4 mt-3 bg-blue-accent-500 rounded-2xl border border-black-accent-1 text-black'>
      <Popover isOpen={isPopOver} placement="bottom" showArrow={true}>
        <PopoverTrigger
          onClick={() => setIsPopOver(true)}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} className='cursor-pointer py-1' />
        </PopoverTrigger>
        <PopoverContent className='p-3 flex flex-row'>
          <div 
            className='p-3 px-4 text-white rounded-full bg-red-500 mr-2 cursor-pointer'
            onClick={handleCancel}
          >
            <FontAwesomeIcon icon={faBan}/>
          </div>
          
          <div 
            className='p-3 px-4 text-white rounded-full bg-green-500 cursor-pointer'
            onClick={handleAccept}
          >
            <FontAwesomeIcon icon={faCheck}/>
          </div>
          
        </PopoverContent>
      </Popover>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <h1 className='text-2xl'>{booking.userId}</h1>
        <h2 className='text-lg'>{booking.courseId}</h2>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <h3 className='text-lg'>{booking.createdAt}</h3>
        <h3 className='text-lg'>{booking.mentorId}</h3>
      </div>
      
    </div>
  )
}

export default AdminOverview;