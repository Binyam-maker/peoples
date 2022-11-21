import React from "react";
import { useDispatch } from "react-redux";
import { selectService } from "../feature/Home/HomeSlice";
const FeatureSidebar = ({ title, icon }) => {
  const dispatch = useDispatch();
  function onClick(feature) {
    console.log(feature);
    dispatch(selectService(feature));
  }
  return (
    <button
      href="/"
      className="flex hover:cursor-pointer hover:translate-x-1 transition place-items-center gap-2"
      onClick={() => onClick(title)}
    >
      <div className="text-2xl">{icon}</div>
      {title}
    </button>
  );
};

export default FeatureSidebar;
