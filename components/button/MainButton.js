import React from "react";

const MainButton = ({ onClick, type, bgColor, text, textColor }) => {
  const text_color = textColor || "white";
  // const customColor = `bg-${bgColor}-700 hover:bg-${bgColor}-800 focus:ring-${bgColor}-300 dark:bg-${bgColor}-600 dark:hover:bg-${bgColor}-700 dark:focus:ring-${bgColor}-800 text-${text_color} `;
  const blueColor = `bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  text-${text_color} `;
  const redColor = `bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800  text-${text_color} `;
  const buttonColor = bgColor === "red" ? redColor : blueColor;
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   focus:outline-none  w-fit " +
        buttonColor
      }
    >
      {text}
    </button>
  );
};

export default MainButton;
