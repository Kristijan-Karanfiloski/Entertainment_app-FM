import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIcon: "home",
  // activeIcon: false,
};

const navigationIconsSlice = createSlice({
  name: "navigationIcons",
  initialState,
  reducers: {
    setActiveIcon: (state, action) => {
      // state.activeIcon = !state.activeIcon;
      state.activeIcon = action.payload;
    },
  },
});

export const { setActiveIcon } = navigationIconsSlice.actions;

export default navigationIconsSlice.reducer;
