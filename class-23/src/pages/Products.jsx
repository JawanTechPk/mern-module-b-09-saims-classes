import React from "react";
import { useSelector } from "react-redux";
import { Product_Card } from "../components/Product_Card";

export const Products = () => {
  const data = useSelector((store) => store.products);
  return (
    <>
      {data.data.map((pro, index) => (
        <Product_Card key={pro.id} data={pro} />
      ))}
    </>
  );
};
