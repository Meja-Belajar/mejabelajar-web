import { motion } from "framer-motion";
import "@src/assets/global.css";
import { animate, exit, initial } from "@src/assets/pageTransitions";
import Navigation from "@src/components/Navigation";
import { useParams } from "react-router-dom";
import { useFetch } from "@src/hooks/useFetch";
import { MentorDTO } from "@src/models/dtos/mentorDTO";
import { MentorService } from "@src/apis/services/mentorService";
import { getMentorByIdRequest } from "@src/models/requests/mentorRequest";
import {
  Button,
  DateInput,
  DateValue,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  TimeInput,
  select,
  useDisclosure,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faSpinner,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { CalendarDate, Time } from "@internationalized/date";
import { CourseDTO } from "@src/models/dtos/courseDTO";
import { DateUtil } from "@src/utils/dateUtil";
import { NumberUtil } from "@src/utils/numberUtil";
import { ImageUrl } from "@src/assets/data/imageUrl";

import confetti from "canvas-confetti";

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

const MentoringPage = () => {
  const { mentorId } = useParams();
  const [warning, setWarning] = useState<string>("");

  const [price, setPrice] = useState<number>(0);
  const [selectedCourse, setSelectedCourse] = useState<CourseDTO>(
    {} as CourseDTO,
  );

  const [schedule, setSchedule] = useState<scheduleProps>({
    date: {
      year: 2024,
      month: 1,
      day: 1,
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

  const calculatePrice = () => {
    if (!selectedCourse) {
      setPrice(0);
      return;
    }

    if (schedule.to.hour < schedule.from.hour) {
      setPrice(0);
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
    const totalMinutes = DateUtil.getMinutes(fromDateTime, toDateTime);
    const totalPrice = NumberUtil.priceOnDuration(
      totalMinutes,
      selectedCourse.hourly_rate,
    );

    if (totalMinutes / 60 > 6) {
      setWarning("Maximum booking duration is 6 hours");
    }

    setPrice(totalPrice);
  };

  const handleCourseChange = (course: CourseDTO) => {
    setSelectedCourse(course);
    calculatePrice();
  };

  useEffect(() => {
    calculatePrice();
  }, [schedule]);

  const mentor = useFetch<getMentorByIdRequest, MentorDTO>({
    fetchProps: { mentor_id: mentorId } as getMentorByIdRequest,
    fetchCallback: MentorService.getMentorById,
  });

  const renderStore = () => {
    const mentorData = mentor.data as MentorDTO;

    return (
      <>
        <section className="w-full py-4">
          <div className="container mx-auto px-4">
            <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-7 lg:gap-16">
              <div className="lg:col-span-3 lg:row-end-1">
                <div className="lg:order-2 lg:ml-2">
                  <div className="mx-auto max-w-sm overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full object-cover"
                      src={mentorData.profile_picture}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-0 lg:col-span-4 lg:row-span-2 lg:row-end-2">
                <h1 className="open-sans-700 font-bold leading-9 text-gray-900 sm:text-3xl">
                  {mentorData.username}
                </h1>

                <p className="mt-2 text-sm font-medium uppercase text-gray-900">
                  <span className="font-semibold text-blue-500">
                    {mentorData.university}
                  </span>
                </p>

                <p className="mt-3 pr-10 text-justify text-base text-gray-600">
                  {mentorData.description}
                </p>

                <div className="mt-8">
                  {mentorData.courses.map((course) => (
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
                      label="Date"
                      className="w-full sm:w-1/4"
                      value={
                        new CalendarDate(
                          schedule.date.year,
                          schedule.date.month,
                          schedule.date.day,
                        )
                      }
                      onChange={(e) => {
                        setSchedule({
                          ...schedule,
                          date: {
                            year: e.year,
                            month: e.month,
                            day: e.day,
                          },
                        });
                      }}
                    />
                    <TimeInput
                      variant="bordered"
                      label="From"
                      className="w-full sm:w-1/4"
                      value={new Time(schedule.from.hour, schedule.from.minute)}
                      onChange={(e) => {
                        if (e.minute !== 0) {
                          setWarning("Every schedule must be in hour only");
                        }
                        setSchedule({
                          ...schedule,
                          from: {
                            hour: e.hour,
                            minute: 0,
                          },
                        });
                      }}
                    />
                    <TimeInput
                      variant="bordered"
                      label="To"
                      className="w-full sm:w-1/4"
                      value={new Time(schedule.to.hour, schedule.to.minute)}
                      onChange={(e) => {
                        if (e.minute !== 0) {
                          setWarning("Every schedule must be in hour only");
                        }
                        setSchedule({
                          ...schedule,
                          to: {
                            hour: e.hour,
                            minute: 0,
                          },
                        });
                      }}
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-row items-center justify-between border-t py-4 sm:mr-10 sm:space-y-0">
                  <div className="flex items-end">
                    <h1 className="text-3xl font-bold">
                      {NumberUtil.formatToRupiah(price)}
                    </h1>
                  </div>
                  <Button
                    onPress={onOpen}
                    className="bg-purple-accent-500 px-10 py-6 text-white"
                  >
                    Create Booking
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
  };

  const [scrollBehavior, setScrollBehavior] =
    useState<ModalProps["scrollBehavior"]>("inside");

  const renderModalContent = (onClose: () => void) => {
    if (!selectedCourse?.course_id || price === 0) {
      return (
        <>
          <ModalHeader className="flex flex-col gap-1">Booking</ModalHeader>
          <ModalBody className="top-0 mb-5">
            <p className="text-sm text-red-500">
              Please select a course first and minimum session time is 1 hours
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
              {NumberUtil.formatToRupiah(price)}
            </span>
          </p>

          <div className="mt-4 border-t">
            <h1 className="open-sans-600 mt-3 text-red-500">
              Please make the payment through this QRIS.
            </h1>
            <img src={ImageUrl.qris} alt="" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="bg-green-500 text-white"
            onPress={() => {
              onClose();
              handleSuccessEffect();
            }}
          >
            I Already Paid
          </Button>
        </ModalFooter>
      </>
    );
  };
  const handleSuccessEffect = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      className="w-full"
    >
      <Navigation />

      {mentor.isLoading && (
        <div className="mt-20 flex items-center justify-center px-7">
          <FontAwesomeIcon icon={faSpinner} spin className="text-3xl" />
        </div>
      )}

      {!mentor.isLoading && mentor.data && renderStore()}
    </motion.div>
  );
};

export default MentoringPage;
