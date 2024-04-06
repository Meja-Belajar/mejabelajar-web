import { faClock, faMapLocation, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dateDiff, dateFormat } from "@src/utils/dateUtil";

const BookingCard = (booking: any) => {
  const book = booking.booking;

  return (
    <section className='w-full  flex flex-col items-center justify-center p-3'>
      <section className='w-[90%] bg-white p-5 pb-8 rounded-2xl'>

        <section className='w-full  flex flex-row justify-between p-2 flex-wrap'>
          <div className=''>
            <div>
              <h2 className='text-blue-accent-300 text-md open-sans-300'>Mentoring Details</h2>
            </div>
            <div>
              <h1 className='text-xl open-sans-600'>{book?.booking?.course?.name}</h1>
            </div>
          </div>
          <div className=' flex items-center'>
            <div 
              className='rounded-full px-3 py-2 min-w-16 flex justify-center items-center mt-3'
              style={{
                backgroundColor: book?.booking?.isActive ? '#B46EFB' : 'red'
              }}
            >
              <p className='text-white-accent-1 text-xs'>
                {
                  book?.booking?.isActive 
                  ? 
                  dateDiff(book?.booking?.date, new Date().toISOString())
                  :
                  'LATE'
                }
              </p>
            </div>
          </div>
        </section>

        <section className='w-full border mt-2 mb-5 border-gray-300'/>

        <section className='flex flex-col items-start justify-center'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center p-1 w-full md:w-1/2 flex-wrap'>
            <div className="w-1/2 flex flex-row ">
              <FontAwesomeIcon icon={faClock} className='mr-1 text-gray-400 w-[15%]'/>
              <p className='text-gray-400 text-sm'>Date</p>

            </div>
            <p className='text-gray-400 text-sm'>{dateFormat(book?.booking?.date)}</p>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center p-1 w-full md:w-1/2 flex-wrap'>
            <div className="w-1/2 flex flex-row ">
              <FontAwesomeIcon icon={faMapLocation} className='mr-1 text-gray-400 w-[15%]' />
              <p className='text-gray-400 text-sm'>Location</p>
            </div>
            <p className='text-gray-400 text-sm'>{book?.booking?.location}</p>
          </div>

          <div className='flex flex-col sm:flex-row items-start sm:items-center p-1 w-full md:w-1/2 flex-wrap'>
            <div className="w-1/2 flex flex-row ">
              <FontAwesomeIcon icon={faPerson} className='mr-1 text-gray-400 w-[15%]'/>
              <p className='text-gray-400 text-sm'>Mentor</p>

            </div>
            <p className='text-gray-400 text-sm'>{book?.booking?.mentor?.name}</p>
          </div>
        </section>

      </section>
    </section>
  )

};

export default BookingCard;