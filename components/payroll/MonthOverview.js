import React from "react";
import MonthCard from "./MonthCard";

const MonthOverview = () => {
  const date = new Date();
  const currentDate = { year: date.getFullYear(), month: date.getMonth() };

  console.log({ date: date.get });

  return (
    <div className="flex w-full gap-4 p-2 overflow-x-hidden text-sm bg-white rounded-md h-fit">
      <MonthCard month={"Sample-1"} year={"2022"} selected={false} />
      <MonthCard month={"Sample-2"} year={"2022"} selected={false} />
      <MonthCard month={"Sample-3"} year={"2022"} selected={false} />
      <MonthCard
        month={currentDate.month}
        year={currentDate.year}
        selected={true}
      />
    </div>
  );
};

export default MonthOverview;
