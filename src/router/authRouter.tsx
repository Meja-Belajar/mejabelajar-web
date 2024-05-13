import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "@src/pages/ErrorPage";
import Profile from "@src/pages/Profile/ProfilePage";

import Search from "@src/pages/Search/SearchPage";
import SearchDefault from "@src/pages/Search/SearchDefault";
import SearchResult from "@src/pages/Search/SearchResult";
import AdminLandingPage from "@src/pages/Admin/AdminLandingPage";
import AdminOverview from "@src/pages/Admin/AdminOverview";
import AdminAnnouncement from "@src/pages/Admin/AdminAnnouncement";
import ConstructionPage from "@src/pages/ConstructionPage";
import UserLanding from "@src/pages/Landing/UserLandingPage";
import AdminReport from "@src/pages/Admin/AdminReport";
import MentorLanding from "@src/pages/Landing/MentorLanding";
import PublicPage from "@src/pages/Profile/PublicPage";
import NotificationPage from "@src/pages/Profile/NotificationPage";
import MentoringPage from "@src/pages/MentoringPage";

const AuthRouter = () => {
  return (
    <Routes key="auth-routes">
      {/* routes that don't require login */}
      <Route path="/" element={<UserLanding />} />
      <Route path="/mentor" element={<MentorLanding />} />
      <Route
        path="*"
        element={
          <ErrorPage code={404} message="Ooops! Something's missing ...." />
        }
      />
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/register" element={<Navigate to="/login" />} />

      {/* routes that require user to login */}
      <Route path="/search" element={<Search />}>
        <Route index element={<SearchDefault />} />
        <Route path=":query" element={<SearchResult />} />
      </Route>

      <Route path="/profile" element={<Profile />}>
        <Route index element={<PublicPage />} />
        <Route path="notification" element={<NotificationPage />} />
      </Route>
      <Route path="/history" element={<ConstructionPage />} />
      <Route path="/tutoring" element={<ConstructionPage />} />
      <Route path="/mentoring/:mentorId" element={<MentoringPage />} />

      {/* exclusive to admin */}
      <Route path="/admin" element={<AdminLandingPage />}>
        <Route index element={<AdminOverview />} />
        <Route path="announcement" element={<AdminAnnouncement />} />
        <Route path="report" element={<AdminReport />} />
      </Route>

      {/* future enchancement routes */}
      <Route path="/about/*" element={<ConstructionPage />} />
      <Route path="/overview/*" element={<ConstructionPage />} />
      <Route path="/idea/*" element={<ConstructionPage />} />
      <Route path="/tutor/*" element={<ConstructionPage />} />
      <Route path="/investors/*" element={<ConstructionPage />} />
      <Route path="/universities/*" element={<ConstructionPage />} />
      <Route path="/supports/*" element={<ConstructionPage />} />
      <Route path="/mobileapps/*" element={<ConstructionPage />} />
      <Route path="/faq/*" element={<ConstructionPage />} />
      <Route path="/announcement/*" element={<ConstructionPage />} />
      <Route path="/promotion/*" element={<ConstructionPage />} />
    </Routes>
  );
};

export default AuthRouter;
