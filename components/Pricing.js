import React from "react";

const Pricing = ({ icon, name, employee, description }) => {
  return (
    <div className="w-1/3 text-center grid bg-white rounded-lg shadow-lg hover:scale-105 transition">
      <div className="w-fit mx-auto">{icon}</div>
      <h1 className="font-serif font-semibold  text-1xl ">{name}</h1>
      <p className="text-sm">{employee}</p>
      <p className="text-sm">{description}</p>
      <p className="text-sm">{description}</p>
      <p className="text-sm">{description}</p>
      <p className="text-sm">{description}</p>

      <button className=" text-white px-4 py-[1px] rounded-sm bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2] w-fit mx-auto my-4">
        Choose
      </button>
    </div>
  );
};

export default Pricing;
