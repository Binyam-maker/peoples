import React, { useEffect, useState } from "react";
import MainSidebar from "./MainSidebar";
import MainNavbar from "./MainNavbar";
const DashBoardLayout = ({ children }) => {

   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
    // function to check the screen size
    const handleResize = () => {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    };

    // initialize on browser
    handleResize();

    // Listen for screen size changes
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  return (
    <div className={"grid grid-rows-navbarMain bg-gray-100 " + (isMobile ? 'grid-rows-navbarMainMobile': null)}>
      {/* Navbar Container */}
      <div > <MainNavbar /> </div>
      {/* Sidebar & Main Layout container */}
      <div className={"grid grid-cols-sidebarMain "  + (isMobile ? 'grid-cols-sidebarMainMobile': null)}>

        {/* Sidebar container */}
         <div> <MainSidebar /></div>
         
         {/* Main Layout Container */}
      <div className=""> {children} </div>
     </div>
    
     
      

     
    </div>
  );
};

export default DashBoardLayout;
