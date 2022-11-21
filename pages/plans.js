import React from "react";
import Pricing from "../components/Pricing";
import pricing_data from "../libs/pricing_data";

const Plans = () => {
  return (
    <div className="container  grid mx-auto h-screen bg-[#f6faff]">
      <div className="flex gap-4 w-fit place-self-center p-4 flex justify-between max-w-3xl">
        {pricing_data.map(({ icon, name, employee, description }) => {
          return (
            <Pricing
              icon={icon}
              name={name}
              employee={employee}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
