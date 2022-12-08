import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./feature/Home/HomeSlice";
import authReducer from "./feature/auth/authSlice";
import { createWrapper } from "next-redux-wrapper";
import employeeSlice from "./feature/employee/employeeSlice";
import searchSlice from "./feature/Search/searchSlice";
import summarySlice from "./feature/summary/summarySlice";

export const store = () =>
  configureStore({
    reducer: {
      home: homeReducer,
      auth: authReducer,
      employee: employeeSlice,
      search: searchSlice,
      summary: summarySlice,
    },
  });
export const wrapper = createWrapper(store);
