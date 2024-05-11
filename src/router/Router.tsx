import { AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
import AuthRouter from "./authRouter";
import PublicRouter from "./publicRouter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Router: React.FC = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  // scroll to top when route changes
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
      <AnimatePresence>
        {currentUser ? <AuthRouter /> : <PublicRouter />}
      </AnimatePresence>
    </>
  );
};

export default Router;
