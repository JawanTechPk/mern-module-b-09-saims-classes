import { configureStore } from "@reduxjs/toolkit";
import theme_slice from "./slices/theme_slice";
import Products_slice from "./slices/Products_slice";

const store = configureStore({
  reducer: {
    theme: theme_slice,
    products: Products_slice,
  },
});

export { store };
