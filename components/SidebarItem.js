import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectService } from "../feature/Home/HomeSlice";
const SidebarItem = ({ title, icon, selectedFeature, isMobile }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  function onSelect(feature) {
    console.log(feature);
    dispatch(selectService(feature));
  }
  return (
    <button
      href="/"
      className={
        "flex gap-2 transition hover:cursor-pointer hover:translate-x-1  place-items-center  " +
        (isMobile ? "grid" : null)
      }
      onClick={() => onSelect(title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon Container */}
      <div className="text-2xl">{icon}</div>
      {/* Do not show title on mobile screen */}
      {!isMobile && title}

      {/* To maintain the width of side bar  */}
      <p className={"text-black text-sm h-0 invisible"}>{title}</p>

      {isMobile && hover ? (
        <p className={"text-white text-sm transition "}>{title}</p>
      ) : null}
    </button>
  );
};

export default SidebarItem;
