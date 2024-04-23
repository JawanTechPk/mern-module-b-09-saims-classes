import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Home } from "../pages/Home";
import { Private_Routes } from "./Private_Routes";
import { Public_Routes } from "./Public_Routes";
import { Create_Blog } from "../pages/Create_Blog";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>


            <Route element={<Public_Routes />} >
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
            </Route>


            {/* Private Route */}
            <Route element={<Private_Routes />}>
                <Route path="create-blog" element={<Create_Blog />} />
            </Route>
            <Route path="" element={<Home />} />
        </Route>
    )
)


const Router_App = () => {


    return <RouterProvider router={router} />
}


export { Router_App }