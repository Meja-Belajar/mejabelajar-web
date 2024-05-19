import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { UserService } from "@src/apis/services/userService";

import { setCurrentUser } from "@src/redux/user/userSelectors";

import "@src/assets/global.css";
import { animate, exit, initial } from "@src/assets/pageTransitions";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCurrentUser(UserService.logOut()));
    navigate("/login");
  };

  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="flex w-full flex-col gap-5 bg-white px-3 text-[#161931] md:flex-row md:px-16 lg:px-28"
      >
        <section
          className="mt-10 flex w-full items-center justify-end px-5 md:hidden"
          onClick={() => setIsVisible(!isVisible)}
        >
          <FontAwesomeIcon icon={faGear} size="xl" />
        </section>

        <Outlet />

        <aside
          className="absolute h-full w-full bg-white py-4 md:relative md:block md:h-auto md:w-1/3 md:bg-transparent lg:w-1/4"
          style={{
            display:
              window.innerWidth < 768 ? (isVisible ? "block" : "none") : "",
          }}
        >
          <div className="sticky top-12 flex w-full flex-col gap-2 p-4 text-sm">
            <h2 className="open-sans-600 mb-4 pl-3 text-2xl">
              Profile Settings
            </h2>

            <NavLink
              to="/profile"
              className="open-sans-600 flex w-[90%] items-center rounded-full bg-white px-3 py-2.5 hover:border hover:border-purple-accent-500 md:w-auto"
              style={() => {
                return {
                  border:
                    window.location.pathname === "/profile"
                      ? "solid 1px #B46EFB"
                      : "",
                };
              }}
              onClick={() => setIsVisible(false)}
            >
              Your Profile
            </NavLink>
            <NavLink
              to="/profile/notification"
              className="open-sans-600 flex w-[90%] items-center rounded-full border-purple-accent-500 px-3 py-2.5 hover:border md:w-auto"
              style={({ isActive }) => {
                return {
                  border: isActive ? "solid 1px #B46EFB" : "",
                };
              }}
              onClick={() => setIsVisible(false)}
            >
              Notifications
            </NavLink>
            <NavLink
              to="/profile/application"
              className="open-sans-600 flex w-[90%] items-center rounded-full border-purple-accent-500 px-3 py-2.5 hover:border md:w-auto"
              style={({ isActive }) => {
                return {
                  border: isActive ? "solid 1px #B46EFB" : "",
                };
              }}
              onClick={() => setIsVisible(false)}
            >
              Become A Mentor
            </NavLink>
            <a
              onClick={handleLogout}
              className="open-sans-600 flex w-[90%] cursor-pointer items-center rounded-full px-3 py-2.5 hover:border hover:border-red-500 md:w-auto"
            >
              Log Out
            </a>
          </div>
        </aside>
      </motion.div>
    </>
  );
};
export default ProfilePage;
