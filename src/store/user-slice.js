import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    add(state, actions) {
      state.name = actions.payload;
    },
    remove(state) {
      state.name = "";
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
