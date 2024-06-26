import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { faMailBulk, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalendarDate, Time } from "@internationalized/date";
import {
  Button,
  DateInput,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  TimeInput,
  useDisclosure,
} from "@nextui-org/react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

import { BookingService } from "@src/apis/services/bookingService";
import { MentorService } from "@src/apis/services/mentorService";

import Navigation from "@src/components/Navigation";

import { useFetch } from "@src/hooks/useFetch";

import { CourseDTO } from "@src/models/dtos/courseDTO";
import { MentorDTO } from "@src/models/dtos/mentorDTO";
import { CreateBookingRequest } from "@src/models/requests/bookingRequest";
import { GetMentorByMentorIdRequest } from "@src/models/requests/mentorRequest";

import { AppUtil } from "@src/utils/appUtil";
import { DateUtil } from "@src/utils/dateUtil";
import { NumberUtil } from "@src/utils/numberUtil";

import "@src/assets/global.css";
import { ImageUrl } from "@src/assets/imageUrl";
import { Image } from "@src/assets/images/Image";
import { animate, exit, initial } from "@src/assets/pageTransitions";

type scheduleProps = {
  date: {
    year: number;
    month: number;
    day: number;
  };
  from: {
    hour: number;
    minute: number;
  };
  to: {
    hour: number;
    minute: number;
  };
};

type priceProps = {
  totalMinutes: number;
  totalPrice: number;
};

