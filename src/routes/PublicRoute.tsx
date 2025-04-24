import { Navigate } from "react-router-dom";
import React from "react";
import { isAuthenticated } from "../utils/auth";

const PublicRoute = ({ children }) => {
  const isAuth = isAuthenticated();
  return !isAuth ? <Navigate to="/" /> : children;
};

export default PublicRoute;
