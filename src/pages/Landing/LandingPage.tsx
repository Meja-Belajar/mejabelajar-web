import GuestLanding from "./GuestLandingPage";
import UserLanding from "./UserLandingPage";
import { useSelector } from "react-redux";
import "@src/assets/global.css";

const Landing = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const isUserLoading = useSelector((state: any) => state.user.isUserLoading);

  if (isUserLoading) {
    return <></>;
  }

  if (currentUser) {
    return <UserLanding />;
  }

  return <GuestLanding />;
};

export default Landing;
