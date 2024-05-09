import {
  faClock,
  faMapLocation,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateUtil } from "@src/utils/dateUtil";
import "@src/assets/global.css";
import { bookingDTO } from "@src/models/dtos/bookingDTO";
import { useCallback, useEffect, useState } from "react";
import { BookingService } from "@src/apis/services/bookingService";
import { Button, Skeleton } from "@nextui-org/react";

type BookingCardProps = {
  key: string;
  book: bookingDTO;
};

type BookingsWrapperProps = {
  userId: string;
};

type BookingState = {
  onShow: number;
  isLoading: boolean;
  items: bookingDTO[];
  error: string;
}

const BookingCard = (props: BookingCardProps) => {
  const { book } = props;
  const isActive = DateUtil.compare(book?.date, new Date().toISOString());

  return (
    <section className="flex  w-full flex-col items-center justify-center p-3">
      <section className="w-[90%] rounded-2xl bg-white p-5 pb-8">
        <section className="flex w-full flex-row flex-wrap justify-between p-2">
          <div className="">
            <div>
              <h2 className="text-md open-sans-300 text-blue-accent-300">
                Mentoring Details
              </h2>
            </div>
            <div>
              <h1 className="open-sans-600 text-xl">
                {book.course.name}
              </h1>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="mt-3 flex min-w-16 items-center justify-center rounded-full px-3 py-2"
              style={{
                backgroundColor: isActive ? "#B46EFB" : "red",
              }}
            >
              <p className="text-xs text-white-accent-1">
                {isActive
                  ? DateUtil.diff(book.date, new Date().toISOString())
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
              {DateUtil.format(book.date)}
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
            <p className="text-sm text-gray-400">{book.location}</p>
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
              {book.mentor.name}
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

const SkeletonBookingCard = () => {
  return (
    <section className="flex  w-full flex-col items-center justify-center p-3">
      <section className="w-[90%] rounded-2xl bg-white p-5 pb-8">
        <section className="flex w-full flex-row flex-wrap justify-between p-2">
          <Skeleton className="w-1/5 rounded-lg">
            <div className="h-10 w-1/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg mt-5">
            <div className="h-2 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-1/3 rounded-lg mt-5">
            <div className="h-20 w-1/3 rounded-lg bg-default-200"></div>
          </Skeleton>
        </section>
      </section>
    </section>
  )
}

const BookingsWrapper = (props: BookingsWrapperProps) => {
  const { userId } = props;

  const [bookings, setBookings] = useState<BookingState>({
    onShow: 1,
    isLoading: false,
    items: [],
    error: ''
  } as BookingState);

  const fetchBookings = async () => {
    try {
      setBookings({ ...bookings, isLoading: true });
      const response: bookingDTO[] = await BookingService.getAllBookingsByUserId(userId);

      setBookings({ ...bookings, isLoading: false, items: response });
    } catch(e) {
      if(e instanceof Error){
        setBookings({ ...bookings, isLoading: false, error: e.message });
      }
    }
  };

  const renderBookings = useCallback(() => {
    if(bookings.isLoading) {
      return <SkeletonBookingCard />
    }

    if(bookings.items.length === 0) {
      return (
        <section className="w-full mx-8">
          <h1>
            { bookings.error ? bookings.error : "No bookings found" }
          </h1>
        </section>
      )
    }

    return bookings.items.slice(0, bookings.onShow).map((book) => (
      <BookingCard key={book.id} book={book} />
    ));  

  }, [bookings]);

  const renderShowBookingsButton = () => {
    if(bookings.items.length === 0) return null;
      
    return (
      <section className="mt-10 flex w-full items-center justify-center">
        <Button
          className="h-10 w-1/2 rounded-full bg-blue-accent-300 text-white-accent-1 shadow-sm drop-shadow-lg sm:w-1/6"
          onClick={() => setBookings({ ...bookings, onShow: bookings.onShow === 1 ? bookings.items.length : 1 })}
        >
          { bookings.onShow === 1 ? 'VIEW ALL' : 'VIEW LESS' }
        </Button>
      </section>
    )
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <section>
      <div className="mt-10 flex w-full items-center justify-start">
        <h1 className="open-sans-600 mb-5 ml-8 text-2xl">
          Your Schedule
        </h1>
      </div>

      { renderBookings() }
      { renderShowBookingsButton() }
    </section>
  )
};

export { 
  BookingCard, 
  SkeletonBookingCard, 
  BookingsWrapper 
};
