import React, { useEffect } from "react";
import { Router_App } from "./config/Router_App";
import { axios_instance } from "./config/axios_instance";
import { useDispatch } from "react-redux";
import { set_products_data } from "./store/slices/Products_slice";

const App = () => {
  const dispatch = useDispatch();

  const get_data_handle = async ()=>{

    const response = await axios_instance.get("/products");
    dispatch(set_products_data(response.data));

  }

  useEffect( () => {

    get_data_handle()
    

    // return null
  }, []);

  return <Router_App />
};

export default App;
