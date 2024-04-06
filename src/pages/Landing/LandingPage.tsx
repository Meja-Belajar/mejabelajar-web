import { UserContext } from "@src/contexts/UserContext";
import { useContext } from "react";
import GuestLanding from "./GuestLandingPage";
import UserLanding from "./UserLandingPage";
import { useSelector } from "react-redux";

const Landing = () => {
  const { user } = useContext(UserContext);
  
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const isUserLoading = useSelector((state: any) => state.user.isUserLoading);

  if(isUserLoading){
    return <></>
  }

  if(currentUser){
    return <UserLanding />
  }

  return <GuestLanding />
}


export default Landing