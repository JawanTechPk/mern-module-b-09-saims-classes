import React, { useEffect, useState } from "react";
import { Product_Card } from "./components/Product_Card";
import axios from "axios";
import { axios_instance } from "./config/axios_instance";

const App = () => {
  const [prodcuts_data, setProdcuts_data] = useState([]);
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  // ----- using .then .catch
  // useEffect(() => {
  //   // fetch("https://api.escuelajs.co/api/v1/products")
  //   //   .then((res) => res.json())
  //   //   .then((json) => {
  //   //     setProdcuts_data(json);
  //   //   });

  //   axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
  //     setProdcuts_data(res.data);
  //     // console.log(res.data);
  //   });
  // }, []);

  //  --- using async await
  // useEffect(async () => {
  //   // const res = await axios.get("https://api.escuelajs.co/api/v1/products");
  //   // setProdcuts_data(res.data);

  //   // const res = await axios.get("https://fakestoreapi.com/products");
  //   // console.log(res.data);

  //   // // const res = await axios.get("https://fakestoreapi.com/products/1");
  //   // // console.log(res.data);
  // }, []);

  // --- using axios instance
  useEffect(async () => {
    const response = await axios_instance.get("/products");

    setProdcuts_data(response.data);
  }, []);

  return (
    <>
      {prodcuts_data.map((pro, index) => (
        <Product_Card key={pro.id} data={pro} />
      ))}
    </>
  );
};

export default App;
