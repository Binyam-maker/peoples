import React, { useState } from "react";
import main_features_data from "../libs/main_features_data";
import FeatureSidebar from "./FeatureSidebar";
import { useSelector } from "react-redux";

const MainSideBar = () => {
  const { currentFeature } = useSelector((store) => store.home);

  return (
    <div className="bg-blue-600 h-full w-fit text-white p-4 fixed ">
      <div className="grid gap-4">
        {main_features_data.map((feature) => {
          return (
            <FeatureSidebar
              title={feature.title}
              icon={feature.icon}
              key={feature.title}
              selectedFeature={currentFeature}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainSideBar;
