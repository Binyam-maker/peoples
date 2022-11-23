import React, { useState } from "react";
import main_features_data from "../libs/main_features_data";
import FeatureSidebar from "./FeatureSidebar";
import { useSelector } from "react-redux";

const BigSidebar = () => {
  const { currentFeature } = useSelector((store) => store.home);

  return (
    <div className="bg-blue-600 h-screen w-fit text-white p-4">
      <div className="relative grid top-28 gap-4">
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

export default BigSidebar;
