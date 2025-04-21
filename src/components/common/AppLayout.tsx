import React from "react";
import { Outlet } from "react-router-dom";

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
