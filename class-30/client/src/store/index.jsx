import { configureStore } from "@reduxjs/toolkit";
import user_data_slice from "./slices/user_data_slice";
import blogs_slice from "./slices/blogs_slice";

const store = configureStore({
    reducer:{
        user_data: user_data_slice,
        blogs:blogs_slice

    }

})


export {store}