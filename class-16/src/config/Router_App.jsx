import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Private_Routes } from "./Private_Routes";
import { Public_Routes } from "./Public_Routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Private_Routes />}>
        {/* These childerns are Outlet------ */}
        <Route path="" element={<Dashboard />} />
        <Route path="/account" element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
        {/* Outlet end------ */}
      </Route>

      <Route path="" element={<Public_Routes />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};
