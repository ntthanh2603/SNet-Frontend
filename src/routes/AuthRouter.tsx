import React from "react";
import { Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../components/auth/Login";
import Register from "components/auth/Register";

const AuthRouter = () => (
  <>
    <Route
      path="/login"
      element={
        <PublicRoute restricted={true}>
          <Login />
        </PublicRoute>
      }
    />

    <Route
      path="/signup"
      element={
        <PublicRoute restricted={true}>
          <Register />
        </PublicRoute>
      }
    />
  </>
);

export default AuthRouter;
