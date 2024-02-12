import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartPageSlice'
// Configure the Redux store
export default configureStore({
  reducer: {
    carts: cartReducer, // Assigning the cartReducer to the 'carts' slice of the store
  },
});
