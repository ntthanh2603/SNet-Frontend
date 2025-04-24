import { Navigate } from "react-router-dom";
import React from "react";
import { isAuthenticated } from "../utils/auth";
import Header from "components/common/Header";

const PrivateRoute = ({ children }) => {
  const isAuth = isAuthenticated();
  return isAuth ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
