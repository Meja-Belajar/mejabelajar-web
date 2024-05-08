import {
  faClock,
  faMapLocation,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateUtil } from "@src/utils/dateUtil";
import "@src/assets/global.css";

const BookingCard = (booking: any) => {
  const book = booking.booking;

  return (
    <section className="flex  w-full flex-col items-center justify-center p-3">
      <section className="w-[90%] rounded-2xl bg-white p-5 pb-8">
        <section className="flex  w-full flex-row flex-wrap justify-between p-2">
          <div className="">
            <div>
              <h2 className="text-md open-sans-300 text-blue-accent-300">
                Mentoring Details
              </h2>
            </div>
            <div>
              <h1 className="open-sans-600 text-xl">
                {book?.booking?.course?.name}
              </h1>
            </div>
          </div>
          <div className=" flex items-center">
            <div
              className="mt-3 flex min-w-16 items-center justify-center rounded-full px-3 py-2"
              style={{
                backgroundColor: book?.booking?.isActive ? "#B46EFB" : "red",
              }}
            >
              <p className="text-xs text-white-accent-1">
                {book?.booking?.isActive
                  ? DateUtil.diff(book?.booking?.date, new Date().toISOString())
                  : "LATE"}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-5 mt-2 w-full border border-gray-300" />

        <section className="flex flex-col items-start justify-center">
          <div className="flex w-full flex-col flex-wrap items-start p-1 sm:flex-row sm:items-center md:w-1/2">
            <div className="flex w-1/2 flex-row ">
              <FontAwesomeIcon
                icon={faClock}
                className="mr-1 w-[15%] text-gray-400"
              />
              <p className="text-sm text-gray-400">Date</p>
            </div>
            <p className="text-sm text-gray-400">
              {DateUtil.format(book?.booking?.date)}
            </p>
          </div>

          <div className="flex w-full flex-col flex-wrap items-start p-1 sm:flex-row sm:items-center md:w-1/2">
            <div className="flex w-1/2 flex-row ">
              <FontAwesomeIcon
                icon={faMapLocation}
                className="mr-1 w-[15%] text-gray-400"
              />
              <p className="text-sm text-gray-400">Location</p>
            </div>
            <p className="text-sm text-gray-400">{book?.booking?.location}</p>
          </div>

          <div className="flex w-full flex-col flex-wrap items-start p-1 sm:flex-row sm:items-center md:w-1/2">
            <div className="flex w-1/2 flex-row ">
              <FontAwesomeIcon
                icon={faPerson}
                className="mr-1 w-[15%] text-gray-400"
              />
              <p className="text-sm text-gray-400">Mentor</p>
            </div>
            <p className="text-sm text-gray-400">
              {book?.booking?.mentor?.name}
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default BookingCard;
