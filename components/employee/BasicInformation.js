import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { useSelector, useDispatch } from "react-redux";
import { addEntry, updateEntry } from "../../feature/employee/employeeSlice";

const BasicInformation = ({ data }) => {
  const {
    name,
    dateOfBirth,
    gender,
    email,
    mobileNumber,
    emergencyContactName,
    emergencyContactNumber,
  } = data;
  const dispatch = useDispatch();

  // Send data changes to the store
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(addEntry({ [name]: value }));
    dispatch(updateEntry({ [name]: value }));
  };
  return (
    <div className="">
      <form className="text-[15px] grid gap-4 md:grid-cols-2 ">
        {/* Container For Right Side Inputs */}
        <div className="grid gap-4">
          <label className="flex gap-1">
            Name
            <input
              name="name"
              type={"text"}
              className="outline-none border-2"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className="flex gap-1">
            Date Of Birth
            <input
              name="dateOfBirth"
              type={"date"}
              className="outline-none border-2"
              value={dateOfBirth}
              onChange={handleChange}
            />
          </label>
          <label className="flex gap-x-4">
            Gender
            <div>
              <label htmlFor="male" className="flex gap-1">
                Male
                <input
                  id="male"
                  name="gender"
                  type={"radio"}
                  value="Male"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="female" className="flex gap-1">
                Female
                <input
                  id="female"
                  name="gender"
                  type={"radio"}
                  value="Female"
                  onChange={handleChange}
                />
              </label>
            </div>
          </label>
        </div>
        {/* Container For Left Side Inputs */}
        <div className="grid gap-4">
          <label className="flex gap-1 p-1">
            Email
            <input
              name="email"
              type={"email"}
              className="outline-none border-2"
              onChange={handleChange}
              value={email}
            />
          </label>
          <label className="flex gap-1 p-1 align-middle">
            Mobile Number
            <input
              value={mobileNumber}
              onChange={handleChange}
              defaultCountry="ET"
              className="p-1 rounded-md border-2 outline-none "
              name="mobileNumber"
              type={"tel"}
            />
          </label>
          <label className="flex gap-1 p-1">
            Emergency Contact Name
            <input
              name="emergencyContactName"
              type={"text"}
              className="outline-none border-2"
              onChange={handleChange}
              value={emergencyContactName}
            />
          </label>
          <label className="flex gap-1 p-1 align-middle">
            Emergency Contact Number
            <input
              value={emergencyContactNumber}
              onChange={handleChange}
              defaultCountry="ET"
              className="p-1 rounded-md border-2 outline-none "
              name="emergencyContactNumber"
              type={"tel"}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
