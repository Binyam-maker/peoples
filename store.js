import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./feature/Home/HomeSlice";
import authReducer from "./feature/auth/authSlice";
import { createWrapper } from "next-redux-wrapper";
import employeeSlice from "./feature/employee/employeeSlice";

export const store = () =>
  configureStore({
    reducer: {
      home: homeReducer,
      auth: authReducer,
      employee: employeeSlice,
    },
  });
export const wrapper = createWrapper(store);
