import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  selectedSearchResult: {},
  searchResult: [],
  isLoading: false,
};

export const handleSearch = createAsyncThunk(
  "search/getSearch",
  async (searchTerm, thunkApi) => {
    try {
      const resp = await axios.post("/api/employee/search_employee", {
        searchTerm,
      });
      const result = resp.data;
      console.log(result);
      return result;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSelectedSearch: (state, { payload }) => {
      state.selectedSearchResult = payload;
    },
  },
  extraReducers: {
    [handleSearch.pending]: (state) => {
      state.isLoading = true;
    },
    [handleSearch.fulfilled]: (state, { payload }) => {
      state.searchResult = payload.data;
      state.isLoading = false;
    },
    [handleSearch.rejected]: (state) => {
      state.isLoading = false;
    },
    // [HYDRATE]: (state, action) => {
    //   state.searchResult = action.payload.search.searchResult;
    // },
  },
});

export const { addSelectedSearch } = searchSlice.actions;
export default searchSlice.reducer;
