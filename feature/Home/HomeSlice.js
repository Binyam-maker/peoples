import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentFeature: "home",
};

const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    selectService: (state, action) => {
      console.log(action);
      state.currentFeature = action.payload;
    },
  },
});

export const { selectService } = HomeSlice.actions;
export default HomeSlice.reducer;
