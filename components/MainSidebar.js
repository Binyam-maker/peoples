import React, { useState } from "react";
import main_features_data from "../libs/main_features_data";
import FeatureSidebar from "./FeatureSidebar";
import selectService from "../feature/Home/HomeSlice";
import { useDispatch } from "react-redux";

const BigSidebar = () => {
  const dispatch = useDispatch();
  function onClick(feature) {
    console.log(feature);
    dispatch(selectService(feature));
  }
  return (
    <div className="bg-blue-600 h-screen w-fit text-white p-4">
      <div className="relative grid top-28 gap-4">
        {main_features_data.map((feature) => {
          return (
            <FeatureSidebar
              title={feature.title}
              icon={feature.icon}
              key={feature.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BigSidebar;
