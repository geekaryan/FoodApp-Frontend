import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import counterSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    count: counterSlice.reducer,
  },
});

export default store;
