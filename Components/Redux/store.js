import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restuarantReducer from "./restuarantSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restuarant: restuarantReducer,
  },
});
