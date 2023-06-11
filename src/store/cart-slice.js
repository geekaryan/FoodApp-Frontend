import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
      if (state.counter < 0) {
        state.counter = 0;
      }
    },
  },
});

const 

export default cartSlice;
