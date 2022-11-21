import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./feature/Home/HomeSlice";
import { createWrapper } from "next-redux-wrapper";
export const store = () =>
  configureStore({
    reducer: {
      home: homeReducer,
    },
  });
export const wrapper = createWrapper(store);
