import React from "react";
import { Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import { SendOtpLogin } from "../components/auth/Login";

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
  </>
);

export default AuthRouter;
