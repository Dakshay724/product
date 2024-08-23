import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../store/productSlice";
export const store = configureStore({
  reducer: {
    Product: productSlice,
  },
});
