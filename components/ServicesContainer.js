import React from "react";
import services_data from "../libs/services_data";
import Services from "./Services";

const ServicesContainer = () => {
  return (
    <div className="grid gap-4 p-4 mt-12 md:grid-cols-2 lg:grid-cols-3 bg-[#f6faff]">
      {services_data.map((service) => {
        return (
          <Services
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        );
      })}
    </div>
  );
};

export default ServicesContainer;
