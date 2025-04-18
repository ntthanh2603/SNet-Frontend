import { Navigate } from "react-router-dom";
import React from "react";
import { isAuthenticated } from "../utils/auth";

const PublicRoute = ({ children, restricted }) => {
  const isAuth = isAuthenticated();
  // restricted = true nghĩa là không cho phép người đã đăng nhập truy cập (ví dụ: trang login)
  return isAuth && restricted ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
