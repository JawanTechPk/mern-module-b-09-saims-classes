import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<Dashboard />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  )
)


export const Router_App = () => {


  return (
    <RouterProvider router={router} />
  )
}
