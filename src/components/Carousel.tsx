import React, { useEffect } from 'react'
import image from '@assets/images/aaron-burden-LNwn_A9RGHo-unsplash.jpg'
import ss from '@assets/images/mkmui_the_teacher_stands_in_front_of_the_classroom_pointing_at__5af4cbd1-2169-49ba-9e76-127695c1f9a5.png'
import '@assets/global.css';

const Carousel = () => {

  useEffect(() => {

  }, []);

  return (
    <div className='relative'>
      <div className='w-full mt-3'>
        <div className='w-full p-3 open-sans-600 ml-3 text-2xl'>
          <h1 className='ml-3 open-sans-600'>Our Gallery</h1>
        </div>

        <div className='w-full flex items-center justify-center'>

          <div className="w-[98vw] flex flex-row items-center mt-3 overflow-x-auto no-scrollbar rounded-lg overflow-hidden">
            <div className="relative flex flex-row animate-carousel">
              <div className='w-[98vw] max-h-[70vh] flex items-center object-cover sm:object-none'>
                <img src={ss} alt="img" className='w-full h-full sm:h-auto' />
              </div>
              <div className='w-[98vw] max-h-[70vh] flex items-center object-cover sm:object-none'>
                <img src={ss} alt="img" className='w-full h-full sm:h-auto' />
              </div>
              <div className='w-[98vw] max-h-[70vh] flex items-center object-cover sm:object-none'>
                <img src={ss} alt="img" className='w-full h-full sm:h-auto' />
              </div>
            </div>
          </div>
        </div>

      </div> 
    </div>
  )
}

export default Carousel