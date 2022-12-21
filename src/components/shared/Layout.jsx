import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-1 text-white">
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
