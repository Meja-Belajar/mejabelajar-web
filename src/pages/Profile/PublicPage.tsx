import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { faSave, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import { useForm } from "@src/hooks";
import { motion } from "framer-motion";

import { UserService } from "@src/apis/services/userService";

import {
  setCurrentUser,
  setUserError,
  setUserLoading,
} from "@src/redux/user/userSelectors";

import { UpdateUserRequest } from "@src/models/requests/userRequest";
import { UpdateProfileSchema } from "@src/models/zod/userZod";

import { animate, exit, initial } from "@src/assets/pageTransitions";

const PublicPage = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const dispatch = useDispatch();

  const former = useForm<UpdateUserRequest>({
    initialValues: {
      id: currentUser.id,
      user_name: currentUser.username,
      email: currentUser.email,
      phone_number: currentUser.phone_number,
      description: currentUser.description,
      profile_picture: currentUser.profile_picture,
      bod: currentUser.bod,
    } as UpdateUserRequest,
    validationSchema: UpdateProfileSchema,
    onSubmit: async () => {
      try {
        dispatch(setUserLoading(true));

        const updateResponse = await UserService.update({
          id: former.values.id,
          user_name: former.values.user_name,
          email: former.values.email,
          phone_number: former.values.phone_number,
          description: former.values.description,
          profile_picture: former.values.profile_picture,
          bod: former.values.bod,
        });

        dispatch(setCurrentUser(updateResponse));
        console.log(updateResponse);

        navigate("/");
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setUserError(error.toString()));
        }
      } finally {
        dispatch(setUserLoading(false));
      }
    },
  });

  const handleImageChange = async (e: any) => {};
  const handleImageRemove = async (e: any) => {};

  return (
    <>
      <motion.main
        initial={initial}
        animate={animate}
        exit={exit}
        className="min-h-screen w-full py-1 md:w-2/3 lg:w-3/4"
      >
        <div className="p-2 md:p-4">
          <div className="mt-8 w-full px-6 pb-8 sm:max-w-xl sm:rounded-lg">
            <div className="mx-auto mt-8 grid max-w-2xl">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0 ">
                <img
                  className="h-40 w-40 rounded-full object-cover p-1 ring-2 ring-purple-accent-500 dark:ring-indigo-500"
                  src={currentUser.profile_picture}
                  alt="Bordered avatar"
                />

                <input
                  type="file"
                  className="transparent absolute top-16 h-16 w-16 cursor-pointer opacity-0 sm:h-40 sm:w-40"
                  onInput={handleImageChange}
                />
              </div>

              <p className="sm:text-md open-sans-600 mt-8 text-xs opacity-80">{`ID: ${currentUser.id}`}</p>
              <form
                className="mt-8 items-center text-[#202142] sm:mt-3"
                onSubmit={former.onSubmitHandler}
              >
                <div className="mb-2 flex w-full flex-col items-center space-x-0 space-y-2 sm:mb-6 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <div className="w-full">
                    <input
                      name="user_name"
                      className="block w-full rounded-lg border border-indigo-300 bg-gray-100 p-2.5 text-sm text-indigo-900 focus:border-indigo-500 focus:ring-indigo-500 "
                      placeholder="Your Username"
                      value={former.values.user_name}
                      required
                      onChange={former.onChangeHandler}
                    />
                    {former.errorMessages.user_name && (
                      <p className="mt-2 text-xs italic text-red-500">
                        {former.errorMessages.user_name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-2 sm:mb-6">
                  <input
                    name="email"
                    type="email"
                    className="block w-full rounded-lg border border-indigo-300 bg-gray-100 p-2.5 text-sm text-indigo-900 focus:border-indigo-500 focus:ring-indigo-500 "
                    placeholder="your.email@mail.com"
                    value={former.values.email}
                    onChange={former.onChangeHandler}
                    required
                  />
                  {former.errorMessages.email && (
                    <p className="mt-2 text-xs italic text-red-500">
                      {former.errorMessages.email}
                    </p>
                  )}
                </div>

                <div className="mb-2 sm:mb-6">
                  <input
                    name="phone_number"
                    type="tel"
                    className="block w-full rounded-lg border border-indigo-300 bg-gray-100 p-2.5 text-sm text-indigo-900 focus:border-indigo-500 focus:ring-indigo-500 "
                    placeholder="Your Phone Number"
                    value={former.values.phone_number}
                    onChange={former.onChangeHandler}
                    required
                  />
                  {former.errorMessages.phone_number && (
                    <p className="mt-2 text-xs italic text-red-500">
                      {former.errorMessages.phone_number}
                    </p>
                  )}
                </div>

                <div className="mb-2 sm:mb-6">
                  <input
                    name="bod"
                    type="date"
                    id="bod"
                    className="block w-full rounded-lg border border-indigo-300 bg-gray-100 p-2.5 text-sm text-indigo-900 focus:border-indigo-500 focus:ring-indigo-500 "
                    placeholder="Your Birthday"
                    value={
                      new Date(former.values.bod).toISOString().split("T")[0]
                    }
                    onChange={former.onChangeHandler}
                    required
                  />
                  {former.errorMessages.bod && (
                    <p className="mt-2 text-xs italic text-red-500">
                      {former.errorMessages.bod.toString()}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <textarea
                    name="description"
                    rows={4}
                    className="block w-full rounded-lg border border-indigo-300 bg-gray-100 p-2.5 text-sm text-indigo-900 focus:border-indigo-500 focus:ring-indigo-500 "
                    placeholder="Write your bio here..."
                    value={former.values.description}
                    onChange={() => former.onChangeHandler}
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    color="success"
                    variant="bordered"
                    startContent={
                      <FontAwesomeIcon icon={faSave} className="text-md" />
                    }
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
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default PublicPage;
