import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Users } from '../pages/Users'
import { Products } from '../pages/Products'
import { Product_Details } from '../pages/Product_Details'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact'  element={<Contact />} />
      <Route path='products' element={<Products />} />

      {/* Dynamic Routes */}
      

      <Route path='products/:id' element={<Product_Details />} />


    </Route>

  )
)

export const New_Router_App = () => {
  return (
    <RouterProvider router={router} />
  )
}
