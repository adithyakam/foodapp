import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restuarant: {},
};

const cartrestuarantSlice = createSlice({
  name: "cartrestuarant",
  initialState,
  reducers: {
    addResCart: (state, action) => {
      state.restuarant = action.payload;
    },
  },
});

export const { addResCart } = cartrestuarantSlice.actions;
export default cartrestuarantSlice.reducer;
