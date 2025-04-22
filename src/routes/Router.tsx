import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/common/AppLayout";
import Home from "../components/home/Home";
import React from "react";
import UserRouter from "./UserRouter";
import AuthRouter from "./AuthRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />

          {AuthRouter()}

          {UserRouter()}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
