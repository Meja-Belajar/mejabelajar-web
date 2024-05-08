import { motion } from "framer-motion";
import { animate, exit, initial } from "@src/assets/PageTransition";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@src/contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCamera,
  faSave,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { logoutService } from "@src/apis/services/userService";
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
    dispatch(setCurrentUser(logoutService()));
    navigate("/login");
  };

  const handleUpdateProfile = async (e: any) => {};

  return (
    <>
      <div className="mt-5 flex w-full items-center justify-center bg-gradient-to-r from-blue-accent-300 via-purple-500 to-pink-500 p-5">
        <Button
          className="flex w-[70%] items-center justify-center p-3 text-white sm:w-1/4"
          variant="bordered"
          startContent={
            <FontAwesomeIcon icon={faBook} className="text-md p-2" />
          }
        >
          {/* {login?.user?.account_type === 'MENTOR' ? 'FILL YOUR LOG BOOK' : 'VERIFY YOUR SESSION'} */}
        </Button>
      </div>
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        className="mt-5 w-full p-4"
      >
        <div className="ml-5 flex flex-col items-start sm:flex-row">
          <div className="flex flex-col items-center p-2">
            <h1 className="open-sans-600 mb-3 sm:hidden">Profile Image</h1>

            <div className="group relative w-20 cursor-pointer rounded-full sm:mt-10 sm:w-40">
              <div className="absolute top-0 hidden h-20 w-20 cursor-pointer items-center justify-center bg-gray-500 bg-opacity-50 transition duration-300 ease-in-out group-hover:flex sm:h-40 sm:w-40">
                <FontAwesomeIcon
                  icon={faCamera}
                  className="absolute cursor-pointer text-3xl text-white-accent-2 "
                />
              </div>
              <input
                type="file"
                className="absolute top-0 h-20 w-20 cursor-pointer opacity-0 sm:h-40 sm:w-40"
                onInput={(e) => handleImageChange(e)}
              />
              <img
                src={profile}
                alt="profile"
                className="aspect-square cursor-pointer border"
              />
            </div>

            <p className="lato-regular sm:text-md mt-2 text-xs">
              Update Picture
            </p>
          </div>

          <div className="mt-10 w-full p-2 sm:ml-10">
            <h1 className="lato-bold mb-3">Profile Information</h1>
            <div className="flex w-[90%] flex-col gap-5">
              <Input
                type="email"
                label="Email"
                variant="bordered"
                placeholder="Enter your email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-f"
              />
              <Input
                type="text"
                label="Name"
                variant="bordered"
                placeholder="Enter your name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                className="w-f"
              />
              <Textarea
                variant="bordered"
                label="Description"
                placeholder="Enter your description"
                className="max-w-f"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
          </div>
        </div>

        <div className="mb-10 mt-20 flex w-full justify-end pr-10">
          <Button
            color="success"
            variant="bordered"
            startContent={<FontAwesomeIcon icon={faSave} className="text-md" />}
            onClick={handleUpdateProfile}
            className="mr-5"
          >
            Save Changes
          </Button>
          <Button
            color="danger"
            variant="bordered"
            startContent={
              <FontAwesomeIcon icon={faSignOut} className="text-md" />
            }
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </motion.div>
    </>
  );
};
export default ProfilePage;
