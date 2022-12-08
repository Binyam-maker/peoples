import React from "react";
import MultiStep from "react-multistep";
import { useSelector } from "react-redux";
import BasicInformation from "../../components/employee/BasicInformation";
import EmployeePosition from "../../components/employee/EmployeePosition";
import PaymentMode from "../../components/employee/PaymentMode";

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

const AddUpdateEmployee = ({ task }) => {
  const { entry } = useSelector((state) => state.employee);
  const { selectedSearchResult } = useSelector((state) => state.search);
  // const data = task === "add" ? entry : selectedSearchResult;
  const steps = [
    {
      title: "Basic Information",
      component: <BasicInformation data={entry} />,
    },
    {
      title: "Employee Position",
      component: <EmployeePosition data={entry} />,
    },
    { title: "Payment Mode", component: <PaymentMode data={entry} /> },
  ];
  return (
    <MultiStep
      activeStep={0}
      steps={steps}
      prevStyle={prevStyle}
      nextStyle={nextStyle}
    />
  );
};

export default AddUpdateEmployee;
