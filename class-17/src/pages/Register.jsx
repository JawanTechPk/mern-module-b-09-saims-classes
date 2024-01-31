import React from "react";
import { useLocation } from "react-router-dom";

export const Register = () => {
  const location = useLocation();
  console.log(location);
  return <div>Register</div>;
};
