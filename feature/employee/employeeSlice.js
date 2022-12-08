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
  update: {},
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
export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (updateData, thunkApi) => {
    try {
      console.log({ updateData });
      const resp = await axios.patch("/api/employee/update_employee", {
        updateData,
      });
      const updatedEmployee = resp.data;
      console.log({ updatedEmployee });
      return updatedEmployee;
    } catch (error) {
      thunkApi.rejectWithValue(error.response.data.msg);
    }
  }
);
export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id, thunkApi) => {
    try {
      console.log(id);
      const resp = await axios.post("/api/employee/delete_employee", {
        id,
      });
      const deletedEmployee = resp.data;
      console.log({ deletedEmployee });
      return deletedEmployee;
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
    updateEntry: (state, { payload }) => {
      const { id } = state.entry;
      state.update = { ...state.update, ...payload, id };
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
    [updateEmployee.pending]: (state) => {
      state.isLoading = true;
    },
    [updateEmployee.fulfilled]: (state, { payload }) => {
      state.entry = { ...payload };
      state.update = {};
      state.isLoading = false;
    },
    [updateEmployee.rejected]: (state) => {
      state.isLoading = false;
      state.update = {};
    },
    [deleteEmployee.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteEmployee.fulfilled]: (state, { payload }) => {
      state.entry = {};
      state.update = {};
      state.isLoading = false;
    },
    [deleteEmployee.rejected]: (state) => {
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

export const { addEntry, updateEntry } = employeeSlice.actions;
export default employeeSlice.reducer;
