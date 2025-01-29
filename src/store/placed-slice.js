import { createSlice } from "@reduxjs/toolkit";

const placedSlice = createSlice({
  name: "placed",
  initialState: {
    customer_id: "",
    items: [],
    quantity: [],
    price: [],
  },
  reducers: {
    placeOrder(state, action) {
      const { customer_id, items, quantity, price } = action.payload; //create a new item thing
      //i have to traverse for each items in the newitems if is alreday present then i have to stop to add it else just add it
      state.customer_id = customer_id;
      items.forEach((item, index) => {
        const existingIndex = state.items.indexOf(item);
        if (existingIndex !== -1) {
          state.quantity[existingIndex] += quantity[index];
        } else {
          state.items.push(item);
          state.quantity.push(quantity[index]);
          state.price.push(price[index]);
        }
      });
    },
    //here is goin to add the remove order functionality
  },
});

export const placedActions = placedSlice.actions;

export default placedSlice;

// import { createSlice } from "@reduxjs/toolkit";

// const placedSlice = createSlice({
//   name: "placed",
//   initialState: {
//     customer_id: "",
//     items: [],
//     quantity: [],
//     price: [],
//   },
//   reducers: {
//     placeOrder(state, action) {
//       const { customer_id, items, quantity, price } = action.payload;
//       state.customer_id = customer_id;

//       items.forEach((item, index) => {
//         const existingIndex = state.items.indexOf(item);
//         if (existingIndex !== -1) {
//           state.quantity[existingIndex] += quantity[index];
//         } else {
//           state.items.push(item);
//           state.quantity.push(quantity[index]);
//           state.price.push(price[index]);
//         }
//       });
//     },
//   },
// });

// export const placedActions = placedSlice.actions;
// export default placedSlice;
