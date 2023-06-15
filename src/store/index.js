import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import counterSlice from "./cart-slice";
import sumSlice from "./counter-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    count: counterSlice.reducer,
    sum: sumSlice.reducer,
  },
});

export default store;
