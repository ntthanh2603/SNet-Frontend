import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/common/AppLayout";
import Home from "../components/home/Home";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import UserRoutes from "./UserRoutes";
import Login from "../components/auth/Login";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          <Route path="auth" element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
          </Route>

          {/* Private routes */}
          <Route path="user" element={<PrivateRoute />}>
            <UserRoutes />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
