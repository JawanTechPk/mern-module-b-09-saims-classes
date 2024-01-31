import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import Layout from "../components/Layout";
import { Layout_02 } from "../components/Layout_02";
import { Private_Routes } from "./Private_Routes";
import { Product_Details } from "../pages/Product_Details";
import { Products } from "../pages/Products";
import { Add_Product } from "../pages/Add_Product";
import { Categories } from "../pages/Categories";
import { Dashboard_Home } from "../pages/Dashboard_Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    // Define routes here.... start

    // ---- Layout Example -----

    <Route element={<Layout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

    // ---- Protected Routes Examples ----

    // <Route element={<Layout_02 />}>
    //   <Route path="login" element={<Login />} />

    //   <Route element={<Private_Routes />}>
    //     <Route path="" element={<Dashboard />} />
    //   </Route>
    // </Route>

    // ---- Dynamic Routing Examples ----

    // <Route>
    //   <Route path="" element={<Dashboard />} />
    //   <Route path="item/:name" element={<Product_Details />} />

    //   {/* //  slash k bad */}
    // </Route>

    // ---- Nested Routing ----

    // <Route>
    //   <Route path="login" element={<Login />} />

    //   <Route path="dashboard">
    //     <Route path="" element={<Dashboard_Home />} />
    //     <Route path="products" element={<Products />} />
    //     <Route path="add-product" element={<Add_Product />} />
    //     <Route path="categories" element={<Categories />} />
    //   </Route>
    // </Route>

    // end
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
