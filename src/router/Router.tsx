import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "@src/pages/Landing/LandingPage";
import Login from "@src/pages/LoginPage";
import Register from "@src/pages/RegisterPage";
import ErrorPage from "@src/pages/ErrorPage";
import Profile from "@src/pages/ProfilePage";

import { UserProvider } from "@src/contexts/UserContext";
import { AuthRedirector } from "@src/components/AuthRedirector";
import { QueryProvider } from "@src/contexts/SearchQueryContext";
import Search from "@src/pages/Search/SearchPage";
import SearchDefault from "@src/pages/Search/SearchDefault";
import SearchResult from "@src/pages/Search/SearchResult";
import AdminLandingPage from "@src/pages/Admin/AdminLandingPage";
import AdminOverview from "@src/pages/Admin/AdminOverview";
import AdminAnnouncement from "@src/pages/Admin/AdminAnnouncement";
import ConstructionPage from "@src/pages/ConstructionPage";
import { useSelector } from "react-redux";
import AuthRouter from "./authRouter";
import PublicRouter from "./publicRouter";

const Router: React.FC = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);

  return (
    <>
      <UserProvider>
        <AnimatePresence>
          {currentUser ? <AuthRouter /> : <PublicRouter />}
        </AnimatePresence>
      </UserProvider>
    </>
  );
};

export default Router;
