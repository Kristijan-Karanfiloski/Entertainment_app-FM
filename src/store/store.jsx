import { configureStore } from "@reduxjs/toolkit";
import navigationIconSlice from "./navigationIconSlice.jsx";

const store = configureStore({
  reducer: {
    navigationIconSlice: navigationIconSlice,
  },
});

export default store;
