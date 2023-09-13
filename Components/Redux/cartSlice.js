import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state, action) => {
      if (state.info.id === action.payload.info.id) {
        state.items.slice(action.id, 1);
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
