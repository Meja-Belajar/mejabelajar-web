import { AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
import AuthRouter from "./authRouter";
import PublicRouter from "./publicRouter";

const Router: React.FC = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  return (
    <>
      <AnimatePresence>
        {currentUser ? <AuthRouter /> : <PublicRouter />}
      </AnimatePresence>
    </>
  );
};

export default Router;
