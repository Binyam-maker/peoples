import React from "react";
import Head from "next/head";
import AddUpdateEmployee from "../../components/employee/AddUpdateEmployee";
import DashBoardLayout from "../../components/DashBoardLayout";
import MultiStep from "react-multistep";

import BasicInformation from "../../components/employee/BasicInformation";
import EmployeePosition from "../../components/employee/EmployeePosition";
import PaymentMode from "../../components/employee/PaymentMode";

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
  return (
    <div className="relative grid  w-full min-h-[85vh] ">
      <Head>
        <title>Add Employee</title>
        <meta name="description" content="Add new employee to database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  place-self-center -translate-y-1/4 md:-translate-y-2/3  grid  w-full">
        <h3 className="p-4 text-xl font-semibold font-serif  text-center text-slate-600">
          Add Employee
        </h3>
        <div className="grid justify-center">
          <MultiStep
            activeStep={0}
            steps={steps}
            prevStyle={prevStyle}
            nextStyle={nextStyle}
          />
        </div>
      </main>
    </div>
  );
};

export default AddEmployee;

AddEmployee.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};
