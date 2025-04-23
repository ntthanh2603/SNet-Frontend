import { Navigate } from "react-router-dom";
import React from "react";
import { isAuthenticated } from "../utils/auth";

const PublicRoute = ({ children, restricted }) => {
  const isAuth = isAuthenticated();
  return isAuth && restricted ? <Navigate to="/" /> : children;
};

export default PublicRoute;
