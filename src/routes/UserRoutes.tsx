import { Route } from "react-router-dom";

const UserRoutes = () => {
  return (
    <>
      <Route index element={<UserDashboard />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="settings" element={<UserSettings />} />
    </>
  );
};

export default UserRoutes;
