import { createSlice } from "react-redux";

const uiSlice = createSlice({
  name: "uiSlice",
  intialState: {
    isVisibile: false,
  },
  reducers: {
    toggle(state) {
      state.isVisibile = !state.isVisibile;
    },
  },
});

export default uiSlice;
