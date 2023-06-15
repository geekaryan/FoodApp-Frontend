import { createSlice } from "@reduxjs/toolkit";
export const sumInitialState = { counter: 0 };

const sumSlice = createSlice({
  name: "sum",
  initialState: sumInitialState,
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

export const sumActions = sumSlice.actions;

export default sumSlice;
