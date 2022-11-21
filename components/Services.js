import React from "react";

const Services = ({ icon, title, description }) => {
  return (
    <div className="grid max-w-sm gap-2 p-6 mx-auto text-center bg-white rounded-lg shadow-lg ">
      <div className="mx-auto">{icon}</div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Services;
