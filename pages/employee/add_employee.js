import React, { useState } from "react";
import Head from "next/head";
import DashBoardLayout from "../../components/DashBoardLayout";
import MultiStep from "react-multistep";
import BasicInformation from "../../components/employee/BasicInformation";
import EmployeePosition from "../../components/employee/EmployeePosition";
import PaymentMode from "../../components/employee/PaymentMode";
import { addEmployee } from "../../feature/employee/employeeSlice";
import { openModal } from "../../feature/summary/summarySlice";
import { useDispatch, useSelector } from "react-redux";
import AddUpdateEmployee from "../../components/employee/AddUpdateEmployee";
import SummaryModal from "../../components/SummaryModal";

const steps = [
  { title: "Basic Information", component: <BasicInformation /> },
  { title: "Employee Position", component: <EmployeePosition /> },
  { title: "Payment Mode", component: <PaymentMode /> },
];
// custom styles
const prevStyle = {
  background: "#33c3f0",
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 1,
  paddingBottom: 2,
  borderRadius: 4,
  margin: 8,
  color: "white",
};
const nextStyle = {
  background: "#33c3f0",
  color: "white",
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 1,
  paddingBottom: 2,
  borderRadius: 4,
  margin: 8,
  marginLeft: 40,
};

const AddEmployee = () => {
  const dispatch = useDispatch();
  const { entry } = useSelector((state) => state.employee);
  const { isModalOpen } = useSelector((state) => state.summary);
  function handleSubmit() {
    // e.preventDefault();
    // dispatch(addEmployee(entry));
    dispatch(openModal());
  }
  return (
    <div className="relative grid  w-full min-h-[85vh] ">
      <Head>
        <title>Add Employee</title>
        <meta name="description" content="Add new employee to database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  place-self-center   grid  w-full">
        <h3 className="p-4 text-xl font-semibold font-serif  text-center text-slate-600">
          Add Employee
        </h3>
        {isModalOpen && <SummaryModal />}
        <div className="grid justify-center">
          <AddUpdateEmployee />
          <button
            onClick={handleSubmit}
            className="bg-mainBlue text-white w-fit px-4 py-1 place-self-center rounded-sm"
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default AddEmployee;

AddEmployee.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
