import React from "react";

const FormRow = ({ name, placeholder, type, value, onChange }) => {
  return (
    <div className="grid">
      <label for={name} className="text-start text-sm">
        {placeholder}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className="p-1 rounded-md border-2 outline-none width-full "
      ></input>
    </div>
  );
};

export default FormRow;
