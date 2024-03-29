import { createSlice } from "@reduxjs/toolkit";

const counter = 0;

const counterSlice = createSlice({
  name: "count",
  initialState: {
    items: [],
    count: 0,
    totalQuantity: counter,
  },
  reducers: {
    addItemToCart(state, action) {
      state.count++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }, //remove cart
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
