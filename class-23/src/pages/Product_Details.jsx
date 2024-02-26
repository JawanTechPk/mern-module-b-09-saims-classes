import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { axios_instance } from "../config/axios_instance";
import { useDispatch, useSelector } from "react-redux";
import { set_product_details } from "../store/slices/Products_slice";
import { get_data } from "../utils/actions";

const Product_Details = () => {
  const params_id = useParams();
  const dispatch = useDispatch();

  const data = useSelector((store) => store.products);
  const { data: products, data_by_id } = data;

  // useEffect(async () => {
  //   const response = await axios_instance.get(`/products/${params_id.id}`);

  //   // try {
  //   //   const response = await axios_instance.get(`/products`);

  //   // } catch (error) {

  //   // }

  //   // try {
  //   //   const response = await axios_instance.get(`/categories`);

  //   // } catch (error) {

  //   // }

  //   dispatch(set_product_details(response.data));
  // }, []);

  useEffect(async () => {
    const response = await get_data("/categories");

    dispatch(set_product_details(response));
  }, []);

  return <div>{data_by_id !== null ? data_by_id.title : "-"}</div>;
  // return <div>{data_by_id.title}</div>;
};

export { Product_Details };

const print = () => {
  console.log("hello world!");
};
const print_number = (number) => {
  console.log("hello world!", number);
};

print();
print_number();
