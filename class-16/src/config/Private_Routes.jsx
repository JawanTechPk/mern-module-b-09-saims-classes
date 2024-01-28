import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Private_Routes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? (
    <>
      <Outlet />
      {/* <Route path="" element={<Dashboard />} />
      <Route path="/account" element={<Dashboard />} />
      <Route path="/products" element={<Dashboard />} /> */}
    </>
  ) : (
    <Navigate to="/login" />
  );
};
