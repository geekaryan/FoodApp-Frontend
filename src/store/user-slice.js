import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", uid: "" };

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
    adduid(state, actions) {
      state.uid = actions.payload;
    },
    removeuid(state) {
      state.uid = "";
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
