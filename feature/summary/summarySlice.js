import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  summary: {},
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      console.log({ payload });
      state.isModalOpen = true;
      state.summary = payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = summarySlice.actions;
export default summarySlice.reducer;
