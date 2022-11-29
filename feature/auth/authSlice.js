import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { signIn } from "next-auth/react";
import { HYDRATE } from "next-redux-wrapper";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkApi) => {
    try {
      const resp = await axios.post("/api/auth/register", { user });
      const newUser = resp.data;
      console.log({ newUser: newUser });
      return newUser;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  user: {},
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.isLoading = false;
      state.user = {};
    },
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      // after sign up is finished got to sigh in page
      state.isLoading = false;
      signIn();
    },
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [HYDRATE]: (state, action) => {
      state.user = action.payload.auth.user;
    },
  },
});

export const { clearUser, addUser } = authSlice.actions;

export default authSlice.reducer;
