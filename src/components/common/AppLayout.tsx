import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const AppLayout = () => {
  return (
    <div className="app-container">
      {/* <Header /> */}
      <main className="content">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
