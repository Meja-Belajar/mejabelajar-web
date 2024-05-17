import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import { AdminService } from "@src/apis/services/adminService";

import Logo from "@src/components/Logo";

import { AdminDTO } from "@src/models/dtos/adminDTO";

import "@src/assets/global.css";
import screenProblem from "@src/assets/lotties/screen-problem.json";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const AdminLandingPage = () => {
  const currentPath = window.location.pathname.split("/")[2]
    ? window.location.pathname.split("/")[2]
    : "Dashboard";

  const [admin, setAdmin] = useState<AdminDTO>({} as AdminDTO);
  const [id, setId] = useState<string>("");

  const renderAdminForm = () => {
    const handleValidateId = async (onClose: () => void) => {
      if (!id) return alert("Please enter your Admin ID");

      try {
        const admin: AdminDTO = await AdminService.verify({ id });

        setAdmin(admin);
        onClose();
      } catch (e) {
        console.error(e);
        return alert("Admin ID Rejected!");
      }
    };

    return (
      <Modal isOpen={true} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Verify Admin
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Your Admin ID"
                  placeholder="Enter your Admin ID"
                  variant="bordered"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-purple-accent-500 text-white"
                  onPress={() => handleValidateId(onClose)}
                >
                  Verify
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };

  const renderErrorScreen = () => {
    return (
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="flex w-full items-center justify-center"
      >
        <div className="mt-8 flex w-3/4 flex-col items-center justify-between sm:mt-2">
          <div className="flex w-full flex-row items-center justify-center p-5 sm:w-1/2">
            <Lottie
              animationData={screenProblem}
              loop={true}
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="mt-8 flex w-full flex-col items-center p-3 text-center ">
            <h1 className="open-sans-600 text-3xl sm:text-6xl">500 ERROR</h1>
            <p className="open-sans-500 mt-5 text-center text-xl opacity-80">
              Admin Page can only be accessed by admin from min-screens width
              900px. ....
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  if (window.innerWidth < 900) {
    return renderErrorScreen();
  }

  if (!admin.admin_id) {
    return renderAdminForm();
  }

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
                      to="/admin"
                      className="open-sans-600 rounded-md  px-3 py-2 text-sm font-medium"
                      style={() => {
                        return {
                          backgroundColor:
                            currentPath === "Dashboard" ? "#B46EFB" : "white",
                          color:
                            currentPath === "Dashboard" ? "white" : "black",
                        };
                      }}
                      aria-current="page"
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/admin/Application"
                      className="open-sans-600 rounded-md px-3 py-2 text-sm font-medium"
                      style={({ isActive }) => {
                        return {
                          backgroundColor: isActive ? "#B46EFB" : "white",
                          color: isActive ? "white" : "black",
                        };
                      }}
                    >
                      Application
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
                          src={admin?.profile_picture}
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
