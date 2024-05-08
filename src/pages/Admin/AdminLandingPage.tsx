import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
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
import Lottie from "react-lottie";
import screenProblem from "@src/assets/lotties/screen-problem.json";
import { AdminService } from "@src/apis/services/adminService";

const AdminLandingPage = () => {
  const navigate = useNavigate();
  const currentPath =
    window.location.pathname.split("/")[2] ? window.location.pathname.split("/")[2] : "Dashboard";
  
  const [adminStatus, setAdminStatus] = useState<boolean>(false);
    
  const checkAdmin = async () => {
    if(!adminStatus) {
      const adminId = window.prompt("Enter your admin ID");

      if(adminId) {
        try {
          const response: boolean = await AdminService.verify(adminId) as boolean;
          
          setAdminStatus(response);
        } catch(e) {
          navigate("/");
        }
      } 
    }
  }

  const adminErrorLoad = () => {
    return (
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="w-full flex items-center justify-center"
      >
        <div className="mt-8 flex w-3/4 flex-col items-center justify-between sm:mt-2">
          <div className="flex w-full flex-row items-center justify-center p-5 sm:w-1/2">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: screenProblem,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
          <div className="mt-8 flex w-full flex-col items-center p-3 text-center ">
            <h1 className="open-sans-600 text-3xl sm:text-6xl">500 ERROR</h1>
            <p className="open-sans-500 mt-5 text-center text-xl opacity-80">
              Admin Page can only be accessed by admin from min-screens width 1000px. ....
            </p>
          </div>
        </div>
      </motion.div>
    )
  }
  
  useEffect(() => {
    checkAdmin();
  }, []);

  if(window.innerWidth < 1000 || !adminStatus) return adminErrorLoad();

  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="w-full"
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
                    <NavLink
                      to="/admin/"
                      className="open-sans-600 rounded-md  px-3 py-2 text-sm font-medium"
                      style={() => {
                        return {
                          backgroundColor: currentPath === "Dashboard" ? "#B46EFB" : "white",
                          color: currentPath === "Dashboard" ? "white" : "black",
                        }
                      }}
                      aria-current="page"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/admin/Announcement"
                      className="open-sans-600 rounded-md px-3 py-2 text-sm font-medium"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#B46EFB" : "white",
                          color: isActive ? "white" : "black",
                        }
                      }}
                    >
                      Announcement
                    </NavLink>
                    <NavLink
                      to="/admin/Report"
                      className="open-sans-600 rounded-md px-3 py-2 text-sm font-medium"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#B46EFB" : "white",
                          color: isActive ? "white" : "black",
                        }
                      }}
                    >
                      Report
                    </NavLink>
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
