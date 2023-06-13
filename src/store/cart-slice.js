import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: {
    counter: 0,
    items: [],
    totalQuantity: 0,
  },
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
    addItemToCart() {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem._id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = totalPrice + newItem.price;
      }
    },
    removeItemFromCart() {},
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
