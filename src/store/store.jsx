import { configureStore } from "@reduxjs/toolkit";
import navigationIconSlice from "./navigationIconSlice.jsx";
import searchBarInputSlice from "./searchBarInputSlice.jsx";

const store = configureStore({
  reducer: {
    navigationIconSlice: navigationIconSlice,
    searchBarInputSlice: searchBarInputSlice,
  },
});

export default store;
