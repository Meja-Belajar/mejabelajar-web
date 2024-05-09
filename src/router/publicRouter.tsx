import { Navigate, Route, Routes } from "react-router-dom";
import Register from "@src/pages/RegisterPage";
import ErrorPage from "@src/pages/ErrorPage";

import AdminLandingPage from "@src/pages/Admin/AdminLandingPage";
import AdminOverview from "@src/pages/Admin/AdminOverview";
import AdminAnnouncement from "@src/pages/Admin/AdminAnnouncement";
import ConstructionPage from "@src/pages/ConstructionPage";
import LoginPage from "@src/pages/LoginPage";
import GuestLanding from "@src/pages/Landing/GuestLandingPage";
import AdminReport from "@src/pages/Admin/AdminReport";

const PublicRouter = () => {
  return (
    <Routes key="public-routes">
      {/* route that don't require login */}
      <Route path="/" element={<GuestLanding />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

      {/* route that require login */}
      <Route path="/search/*" element={<Navigate to="/login" />} />
      <Route path="/profile/*" element={<Navigate to="/login" />} />
      <Route path="/history/*" element={<Navigate to="/login" />} />
      <Route path="/tutoring/*" element={<Navigate to="/login" />} />
      {/* <Route path='/admin/*' element={<Navigate to="/login" />} /> */}

      <Route path="/admin" element={<AdminLandingPage />}>
        <Route index element={<AdminOverview />} />
        <Route path="announcement" element={<AdminAnnouncement />} />
        <Route path="report" element={<AdminReport />} />
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

export default PublicRouter;
