import React from "react";
import MainSidebar from "./MainSidebar";
import MainNavbar from "./MainNavbar";
const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <MainNavbar />
      <MainSidebar>{children}</MainSidebar>;
    </div>
  );
};

export default DashBoardLayout;
