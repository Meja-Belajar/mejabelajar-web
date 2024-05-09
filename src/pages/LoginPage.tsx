import React, { useEffect, useReducer, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { motion } from "framer-motion";

import { exit, animate, initial } from "@src/assets/pageTransition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Form, Link, useNavigate } from "react-router-dom";
import { UserService } from "@src/apis/services/userService";

import Logo from "@src/components/Logo";

import { LoginUserSchema } from "@src/models/zod/userZod";
import { LoginUserRequest } from "@src/models/requests/userRequest";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  setUserError,
  setUserLoading,
} from "@src/redux/user/userSelectors";
// import { Validation } from '@src/utils/validation';
import { useForm } from "@src/hooks";
import "@src/assets/global.css";
import { UserDTO } from "@src/models/dtos/userDTO";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const dispatch = useDispatch();
  const userErrorMessage = useSelector((state: any) => state.user.userError);
  const isUserLoading = useSelector((state: any) => state.user.isUserLoading);

  const navigate = useNavigate();

  const former = useForm<LoginUserRequest>({
    initialValues: {} as LoginUserRequest,
    validationSchema: LoginUserSchema,
    onSubmit: async () => {
      try {
        dispatch(setUserLoading(true));
        console.log(former.values);
        const loginResponse: UserDTO = await UserService.login({
          email: former.values.email,
          password: former.values.password,
        });

        // error validation already handled by loginResponse
        dispatch(setCurrentUser(loginResponse));
        console.log(loginResponse);

        navigate("/");
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setUserError(error.toString()));
          former.setIsError(true);
        }
      } finally {
        dispatch(setUserLoading(false));
      }
    },
  });

  return (
    <>
      <motion.div
        className="flex h-[100vh] w-full flex-col items-center justify-center"
        initial={initial}
        animate={animate}
        exit={exit}
      >
        <nav className="absolute top-0 mt-2 flex h-16 w-full items-center justify-between p-3 sm:p-7">
          <Logo />
          <div>
            <Link
              className="p-3 transition ease-soft-spring hover:text-blue-accent-300"
              to="/"
            >
              HOME
            </Link>
            <Link
              className="p-3 transition ease-soft-spring hover:text-blue-accent-300"
              to="/register"
            >
              REGISTER
            </Link>
          </div>
        </nav>

        <form
          className="w-[90%] rounded-lg bg-white p-5 drop-shadow-2xl lg:w-1/3"
          onSubmit={former.onSubmitHandler}
        >
          <div className="m-3">
            <h1 className="open-sans-600 text-xl">Welcome back!</h1>
            <p className="text-sm">
              create your next courses with our best perform mentor
            </p>
          </div>
          <div className="m-3 mt-8">
            <Input
              name="email"
              type="email"
              variant="bordered"
              label="Email / Username"
              value={former.values.email}
              onChange={former.onChangeHandler}
              errorMessage={
                former.errorMessages.email && former.errorMessages.email
              }
              required
            />
            {/* {former.errorMessages.email && <p className='text-red-600 text-xs m-3'>{former.errorMessages.email}</p>} */}
            <Input
              name="password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
              label="Password"
              className="mt-3"
              required
              value={former.values.password}
              onChange={former.onChangeHandler}
              errorMessage={
                former.errorMessages.password && former.errorMessages.password
              }
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <FontAwesomeIcon icon={faEyeSlash} className="opacity-60" />
                  ) : (
                    <FontAwesomeIcon icon={faEye} className="opacity-60" />
                  )}
                </button>
              }
            />
            {/* {former.errorMessages.password && <p className='text-red-600 text-xs m-3'>{former.errorMessages.password}</p>} */}
          </div>

          <div className="m-3 flex items-end justify-end pb-2 pt-2">
            <Link
              to="/"
              className="text-xs underline decoration-transparent underline-offset-2 hover:decoration-black"
            >
              Forget Password ?
            </Link>
          </div>
          <div className="m-3 flex flex-col items-center justify-center">
            <Button
              type="submit"
              color="default"
              variant="solid"
              className="w-full bg-blue-accent-300 text-black"
              isLoading={isUserLoading}
            >
              Login
            </Button>
          </div>
        </form>

        {/* if error not empty show modal */}
        <Modal
          isOpen={former.isError}
          backdrop={"blur"}
          hideCloseButton
          className="py-14"
        >
          <ModalContent>
            <ModalBody className="flex items-center text-red-500">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="text-5xl"
              />

              {userErrorMessage && (
                <h2 className="mt-6 text-sm">{userErrorMessage}</h2>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </motion.div>
    </>
  );
};

export default LoginPage;
