import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isVisibile: false,
  },
  reducers: {
    toggle(state) {
      state.isVisibile = !state.isVisibile;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
