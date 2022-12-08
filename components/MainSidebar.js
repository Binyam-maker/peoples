import React, { useEffect, useState } from "react";
import main_features_data from "../libs/main_features_data";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";

const MainSideBar = () => {
  const { currentFeature } = useSelector((store) => store.home);
  const [isMobile, setIsMobile] = useState(false);

  // Readjust for screen size

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
    <div className="fixed h-full p-4 text-white bg-blue-600 w-fit  ">
      <div className="grid gap-4">
        {main_features_data.map((feature) => {
          return (
            <SidebarItem
              title={feature.title}
              icon={feature.icon}
              key={feature.title}
              selectedFeature={currentFeature}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainSideBar;
