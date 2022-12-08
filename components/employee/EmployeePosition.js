import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEntry, updateEntry } from "../../feature/employee/employeeSlice";

const EmployeePosition = ({ data }) => {
  const {
    designation,
    department,
    location,
    employmentType,
    employeeNumber,
    dateOfJoining,
    confirmationDate,
    probationPeriod,
    basicSalary,
    employeeTIN,
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
    <div>
      <form className="text-[15px] grid gap-4 md:grid-cols-2 ">
        {/* Right Side */}
        <div className="grid gap-4">
          <label className="flex gap-1">
            Employee Number
            <input
              type={"number"}
              className="outline-none border-2"
              value={employeeNumber}
              name="employeeNumber"
              onChange={handleChange}
            ></input>
          </label>
          <label className="flex gap-1">
            Employee TIN Number
            <input
              type={"number"}
              className="outline-none border-2"
              value={employeeTIN}
              name="employeeTIN"
              onChange={handleChange}
            ></input>
          </label>
          <label className="flex gap-1">
            Designation
            <input
              type={"text"}
              className="outline-none border-2"
              name="designation"
              value={designation}
              onChange={handleChange}
            />
          </label>
          <label className="flex gap-1">
            Department
            <input
              type={"text"}
              className="outline-none border-2"
              name="department"
              value={department}
              onChange={handleChange}
            />
          </label>
          <label className="flex gap-1">
            Location
            <input
              type={"text"}
              className="outline-none border-2"
              name="location"
              value={location}
              onChange={handleChange}
            />
          </label>
          <label className="flex gap-4">
            Employment Type
            <select
              name="employmentType"
              onChange={handleChange}
              Value={employmentType}
            >
              <option selected disabled hidden>
                --Please choose an option--
              </option>
              <option value="permanent">Permanent</option>
              <option value="temporary">Temporary</option>
              <option value="contract">Contract</option>
            </select>
          </label>
        </div>
        {/* Left Side */}
        <div className="grid gap-4">
          <label className="flex gap-1 p-1">
            Date Of Joining
            <input
              name="dateOfJoining"
              type={"date"}
              className="outline-none border-2"
              value={dateOfJoining}
              onChange={handleChange}
            />
          </label>
          <label className="flex gap-1">
            Probation Period
            <input
              name="probationPeriod"
              type={"text"}
              className="outline-none border-2"
              value={probationPeriod}
              onChange={handleChange}
            />
            Days
          </label>
          <label className="flex gap-1 p-1">
            Confirmation Date
            <input
              name="confirmationDate"
              type={"date"}
              className="outline-none border-2"
              value={confirmationDate}
              onChange={handleChange}
            />
          </label>
          <label className="flex gap-1 p-1">
            Basic Salary
            <input
              name="basicSalary"
              type={"number"}
              className="outline-none border-2"
              value={basicSalary}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default EmployeePosition;
