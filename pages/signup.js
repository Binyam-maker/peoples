import React from "react";
import FormRow from "../components/FormRow";
import sectors_data from "../libs/sectors_data";

const Signup = () => {
  return (
    <div className=" h-screen  grid mx-auto bg-[#f6faff] relative top-28">
      <div className="p-4 text-center align-middle place-self-center bg-white">
        <h className="font-serif text-2xl font-semibold">Sign up for free</h>
        <p>Create your account and start your free trial today</p>
        <form className="grid p-2">
          <FormRow name={"Name"} placeholder={"company name"} type={"text"} />
          <FormRow name={"Email"} placeholder={"email"} type={"email"} />
          <FormRow name={"Phone"} placeholder={"phone"} type={"number"} />
          <FormRow
            name={"Password"}
            placeholder={"password"}
            type={"password"}
          />
          <FormRow
            name={"Address"}
            placeholder={"office location"}
            type={"text"}
          />
          <FormRow name={"website"} placeholder={"web site"} type={"text"} />
          <FormRow name={"Name"} placeholder={"company name"} type={"text"} />

          {/* Drop Down */}
          <label for="sectors">Sector :</label>
          <select name="sectors" id="sectors" className="outline-none">
            {sectors_data.map((sector) => {
              return (
                <option key={sector.value} value={sector.value}>
                  {sector.name}
                </option>
              );
            })}
          </select>

          {/* Numbers */}
          <FormRow
            name={"Tin Number"}
            placeholder={"tin number"}
            type={"number"}
          />
          <FormRow
            name={"Enterprise Number"}
            placeholder={"enterprise number"}
            type={"number"}
          />
          <FormRow
            name={"Account Number"}
            placeholder={"account number"}
            type={"number"}
          />
          <button className="px-4 py-[2px] text-white rounded-md bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
