import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restuarantReducer from "./restuarantSlice";
import cartrestuarantReducer from "./cartrestuarantSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restuarant: restuarantReducer,
    cartres: cartrestuarantReducer,
  },
});
