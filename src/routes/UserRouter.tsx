import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import UserSettings from "../components/user/UserSettings";
import UserProfile from "../components/user/UserProfile";

const UserRouter = () => (
  <>
    <Route
      path="settings"
      element={
        <PrivateRoute>
          <UserSettings />
        </PrivateRoute>
      }
    />
    <Route
      path="profile"
      element={
        <PrivateRoute>
          <UserProfile />
        </PrivateRoute>
      }
    />
  </>
);

export default UserRouter;
