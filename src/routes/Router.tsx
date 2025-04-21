import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/common/AppLayout.tsx";
import Home from "../components/home/Home.tsx";
import PublicRoute from "./PublicRoute.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import Login from "../components/auth/Login.tsx";
import React from "react";
import UserSettings from "../components/user/UserSettings.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route
            path="login"
            element={
              <PublicRoute restricted={true}>
                <Login />
              </PublicRoute>
            }
          />

          {/* Private routes */}
          <Route
            path="user/settings"
            element={
              <PrivateRoute>
                <UserSettings />
              </PrivateRoute>
            }
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
