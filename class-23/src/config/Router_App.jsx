import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Products } from "../pages/Products";
import { Product_Details } from "../pages/Product_Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Products />} />
      <Route path=":id" element={<Product_Details />} />

      {/* Private Route */}
      {/* <Route element={<Private_Routes />}>
            </Route> */}
    </Route>
  )
);

const Router_App = () => {
  return <RouterProvider router={router} />;
};

export { Router_App };
