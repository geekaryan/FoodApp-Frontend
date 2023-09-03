import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import counterSlice from "./cart-slice";
import sumSlice from "./counter-slice";

//we have three slice in here
// the ui slice is used to enable and disable ui on touch
// count is used to count the total number of food items we are going to order .
// the sum counter is used to sum and deduce the sum for bettwer understanding

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    count: counterSlice.reducer,
    sum: sumSlice.reducer,
  },
});

export default store;
