import React from "react";
import MainSidebar from "./MainSidebar";
import MainNavbar from "./MainNavbar";
const DashBoardLayout = ({ children }) => {
  // <header>Website</header>
  //   <main>{children}</main>
  //   <aside>Sidebar</aside>
  //   <footer>&copy; Website</footer>
  return (
    <div className="grid grid-rows-navbarMain ">
      {/* Navbar Container */}
      <div > <MainNavbar /> </div>
      {/* Sidebar & Main Layout container */}
      <div className="grid grid-cols-sidebarMain ">

        {/* Sidebar container */}
         <div> <MainSidebar /></div>
         
         {/* Main Layout Container */}
      <div className=""> {children} </div>
     </div>
    
     
      

     
    </div>
  );
};

export default DashBoardLayout;
