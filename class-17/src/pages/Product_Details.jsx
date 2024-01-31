import React from "react";
import { useParams } from "react-router-dom";

export const Product_Details = () => {
  const params = useParams();

  console.log("params", params);
  return <div>Product_Details</div>;
};
