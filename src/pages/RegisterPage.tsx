import { useState } from "react";
import { motion } from "framer-motion";
import { exit, animate, initial } from "@src/assets/pageTransition";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { UserService } from "@src/apis/services/userService";
import Logo from "@src/components/Logo";

import { RegisterUserSchema } from "@src/models/zod/userZod";
import { RegisterUserRequest } from "@src/models/requests/userRequest";
import { DateUtil } from "@src/utils/dateUtil";
import { useForm } from "@src/hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUser,
  setUserError,
  setUserLoading,
} from "@src/redux/user/userSelectors";
import "@src/assets/global.css";
import { UserDTO } from "@src/models/dtos/userDTO";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const dispatch = useDispatch();
  const userErrorMessage = useSelector((state: any) => state.user.userError);
  const isUserLoading = useSelector((state: any) => state.user.isUserLoading);

  const navigate = useNavigate();

  const former = useForm<RegisterUserRequest>({
    initialValues: {} as RegisterUserRequest,
    validationSchema: RegisterUserSchema,
    onSubmit: async () => {
      try {
        dispatch(setUserLoading(true));

        const registerResponse: UserDTO = await UserService.register({
          user_name: former.values.user_name,
          email: former.values.email,
          password: former.values.password,
          phone_number: former.values.phone_number,
          bod: former.values.bod,
          confirm_password: former.values.confirm_password,
          created_by: former.values.user_name,
        });

        dispatch(setCurrentUser(registerResponse));
        console.log(registerResponse);

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

  return (
    <>
      <motion.div
        className="flex w-full flex-col items-center pb-36"
        initial={initial}
        animate={animate}
        exit={exit}
      >
        <nav className="mb-10 mt-2 flex h-16 w-full items-center justify-between p-3 sm:p-7">
          <Logo />
          <div>
            <Link
              className="lato-regular p-3 transition ease-soft-spring hover:text-blue-accent-300"
              to="/"
            >
              HOME
            </Link>
            <Link
              className="lato-regular p-3 transition ease-soft-spring hover:text-blue-accent-300"
              to="/login"
            >
              LOGIN
            </Link>
          </div>
        </nav>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <form
            className="w-[90%] rounded-lg bg-white p-5 drop-shadow-2xl lg:w-1/3 "
            onSubmit={former.onSubmitHandler}
          >
            <div className="m-3">
              <h1 className="lato-bold text-xl">
                Hay 👋, let's become our family!
              </h1>
              <p className="lato-regular text-sm">
                start your journey with our best perform mentor
              </p>
            </div>
            <div className="m-3 mt-8">
              <Input
                name="user_name"
                type="name"
                variant="bordered"
                className="lato-regular mt-3"
                label="Name"
                value={former.values.user_name}
                onChange={former.onChangeHandler}
                errorMessage={
                  former.errorMessages.user_name &&
                  former.errorMessages.user_name
                }
              />
              <Input
                name="email"
                type="email"
                variant="bordered"
                className="lato-regular mt-3"
                label="Email"
                value={former.values.email}
                onChange={former.onChangeHandler}
                errorMessage={
                  former.errorMessages.email && former.errorMessages.email
                }
              />
              <Input
                name="phone_number"
                type="text"
                variant="bordered"
                className="lato-regular mt-3"
                label="Phone Number"
                value={former.values.phone_number}
                onChange={former.onChangeHandler}
                errorMessage={
                  former.errorMessages.phone_number &&
                  former.errorMessages.phone_number
                }
              />
              <Input
                name="bod"
                type="date"
                variant="bordered"
                className="lato-regular mt-3"
                classNames={{
                  label: "-mt-4 text-xs",
                }}
                label="Date of Birth"
                value={former.values.bod?.toString()}
                onChange={former.onChangeHandler}
                errorMessage={
                  former?.errorMessages?.bod?.toString() &&
                  former?.errorMessages?.bod?.toString()
                }
                key="outside"
                max={DateUtil.minAge()}
              />
              <Input
                name="password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
                label="Password"
                className="lato-regular mt-3"
                value={former.values.password}
                errorMessage={
                  former.errorMessages.password && former.errorMessages.password
                }
                onChange={former.onChangeHandler}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="opacity-60"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faEye} className="opacity-60" />
                    )}
                  </button>
                }
              />
              <Input
                name="confirm_password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
                label="Confirm Password"
                className="lato-regular mt-3"
                value={former.values.confirm_password}
                errorMessage={
                  former.errorMessages.confirm_password &&
                  former.errorMessages.confirm_password
                }
                onChange={former.onChangeHandler}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="opacity-60"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faEye} className="opacity-60" />
                    )}
                  </button>
                }
              />
            </div>

            <div className="m-3 flex items-end justify-end pb-2 pt-2">
              <Link
                to="/login"
                className="text-xs underline decoration-transparent underline-offset-2 hover:decoration-black"
              >
                Already have an account ?
              </Link>
            </div>

            <div className="m-3 flex flex-col items-center justify-center">
              <Button
                type="submit"
                color="default"
                variant="solid"
                className="lato-regular w-full bg-blue-accent-300 text-black"
                isLoading={isUserLoading}
              >
                Register
              </Button>
            </div>
          </form>
        </div>

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

export default RegisterPage;
