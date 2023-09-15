import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restuarant: {},
};

export const restuarantSlice = createSlice({
  name: "restuarant",
  initialState,
  reducers: {
    addRes: (state, action) => {
      state.restuarant = action.payload;
    },
  },
});

export const { addRes } = restuarantSlice.actions;
export default restuarantSlice.reducer;
