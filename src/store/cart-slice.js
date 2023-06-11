import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
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

export const counterActions = counterSlice.actions;

export default counterSlice;
