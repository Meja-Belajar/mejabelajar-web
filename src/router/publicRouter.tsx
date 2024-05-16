import { Navigate, Route, Routes } from "react-router-dom";

import AdminAnnouncement from "@src/pages/Admin/AdminAnnouncement.tsx";
import AdminLandingPage from "@src/pages/Admin/AdminLandingPage.tsx";
import AdminNewMentor from "@src/pages/Admin/AdminNewMentor.tsx";
import AdminOverview from "@src/pages/Admin/AdminOverview.tsx";
import ConstructionPage from "@src/pages/ConstructionPage.tsx";
import ErrorPage from "@src/pages/ErrorPage.tsx";
import GuestLanding from "@src/pages/Landing/GuestLandingPage.tsx";
import LoginPage from "@src/pages/LoginPage.tsx";
import Register from "@src/pages/RegisterPage.tsx";

const PublicRouter = () => {
  return (
    <Routes key="public-routes">
      {/* route that don't require login */}
      <Route path="/" element={<GuestLanding />} />
      <Route
        path="*"
        element={
          <ErrorPage code={404} message="Ooops! Something's missing ...." />
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

      {/* route that require login */}
      <Route path="/search/*" element={<Navigate to="/login" />} />
      <Route path="/profile/*" element={<Navigate to="/login" />} />
      <Route path="/history/*" element={<Navigate to="/login" />} />
      <Route path="/tutoring/*" element={<Navigate to="/login" />} />
      <Route path="/mentoring/*" element={<Navigate to="/login" />} />
      <Route path="/admin/*" element={<Navigate to="/login" />} />

      <Route path="/admin" element={<AdminLandingPage />}>
        <Route index element={<AdminOverview />} />
        <Route path="announcement" element={<AdminAnnouncement />} />
        <Route path="report" element={<AdminNewMentor />} />
      </Route>

      {/* future enchancement routes */}
      {/* <Route path="/about/*" element={<ConstructionPage />} />
      <Route path="/overview/*" element={<ConstructionPage />} />
      <Route path="/idea/*" element={<ConstructionPage />} />
      <Route path="/tutor/*" element={<ConstructionPage />} />
      <Route path="/investors/*" element={<ConstructionPage />} />
      <Route path="/universities/*" element={<ConstructionPage />} />
      <Route path="/supports/*" element={<ConstructionPage />} />
      <Route path="/mobileapps/*" element={<ConstructionPage />} />
      <Route path="/faq/*" element={<ConstructionPage />} />
      <Route path="/announcement/*" element={<ConstructionPage />} />
      <Route path="/promotion/*" element={<ConstructionPage />} /> */}
    </Routes>
  );
};

export default PublicRouter;
