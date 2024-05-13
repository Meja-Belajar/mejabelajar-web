import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faBell,
  faBellSlash,
  faCheck,
  faEllipsisVertical,
  faEye,
  faMessage,
  faMoneyBill,
  faPencil,
  faPhone,
  faSortDown,
  faSortUp,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import BookingLists from "@src/assets/data/BookingLists.json";
import {
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import "@src/assets/global.css";
import { useNavigate } from "react-router-dom";
import { PopularMentors } from "@src/assets/data/userLandingData";
const AdminOverview = () => {

  const mentors = PopularMentors;
  const [isMentorsView, setIsMentorView] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <>
      <motion.div className="px-8 py-5">
        <section className="w-full rounded-2xl bg-purple-accent-500 p-8 shadow-lg drop-shadow-lg">
          <div className="flex flex-col gap-5 text-white sm:w-1/2 sm:flex-row sm:justify-between">
            <div className="p-1">
              <h3 className="open-sans-600 text-white-accent-1">
                Total Bookings
              </h3>
              <h1 className="open-sans-600 text-3xl">12</h1>
            </div>

            <div className="p-1">
              <h3 className="open-sans-600 text-white-accent-1">
                Total Income
              </h3>
              <h1 className="open-sans-600 text-3xl">Rp230.120,-</h1>
            </div>
            <div className="p-1">
              <h3 className="open-sans-600 text-white-accent-1">
                Total Request
              </h3>
              <h1 className="open-sans-600 text-3xl">10</h1>
            </div>
          </div>
        </section>

        <div className="mt-10" />

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl bg-blue-accent-300 p-8 text-white shadow-lg drop-shadow-lg"
          >
            <nav className="flex w-full flex-row items-center justify-between">
              <h1 className="text-3xl">Available Mentors</h1>
              <div
                className="flex cursor-pointer items-center justify-center p-2 pb-3"
                onClick={() => setIsMentorView(!isMentorsView)}
              >
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="transform text-xl transition duration-300 ease-out"
                  style={{
                    transform: isMentorsView ? "rotate(0)" : "rotate(-90deg)",
                  }}
                />
              </div>
            </nav>
          </motion.div>

          <div className="mt-10">
            {isMentorsView &&
              mentors.map((mentor, index) => (
                <div
                  key={index}
                  className="bg-blue-accent-500 mt-3 w-full rounded-2xl border bg-white px-8 py-6 text-black "
                >
                  <div className="mt-2 flex flex-col items-start justify-between sm:flex-row sm:items-center">
                    <h1 className="text-xl">{mentor.mentor_id}</h1>
                    <h2 className="text-2xl">{mentor.username}</h2>
                  </div>
                  <div className="mt-5 flex flex-row items-end justify-between">
                    <div>
                      <div className="text-l text-gray-700">
                        <FontAwesomeIcon icon={faMessage} />
                        <span className="ml-3">{mentor.email}</span>
                      </div>
                      <div className="text-lg text-gray-700">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="ml-3">{mentor.phone}</span>
                      </div>
                      <div className="text-lg text-gray-700">
                        <FontAwesomeIcon icon={faMoneyBill} />
                        <span className="ml-3">{mentor.revenue}</span>
                      </div>
                    </div>

                    <Button
                      startContent={
                        <FontAwesomeIcon
                          icon={faMessage}
                          className="text-white"
                        />
                      }
                      className="mt-3 bg-blue-accent-300 text-white"
                      onClick={() => navigate("")}
                    >
                      Message
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </AnimatePresence>

        <section className="mt-20">
          <div>
            <span className="open-sans-600 mr-1 text-3xl">Transactions</span>
            <sup className="-top-3">{BookingLists.length}</sup>
          </div>

          <Table
            removeWrapper
            aria-label="Collection Transaction"
            className="mt-10"
          >
            <TableHeader>
              <TableColumn>User</TableColumn>
              <TableColumn>Mentor</TableColumn>
              <TableColumn>Course</TableColumn>
              <TableColumn>Time</TableColumn>
              <TableColumn>Location</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>

            <TableBody>
              {BookingLists.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell>{booking.userId}</TableCell>
                  <TableCell>{booking.courseId}</TableCell>
                  <TableCell>{booking.courseId}</TableCell>
                  <TableCell>{booking.createdAt}</TableCell>
                  <TableCell>{booking.createdAt}</TableCell>
                  <TableCell>{booking.createdAt}</TableCell>
                  <TableCell>
                    <Tooltip content="Approve Booking">
                      <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                        <FontAwesomeIcon icon={faCheck} className="ml-3" />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Cancel Booking">
                      <span className="cursor-pointer text-lg text-danger active:opacity-50">
                        <FontAwesomeIcon icon={faX} className="ml-3" />
                      </span>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </motion.div>
    </>
  );
};

const PopOverComponent = ({ index, booking }: any) => {
  const [isPopOver, setIsPopOver] = useState<boolean>(false);

  const handleCancel = () => {
    setIsPopOver(false);
    console.log("Cancel");
  };

  const handleAccept = () => {
    setIsPopOver(false);
    console.log("Accept");
  };

  return (
    <div
      key={index}
      className="bg-blue-accent-500 mt-3 w-full rounded-2xl border border-black-accent-1 px-6 py-4 text-black"
    >
      <Popover isOpen={isPopOver} placement="bottom" showArrow={true}>
        <PopoverTrigger onClick={() => setIsPopOver(true)}>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="cursor-pointer py-1"
          />
        </PopoverTrigger>
        <PopoverContent className="flex flex-row p-3">
          <div
            className="mr-2 cursor-pointer rounded-full bg-red-500 p-3 px-4 text-white"
            onClick={handleCancel}
          >
            <FontAwesomeIcon icon={faBan} />
          </div>

          <div
            className="cursor-pointer rounded-full bg-green-500 p-3 px-4 text-white"
            onClick={handleAccept}
          >
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </PopoverContent>
      </Popover>
      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h1 className="text-2xl">{booking.userId}</h1>
        <h2 className="text-lg">{booking.courseId}</h2>
      </div>
      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h3 className="text-lg">{booking.createdAt}</h3>
        <h3 className="text-lg">{booking.mentorId}</h3>
      </div>
    </div>
  );
};

export { PopOverComponent };
export default AdminOverview;
