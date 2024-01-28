import { Button } from "@mui/material";
import React from "react";

export const Dashboard = () => {
  const getDataHandle = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    console.log("isLoggedIn", isLoggedIn);
  };

  return (
    <>
      <div>Dashboard</div>

      <Button onClick={getDataHandle}>Get Data</Button>
    </>
  );
};
