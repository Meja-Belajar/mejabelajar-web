import { Navigate, Route, Routes } from "react-router-dom";
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
import UserLanding from "@src/pages/Landing/UserLandingPage";

const AuthRouter = () => {
  return (
    <Routes key="auth-routes">
      {/* routes that don't require login */}
      <Route path="/" element={<UserLanding />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/register" element={<Navigate to="/login" />} />

      {/* routes that require user to login */}
      <Route
        path="/search"
        element={
          <QueryProvider>
            <Search />
          </QueryProvider>
        }
      >
        <Route index element={<SearchDefault />} />
        <Route path=":query" element={<SearchResult />} />
      </Route>

      <Route path="/profile" element={<Profile />} />
      <Route path="/history" />
      <Route path="/tutoring" />

      {/* exclusive to admin */}
      <Route path="/admin" element={<AdminLandingPage />}>
        <Route index element={<AdminOverview />} />
        <Route path=":announcement" element={<AdminAnnouncement />} />
      </Route>

      {/* future enchancement routes */}
      <Route path="/about/*" element={<ConstructionPage />} />
      <Route path="/overview/*" element={<ConstructionPage />} />
      <Route path="/idea/*" element={<ConstructionPage />} />
      <Route path="/mentor/*" element={<ConstructionPage />} />
      <Route path="/tutor/*" element={<ConstructionPage />} />
      <Route path="/investors/*" element={<ConstructionPage />} />
      <Route path="/universities/*" element={<ConstructionPage />} />
      <Route path="/supports/*" element={<ConstructionPage />} />
      <Route path="/mobileapps/*" element={<ConstructionPage />} />
      <Route path="/faq/*" element={<ConstructionPage />} />
      <Route path="/announcement/*" element={<ConstructionPage />} />
      <Route path="/appstutorial/*" element={<ConstructionPage />} />
    </Routes>
  );
};

export default AuthRouter;
