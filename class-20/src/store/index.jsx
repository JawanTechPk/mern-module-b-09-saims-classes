import { configureStore } from "@reduxjs/toolkit";
import counter_slice from './slices/counter_slice'
import user_data_slice from "./slices/user_data_slice";
import theme_slice from "./slices/theme_slice";

const store = configureStore({
    reducer:{
        counter:counter_slice,
        user_data: user_data_slice,
        theme:theme_slice

    }

})


export {store}