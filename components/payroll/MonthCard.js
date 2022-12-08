import React from "react";

const MonthCard = ({ month, year, selected }) => {
  const selectedStyle = selected
    ? "bg-blue-500 text-white"
    : "bg-transparent text-gray-300";
  return (
    <div
      className={
        "h-15 p-4 font-semibold rounded-md w-25  grid place-items-center hover:scale-105 hover:cursor-pointer " +
        selectedStyle
      }
    >
      {/* Month */}
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default MonthCard;
