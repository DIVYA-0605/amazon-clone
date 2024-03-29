import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";



// the globel store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
