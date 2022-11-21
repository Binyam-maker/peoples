import React from "react";

const FormRow = ({ name, placeholder, type, value, onChange }) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className="p-2 rounded-sm outline-none width-full "
    ></input>
  );
};

export default FormRow;
