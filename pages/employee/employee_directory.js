import React, { useEffect } from "react";
import DashBoardLayout from "../../components/DashBoardLayout";
import findAllEmployees from "../../libs/findAllEmployees";

const EmployeeDirectory = () => {
  useEffect(() => {
    findAllEmployees();
  });
  return <div>EmployeeDirectory</div>;
};

EmployeeDirectory.getLayout = function (page) {
  return <DashBoardLayout>{page}</DashBoardLayout>;
};

export default EmployeeDirectory;
