import { useCallback, useEffect, useState } from "react";

import {
  faClock,
  faMapLocation,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Skeleton } from "@nextui-org/react";

import { BookingService } from "@src/apis/services/bookingService";

import { BookingDTO } from "@src/models/dtos/bookingDTO";

import { DateUtil } from "@src/utils/dateUtil";

import "@src/assets/global.css";

type BookingCardProps = {
  key: string;
  book: BookingDTO;
  isMentor: boolean;
};

type BookingsWrapperProps = {
  userId?: string;
  mentorId?: string;
};

type BookingState = {
  onShow: number;
  isLoading: boolean;
  items: BookingDTO[];
  error: string;
};

const BookingCard = (props: BookingCardProps) => {
  const { book, isMentor } = props;
  const isActive = DateUtil.compareDate(
    DateUtil.fromISO(book?.date),
    DateUtil.getToday(),
  );

  return (
    <section className="flex  w-full flex-col items-center justify-center p-3">
      <section className="w-[90%] rounded-2xl bg-white p-5 pb-8">
        <section className="flex w-[98%] flex-row flex-wrap justify-between p-2">
          <div className="px-3">
            <div>
              <h2 className="text-md open-sans-300 text-blue-accent-300">
                Mentoring Details
              </h2>
            </div>
            <div>
              <h1 className="open-sans-600 text-xl">{book.course.name}</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="mt-3 flex min-w-16 items-center justify-center rounded-full px-3 py-2"
              style={{
                backgroundColor: isActive ? "green" : "red",
              }}
            >
              <p className="text-xs text-white">
                {isActive
                  ? DateUtil.getDifference(
                      DateUtil.fromISO(book.date),
                      DateUtil.getToday(),
                    )
                  : isMentor
                    ? "Expired"
                    : "Late"}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-4 mb-5 mt-2 w-[98%] border border-gray-300" />

        <section className="flex flex-col items-start justify-center">
          <div className="flex w-full flex-col flex-wrap items-start py-1 sm:flex-row sm:items-start md:w-3/4">
            <div className="flex w-1/2 flex-row ">
              <FontAwesomeIcon
                icon={faClock}
                className="mr-1 w-[15%] text-gray-400"
              />
              <p className="text-sm text-gray-400">Date</p>
            </div>
            <p className="text-sm text-gray-400">
              {DateUtil.toLocalString(DateUtil.fromISO(book.date))}
            </p>
          </div>

          <div className="flex w-full flex-col flex-wrap items-start py-1 sm:flex-row sm:items-center md:w-3/4">
            <div className="flex w-1/2 flex-row ">
              <FontAwesomeIcon
                icon={faMapLocation}
                className="mr-1 w-[15%] text-gray-400"
              />
              <p className="text-sm text-gray-400">Location</p>
            </div>
            <p className="text-sm text-gray-400">{book.location}</p>
          </div>

          <div className="flex w-full flex-col flex-wrap items-start py-1 sm:flex-row sm:items-center md:w-3/4">
            <div className="flex w-1/2 flex-row ">
              <FontAwesomeIcon
                icon={faPerson}
                className="mr-1 w-[15%] text-gray-400"
              />
              <p className="text-sm text-gray-400">
                {isMentor ? "Mentee" : "Mentor"}
              </p>
            </div>
            <p className="text-sm text-gray-400">
              {isMentor ? book.user.name : book.mentor.name}
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
          <Skeleton className="mt-5 w-full rounded-lg">
            <div className="h-2 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="mt-5 w-1/3 rounded-lg">
            <div className="h-20 w-1/3 rounded-lg bg-default-200"></div>
          </Skeleton>
        </section>
      </section>
    </section>
  );
};

const BookingsWrapper = (props: BookingsWrapperProps) => {
  const { userId, mentorId } = props;

  const [bookings, setBookings] = useState<BookingState>({
    onShow: 1,
    isLoading: false,
    items: [],
    error: "",
  } as BookingState);

  const fetchBookings = useCallback(async () => {
    try {
      setBookings({ ...bookings, isLoading: true });
      const response: BookingDTO[] = userId
        ? await BookingService.getAllBookingsByUserId({ user_id: userId! })
        : await BookingService.getAllBookingsByMentorId({
            mentor_id: mentorId!,
          });

      const sortedResponse = response.sort((a, b) => {
        return DateUtil.compareDate(
          DateUtil.fromISO(a.date),
          DateUtil.fromISO(b.date),
        )
          ? -1
          : 1;
      });

      setBookings({ ...bookings, isLoading: false, items: sortedResponse });
    } catch (e) {
      if (e instanceof Error) {
        setBookings({ ...bookings, isLoading: false, error: e.message });
      }
    }
  }, [userId, mentorId]);

  const renderBookings = useCallback(() => {
    if (bookings.isLoading || bookings.error) {
      return <SkeletonBookingCard />;
    }

    if (bookings.items.length === 0) {
      return (
        <section className="mx-8 w-full">
          <h1>{bookings.error ? bookings.error : "No bookings found"}</h1>
        </section>
      );
    }

    return bookings.items
      .slice(0, bookings.onShow)
      .map((book) => (
        <BookingCard
          key={book.id}
          book={book}
          isMentor={userId ? false : true}
        />
      ));
  }, [bookings]);

  const renderShowBookingsButton = () => {
    if (bookings.items.length === 0) return null;

    return (
      <section className="mt-10 flex w-full items-center justify-center">
        <Button
          className="h-10 w-1/2 rounded-full bg-blue-accent-300 text-white-accent-1 shadow-sm drop-shadow-lg sm:w-1/6"
          onClick={() =>
            setBookings({
              ...bookings,
              onShow: bookings.onShow === 1 ? bookings.items.length : 1,
            })
          }
        >
          {bookings.onShow === 1 ? "VIEW ALL" : "VIEW LESS"}
        </Button>
      </section>
    );
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <section>
      <div className="mt-10 flex w-full items-center justify-start">
        <h1 className="open-sans-600 mb-5 ml-8 text-2xl">Your Schedule</h1>
      </div>

      {renderBookings()}
      {renderShowBookingsButton()}
    </section>
  );
};

export { BookingCard, SkeletonBookingCard, BookingsWrapper };
