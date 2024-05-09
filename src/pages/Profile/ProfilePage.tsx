import { motion } from "framer-motion";
import { animate, exit, initial } from "@src/assets/pageTransition";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCamera,
  faSave,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { UserService } from "@src/apis/services/userService";
import { setCurrentUser } from "@src/redux/user/userSelectors";
import "@src/assets/global.css";

const ProfilePage = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const navigate = useNavigate();

  console.log(currentUser);
  const [name, setName] = useState<string>(currentUser?.data?.name || "");
  const [email, setEmail] = useState<string>(currentUser?.data?.email || "");
  const [profile, setProfile] = useState<string>(
    currentUser?.data?.profile_picture || "",
  );
  const [description, setDescription] = useState<string>(
    currentUser?.data?.description || "",
  );

  const dispatch = useDispatch();

  const handleImageChange = async (e: any) => {};

  const handleLogout = () => {
    dispatch(setCurrentUser(UserService.logOut()));
    navigate("/login");
  };

  const handleUpdateProfile = async (e: any) => {};

  return (
    <>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="flex w-full flex-col gap-5 bg-white px-3 text-[#161931] md:flex-row md:px-16 lg:px-28"
      >
        <Outlet />
        <aside className="hidden py-4 md:block md:w-1/3 lg:w-1/4">
          <div className="sticky top-12 flex w-full flex-col gap-2 p-4 text-sm">
            <h2 className="open-sans-600 mb-4 pl-3 text-2xl">
              Profile Settings
            </h2>

            <NavLink
              to="/profile"
              className="open-sans-600 flex items-center rounded-full bg-white px-3 py-2.5 hover:border hover:border-purple-accent-500"
              style={() => {
                return {
                  backgroundColor: "white",
                  color: "black",
                };
              }}
            >
              Your Profile
            </NavLink>
            <NavLink
              to="/profile/notification"
              className="open-sans-600 flex items-center rounded-full border-purple-accent-500 px-3 py-2.5 hover:border"
              style={({ isActive }) => {
                return {
                  border: isActive ? "solid 1px #B46EFB" : "",
                };
              }}
            >
              Notifications
            </NavLink>
            <a
              onClick={handleLogout}
              className="open-sans-600 flex cursor-pointer items-center rounded-full px-3 py-2.5 hover:border hover:border-purple-accent-500"
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