const MentoringPage = () => {
  const { mentorId } = useParams();

  const [createBookingIsLoading, setCreateBookingIsLoading] =
    useState<boolean>(false);

  const [warning, setWarning] = useState<string>("");
  const [price, setPrice] = useState<priceProps>({
    totalMinutes: 0,
    totalPrice: 0,
  });
  const [selectedCourse, setSelectedCourse] = useState<CourseDTO>(
    {} as CourseDTO,
  );
  const [schedule, setSchedule] = useState<scheduleProps>({
    date: {
      year: DateUtil.getCurrentYear(),
      month: DateUtil.getCurrentMonth(),
      day: DateUtil.getCurrentDay(),
    },
    from: {
      hour: 1,
      minute: 0,
    },
    to: {
      hour: 1,
      minute: 0,
    },
  });

  // @ts-ignore
  const [scrollBehavior, setScrollBehavior] =
    useState<ModalProps["scrollBehavior"]>("inside");

  const mentor = useFetch<GetMentorByMentorIdRequest, MentorDTO>({
    fetchProps: { mentor_id: mentorId } as GetMentorByMentorIdRequest,
    fetchCallback: MentorService.getMentorByMentorId,
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const currentUser = useSelector((state: any) => state.user.currentUser);
  const [location, setLocation] = useState<string>("");

  useMemo(() => {
    if (!selectedCourse) {
      setPrice({
        totalMinutes: 0,
        totalPrice: 0,
      });
      return;
    }

    if (schedule.to.hour < schedule.from.hour) {
      setPrice({
        totalMinutes: 0,
        totalPrice: 0,
      });
      return;
    }

    const fromDateTime = DateUtil.fromUniversalDate({
      ...schedule.date,
      ...schedule.from,
    });
    const toDateTime = DateUtil.fromUniversalDate({
      ...schedule.date,
      ...schedule.to,
    });

    const totalMinutes = DateUtil.getMinutesDifference(
      fromDateTime,
      toDateTime,
    );

    const totalPrice = NumberUtil.priceOnDuration(
      totalMinutes,
      selectedCourse.hourly_rate,
    );

    if (totalMinutes / 60 > 6) {
      setWarning("Maximum booking duration is 6 hours");
    }

    setPrice({
      totalMinutes: totalMinutes,
      totalPrice: totalPrice,
    });
  }, [schedule.from, schedule.to, selectedCourse]);

  const handleTimeChange = (type: string, hour: number, minute: number) => {
    setWarning(minute !== 0 ? "Every schedule must be in hour only" : "");

    setSchedule({
      ...schedule,
      [type]: {
        hour: hour,
        minute: 0,
      },
    });
  };

  const handleDateChange = (year: number, month: number, day: number) => {
    const condition = DateUtil.isPast(
      DateUtil.fromUniversalDate({
        year: year,
        month: month,
        day: day,
        hour: 0,
        minute: 0,
      }),
    );

    setWarning(condition ? "You can't book a schedule in the past" : "");

    setSchedule({
      ...schedule,
      date: {
        year: year,
        month: month,
        day: day,
      },
    });
  };

  const handleSuccessEffect = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCourseChange = (course: CourseDTO) => {
    setSelectedCourse(course);
  };

  const handleBookingCreation = async (onClose: () => void) => {
    try {
      setCreateBookingIsLoading(true);
      const response = await BookingService.create({
        user_id: currentUser.user_id,
        mentor_id: mentor.data!.mentor_id,
        course_id: selectedCourse.course_id,
        scheduled_at: DateUtil.toISOString(
          DateUtil.fromUniversalDate({
            year: schedule.date.year,
            month: schedule.date.month,
            day: schedule.date.day + 1,
            hour: schedule.from.hour,
            minute: schedule.from.minute,
          }),
        ),
        scheduled_location: "Based on discussion with mentor",
        created_at: DateUtil.toISOString(new Date()),
        invoice: {
          payment_method: "QRIS",
          payment_name: "Mentoring Payment",
          payment_status: "success",
          payment_amount: price.totalPrice,
        },
      } as unknown as CreateBookingRequest);

      console.log(response);
      setTimeout(() => {
        setCreateBookingIsLoading(false);
        handleSuccessEffect();
        onClose();
      }, 2000);

      setTimeout(() => navigate("/"), 3000);
    } catch (e) {
      setWarning(`Something went wrong, please try again later: ${e}`);
      return alert("Failed to create booking");
    }
  };

  const renderStore = useCallback(() => {
    if (mentor.error || !mentor.data) {
      return (
        <div className="mt-20 flex items-center justify-center px-7">
          <h1 className="text-red-500">{mentor.error}</h1>
        </div>
      );
    }

    const mentorData = mentor.data as MentorDTO;

    return (
      <>
        <section className="w-full py-4">
          <div className="container mx-auto px-4">
            <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-7 lg:gap-16">
              <div className="lg:col-span-3 lg:row-end-1 ">
                <div className="lg:order-2 lg:ml-2">
                  <div className="mx-auto max-w-sm overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full object-cover"
                      src={mentorData?.profile_picture}
                      alt={mentorData?.username}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-0 lg:col-span-4 lg:row-span-2 lg:row-end-2">
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-row items-start gap-3">
                    <h1 className="open-sans-700 font-bold leading-9 text-gray-900 sm:text-3xl">
                      {mentorData?.username}
                    </h1>
                    <div className="flex flex-row items-center rounded-full border-2 border-yellow-300 px-2 py-1">
                      <img src={Image.star} alt="star" className="w-4" />
                      <p className="open-sans-600 text-xs text-yellow-400">
                        {mentorData?.rating}
                      </p>
                    </div>
                  </div>

                  <div className="mr-10 mt-2 flex flex-row items-center gap-3">
                    <a href={AppUtil.toWhatsappMe(mentorData.phone_number)}>
                      <img
                        src={Image.whatsapp}
                        alt="whatsapp"
                        className="w-7"
                      />
                    </a>
                    <a href={AppUtil.toMailTo(mentorData.email)}>
                      <FontAwesomeIcon
                        icon={faMailBulk}
                        className="text-gray-600"
                      />
                    </a>
                  </div>
                </div>

                <p className="mt-2 text-sm font-medium uppercase text-gray-900">
                  <span className="font-semibold text-blue-500">
                    {mentorData?.university}
                  </span>
                </p>

                <p className="mt-3 pr-10 text-justify text-base text-gray-600">
                  {mentorData?.description}
                </p>

                <div className="mt-8">
                  {mentorData?.courses?.map((course) => (
                    <div
                      className="mt-4 flex items-center justify-start"
                      key={course.course_id}
                    >
                      <input
                        type="radio"
                        id={course.course_id}
                        name="course"
                        value={course.course_id}
                        checked={selectedCourse.course_id === course.course_id}
                        onChange={() => handleCourseChange(course)}
                        className="sm:mr-2"
                      />
                      <label
                        htmlFor={course.course_id}
                        className="open-sans-600 text-md"
                      >
                        {course.name}
                      </label>
                    </div>
                  ))}

                  {!mentorData?.courses && (
                    <p className="mt-4 text-sm text-red-500">
                      **This mentor doesn't have any course available right
                      now.**
                    </p>
                  )}
                </div>

                <div className="mt-8 border-t pt-5 sm:mr-10">
                  <h1 className="open-sans-600 mb-5 ml-1 text-xl">
                    Schedule:{" "}
                  </h1>
                  {warning && (
                    <p className="mb-3 ml-1 text-sm text-red-500">{warning}</p>
                  )}
                  <div className="space-between flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-center">
                    <DateInput
                      variant="bordered"
                      label="MM/DD/YYYY"
                      className="w-full sm:w-1/4"
                      value={
                        new CalendarDate(
                          schedule.date.year,
                          schedule.date.month,
                          schedule.date.day,
                        )
                      }
                      onChange={(e) => handleDateChange(e.year, e.month, e.day)}
                    />
                    <TimeInput
                      variant="bordered"
                      label="From"
                      className="w-full sm:w-1/4"
                      value={new Time(schedule.from.hour, schedule.from.minute)}
                      onChange={(e) =>
                        handleTimeChange("from", e.hour, e.minute)
                      }
                    />
                    <TimeInput
                      variant="bordered"
                      label="To"
                      className="w-full sm:w-1/4"
                      value={new Time(schedule.to.hour, schedule.to.minute)}
                      onChange={(e) => handleTimeChange("to", e.hour, e.minute)}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-row items-center justify-between border-t py-4 sm:mr-10 sm:space-y-0">
                  <div className="flex items-end">
                    <h1 className="text-3xl font-bold">
                      {NumberUtil.formatToRupiah(price.totalPrice)}
                    </h1>
                  </div>
                  <Button
                    onPress={mentorData?.courses && onOpen}
                    className="bg-purple-accent-500 px-10 py-6 text-white"
                    style={{
                      cursor: mentorData?.courses ? "pointer" : "not-allowed",
                    }}
                  >
                    {mentorData?.courses ? "Book" : "No course available"}
                  </Button>
                </div>
                <div className="mt-10 flex flex-col items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0"></div>
              </div>
            </div>
          </div>
        </section>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior={scrollBehavior}
        >
          <ModalContent className="px-2 py-5">
            {(onClose) => renderModalContent(onClose)}
          </ModalContent>
        </Modal>
      </>
    );
  }, [mentor, selectedCourse, schedule, price, createBookingIsLoading]);

  const renderModalContent = (onClose: () => void) => {
    if (
      !selectedCourse?.course_id ||
      price.totalPrice === 0 ||
      price.totalMinutes / 60 > 6 ||
      DateUtil.isPast(
        DateUtil.fromUniversalDate({
          ...schedule.date,
          ...schedule.to,
        }),
      )
    ) {
      return (
        <>
          <ModalHeader className="flex flex-col gap-1">Booking</ModalHeader>
          <ModalBody className="top-0 mb-5">
            <p className="text-justify text-sm text-red-500">
              Please select a course first, minimum session time is 1 hours with
              maximum time is 6 hours, and you can't book a schedule in the
              past.
            </p>
          </ModalBody>
        </>
      );
    }

    return (
      <>
        <ModalHeader className="flex flex-col gap-1 text-xl">
          Booking
        </ModalHeader>
        <ModalBody className="mb-5">
          <p className="text-md">
            You are about to book{" "}
            <span className="font-semibold">{selectedCourse.name} </span>
            with <span className="font-semibold">{mentor.data?.username} </span>
            on{" "}
            <span className="font-semibold">
              {DateUtil.toLocalString(
                DateUtil.fromUniversalDate({
                  ...schedule.date,
                  ...schedule.to,
                }),
              )}{" "}
            </span>
            to{" "}
            <span className="font-semibold">
              {DateUtil.toLocalString(
                DateUtil.fromUniversalDate({
                  ...schedule.date,
                  ...schedule.to,
                }),
              )}{" "}
            </span>
          </p>
          <p className="text-md mt-5">
            Total price:{" "}
            <span className="font-semibold">
              {NumberUtil.formatToRupiah(price.totalPrice)}
            </span>
          </p>

          <div className="mt-4 border-t">
            <h1 className="open-sans-600 mt-3 text-red-500">
              Please make the payment through this QRIS.
            </h1>
            <img src={ImageUrl.QRIS} alt="qris_image" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="bg-green-500 text-white"
            onClick={() => handleBookingCreation(onClose)}
          >
            {!createBookingIsLoading ? `I have already paid` : `Validating...`}
          </Button>
        </ModalFooter>
      </>
    );
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      className="w-full"
    >
      <Navigation />

      {mentor.isLoading ? (
        <div className="mt-20 flex items-center justify-center px-7">
          <FontAwesomeIcon icon={faSpinner} spin className="text-3xl" />
        </div>
      ) : (
        renderStore()
      )}
    </motion.div>
  );
};

export default MentoringPage;
