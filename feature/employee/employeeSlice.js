import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  entry: {
    employeeNumber: "",
    name: "",
    dateOfBirth: "",
    gender: "",
    dateOfJoining: "",
    probationPeriod: 45,
    confirmationDate: "",
    email: "",
    mobileNumber: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    designation: "",
    department: "",
    location: "",
    value: "",
    employeeTIN: "",
    basicSalary: 0,
    otherBenefits: {},
    paymentType: "",
    employeeBankName: "",
    employeeAccountNumber: 0,
    employmentType: "",
    allowance: [{ allowanceName: "", allowanceAmount: 0 }],
  },
  isLoading: false,
  allEmployees: [],
};

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employee, thunkApi) => {
    try {
      console.log({ employee });
      const resp = await axios.post("/api/employee/add_employee", { employee });
      const newEmployee = resp.data;
      console.log({ newEmployee });
      return newEmployee;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
export const getAllEmployees = createAsyncThunk(
  "employee/getAllEmployees",
  async (_, thunkApi) => {
    try {
      const resp = await axios.get("/api/employee/get_all_employees");
      const allEmployees = resp.data;
      console.log({ allEmployees });
      return allEmployees;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEntry: (state, { payload }) => {
      state.entry = { ...state.entry, ...payload };
    },
  },
  extraReducers: {
    [addEmployee.pending]: (state) => {
      state.isLoading = true;
    },
    [addEmployee.fulfilled]: (state, { payload }) => {
      state.entry = { ...payload };
      state.isLoading = false;
    },
    [addEmployee.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllEmployees.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllEmployees.fulfilled]: (state, { payload }) => {
      state.allEmployees = payload.data;
      state.isLoading = false;
    },
    [getAllEmployees.rejected]: (state) => {
      state.isLoading = false;
    },
    [HYDRATE]: (state, action) => {
      state.allEmployees = action.payload.employees.allEmployees;
    },
  },
});

export const { addEntry } = employeeSlice.actions;
export default employeeSlice.reducer;
