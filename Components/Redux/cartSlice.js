import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingCartItemIndex !== -1) {
        state.items[existingCartItemIndex].itemNumber += 1;
      } else {
        state.items.push(action.payload);
      }
    },

    removeCart: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      if (state.items[existingCartItemIndex].itemNumber == 1) {
        state.items.splice(existingCartItemIndex, 1);
      } else {
        state.items[existingCartItemIndex].itemNumber -= 1;
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
