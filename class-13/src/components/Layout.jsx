import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      {/* {children} */}

      <Outlet />

      <footer>Footer section</footer>
    </div>
  );
};
