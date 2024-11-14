import { createSlice } from "@reduxjs/toolkit";

const initialState = { login: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logged(state) {
      state.login = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
