import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const searchBarInputSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchBarInputSlice.actions;
export default searchBarInputSlice.reducer;
