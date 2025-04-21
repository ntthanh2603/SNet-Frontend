import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UserSettings from "../components/user/UserSettings";
import UserProfile from "../components/user/UserProfile";

const UserRouter = () => (
  <>
    {/* Settings */}
    <Route
      path="user/settings"
      element={
        <PrivateRoute>
          <UserSettings />
        </PrivateRoute>
      }
    />
    {/* Profile */}
    <Route
      path="user/profile"
      element={
        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      }
    />
  </>
);

export default UserRouter;
