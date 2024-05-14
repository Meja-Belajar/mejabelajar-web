import { AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
// import AuthRouter from "./authRouter";
// import PublicRouter from "./publicRouter";
import { useNavigate } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import LoadingPage from "@src/pages/LoadingPage.tsx";

const AuthRouter = lazy(() => import("./authRouter.tsx"));
const PublicRouter = lazy(() => import("./publicRouter.tsx"));

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
        <Suspense
          fallback={
            <LoadingPage message="Getting everything ready for you... " />
          }
        >
          {currentUser ? <AuthRouter /> : <PublicRouter />}
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default Router;
