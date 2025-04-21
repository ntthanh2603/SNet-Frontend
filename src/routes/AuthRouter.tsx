import React from "react";
import { Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import { SendOtpLogin, VerifyOtpLogin } from "../components/auth/Login";

const AuthRouter = () => (
  <>
    <Route
      path="users/otp/send/login"
      element={
        <PublicRoute restricted={true}>
          <SendOtpLogin />
        </PublicRoute>
      }
    />
    <Route
      path="users/otp/verify/loginn"
      element={
        <PublicRoute restricted={true}>
          <VerifyOtpLogin />
        </PublicRoute>
      }
    />
  </>
);

export default AuthRouter;
