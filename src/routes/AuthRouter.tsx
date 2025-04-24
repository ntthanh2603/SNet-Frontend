import React from "react";
import { Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../components/auth/Login";
import Register from "components/auth/Register";
import ForgotPassword from "components/auth/ForgotPassword";

const AuthRouter = () => (
  <>
    <Route
      path="/login"
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />

    <Route
      path="/signup"
      element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      }
    />

    <Route
      path="/forgot-password"
      element={
        <PublicRoute>
          <ForgotPassword />
        </PublicRoute>
      }
    />
  </>
);

export default AuthRouter;
