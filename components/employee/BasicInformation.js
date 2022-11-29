import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const BasicInformation = () => {
  const [phone, setPhone] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  return (
    <div>
      <form className="text-[15px] grid gap-4 md:grid-cols-2">
        <label className="flex gap-1">
          Employee Number
          <input type={"number"} className="outline-none border-2"></input>
        </label>
        <label className="flex gap-1">
          Name
          <input
            name="name"
            type={"text"}
            className="outline-none border-2"
          ></input>
        </label>
        <label className="flex gap-1">
          Date Of Birth
          <input
            name="dob"
            type={"date"}
            className="outline-none border-2"
          ></input>
        </label>
        <label className="flex gap-x-4">
          Gender
          <div>
            <label htmlFor="male" className="flex gap-1">
              Male
              <input id="male" name="gender" type={"radio"} />
            </label>
          </div>
          <div>
            <label htmlFor="female" className="flex gap-1">
              Female
              <input id="female" name="gender" type={"radio"} />
            </label>
          </div>
        </label>
        <label className="flex gap-1 p-1">
          Date Of Joining
          <input name="doj" type={"date"} className="outline-none border-2" />
        </label>
        <label className="flex gap-1">
          Probation Period
          <input
            name="probationPeriod"
            type={"text"}
            defaultValue="45"
            className="outline-none border-2 p-1"
          />
          Days
        </label>
        <label className="flex gap-1 p-1">
          Confirmation Date
          <input name="cod" type={"date"} className="outline-none border-2" />
        </label>
        <label className="flex gap-1 p-1">
          Email
          <input
            name="email"
            type={"email"}
            className="outline-none border-2"
          />
        </label>
        <label className="flex gap-1 p-1 align-middle">
          Mobile Number
          <PhoneInput
            value={phone}
            onChange={setPhone}
            defaultCountry="ET"
            className="p-1 rounded-md border-2 outline-none "
          />
        </label>
        <label className="flex gap-1 p-1">
          Emergency Contact Name
          <input
            name="emergencyContactName"
            type={"text"}
            className="outline-none border-2"
          />
        </label>
        <label className="flex gap-1 p-1 align-middle">
          Emergency Contact Number
          <PhoneInput
            value={emergencyPhone}
            onChange={setEmergencyPhone}
            defaultCountry="ET"
            className="p-1 rounded-md border-2 outline-none "
          />
        </label>
      </form>
    </div>
  );
};

export default BasicInformation;
