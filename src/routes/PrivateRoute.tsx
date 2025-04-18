import { Navigate } from "react-router-dom";
import React from "react";
import { isAuthenticated } from "../utils/auth.ts";

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
