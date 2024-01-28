import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Public_Routes = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  // const isLoggedIn = false;

  // const check_loggin = !isLoggedIn
  //   ? "Return Public Routes"
  //   : "Redirect to Dashboard";
  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
