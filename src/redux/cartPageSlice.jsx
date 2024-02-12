import { createSlice } from "@reduxjs/toolkit";
import products from "../../products";
// Initial state for the cart page slice
let initialState = {
  cartpage: [...products], // Initialize cartpage with the products data
};
// Create a Redux slice for managing the cart page state
export let cartPageSlice = createSlice({
  name: "cartpage", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer function to update all cart items
      updateAllCarts: (state, action) => {
        // Update cartpage state with the payload (new cart items)

        state.cartpage = action.payload;
      },
  },
});
// Export the action creators
export let { updateAllCarts } = cartPageSlice.actions;
// Export the reducer function

export default cartPageSlice.reducer;