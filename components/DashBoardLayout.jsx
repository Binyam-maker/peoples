import React from "react";
import MainSidebar from "./MainSidebar";
import MainNavbar from "./MainNavbar";
const DashBoardLayout = ({ children }) => {
  // <header>Website</header>
  //   <main>{children}</main>
  //   <aside>Sidebar</aside>
  //   <footer>&copy; Website</footer>
  return (
    <div>
      <MainNavbar />
      <div className="flex ">
         <div className="stick top-0 left-0 "> <MainSidebar /></div>   
      <div className=" relative top-14 m-4 overflow-y-auto ">
        {children}
      </div>
     </div>
     
      

     
    </div>
  );
};

export default DashBoardLayout;
