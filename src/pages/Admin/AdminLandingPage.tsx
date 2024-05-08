import React from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { initial, animate, exit } from "@src/assets/PageTransition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBox,
  faBullhorn,
  faCalendar,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import "@src/assets/global.css";
import Logo from "@src/components/Logo";
import { current } from "@reduxjs/toolkit";

const adminData = {
  name: "John Doe",
  email: "",
  role: "admin",
  status: "active",
  createdAt: "2021-01-01",
  updatedAt: "2021-01-01",
};

const allBookings = [
  {
    id: 1,
    name: "John Doe",
    email: "",
    status: "active",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
  },
];

// const AdminLandingPage = () => {
//   const { announcement } = useParams();
//   const navigate = useNavigate();

//   return (
//     <>
//       <motion.div
//         initial={initial}
//         animate={animate}
//         exit={exit}
//         classNameName='w-full border border-black'
//       >

//         <nav className='w-[calc(100% - 1%)] m-[1%]'>
//           <div className='flex flex-row items-center'>
//             <div className='m-1 px-3 rounded-2xl py-2  w-fit'>
//               <Button
//                 className='m-1 text-white mr-3'
//                 startContent={<FontAwesomeIcon icon={faCalendar} />}
//                 style={{
//                   backgroundColor: announcement !== 'announcement' ? '#B46EFB' : '#cccbc8',
//                 }}
//                 onClick={() => {
//                   navigate('/admin/');
//                 }}
//               >
//                 Overview
//               </Button>
//               <Button
//                 className='m-1 text-white'
//                 startContent={<FontAwesomeIcon icon={faBullhorn} />}
//                 style={{
//                   backgroundColor: announcement === 'announcement' ? '#B46EFB' : '#cccbc8',
//                 }}
//                 onClick={() => {
//                   navigate('/admin/announcement');
//                 }}
//               >
//                 Announcement
//               </Button>
//               <Button
//                 className='m-1 text-white bg-red-500 ml-3'
//                 startContent={<FontAwesomeIcon icon={faRightFromBracket} />}
//                 onClick={() => {

//                 }}
//               >
//                 Logout
//               </Button>
//             </div>
//           </div>
//         </nav>

//         <Outlet />
//       </motion.div>
//     </>
//   )
// }

const AdminLandingPage = () => {
  const { announcement } = useParams();
  const navigate = useNavigate();

  // get current path
  const currentPath =
    window.location.pathname === "/admin"
      ? "Dashboard"
      : window.location.pathname.split("/")[2];

  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="w-full border border-black"
      >
        <nav className="text-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Logo />
                </div>
                <div className="">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link
                      to="/admin"
                      className="open-sans-600 rounded-md bg-purple-accent-500 px-3 py-2 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/admin/Announcement"
                      className="open-sans-600 rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-accent-500 hover:text-white"
                    >
                      Announcement
                    </Link>
                    <Link
                      to="/admin/Report"
                      className="open-sans-600 rounded-md px-3 py-2 text-sm font-medium hover:bg-purple-accent-500 hover:text-white"
                    >
                      Report
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-purple-accent-500 p-1 text-white hover:text-black-accent-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <FontAwesomeIcon icon={faBell} className="px-2" />
                  </button>

                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="open-sans-600 text-3xl font-bold tracking-tight text-gray-900">
              {currentPath}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </motion.div>
    </>
  );
};

export default AdminLandingPage;
