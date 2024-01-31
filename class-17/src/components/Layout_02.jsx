import React from "react";
import { Outlet } from "react-router-dom";

export const Layout_02 = () => {
  return (
    <>
      <div>Navbar</div>

      <Outlet />

      <div>Footer</div>
    </>
  );
};
