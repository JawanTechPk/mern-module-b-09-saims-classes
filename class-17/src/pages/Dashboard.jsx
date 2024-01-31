import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const getDataHandle = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    console.log("isLoggedIn", isLoggedIn);
  };

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

  const navigate_handle = () => {
    navigate("/register", { state: [location.state, "new String"] });
  };

  return (
    <>
      <div>Dashboard</div>

      <Button onClick={navigate_handle}>Get Data</Button>
    </>
  );
};
