import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

const AppLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
