import React from "react";

const Difference = ({ icon, title, description }) => {
  return (
    <div className="mx-4 text-center">
      <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <div className="mx-auto w-fit">{icon}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Difference;
