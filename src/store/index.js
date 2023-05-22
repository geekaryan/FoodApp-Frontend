import { createSlice, configureStore } from "@reduxjs/toolkit";

const intitalState = { count: 0 };

const orderSlice = createSlice({
  name: "order",
  intitalState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

const store = configureStore({
  reducer: orderSlice.reducer,
});

export const orderActions = orderSlice.actions;

export default store;
