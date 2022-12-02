import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEntry } from "../../feature/employee/employeeSlice";
import OtherBenefits from "./OtherBenefits";

const PaymentMode = () => {
  const {
    entry: {
      paymentType,
      basicSalary,
      otherBenefits,
      employeeBankName,
      employeeAccountNumber,
    },
  } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  const [selectedPaymentType, setSelectedPaymentType] = useState(paymentType);

  // Send data changes to the store
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log({ [name]: value });
    if (name === "basicSalary" || name === "employeeAccountNumber")
      parseInt(value);
    dispatch(addEntry({ [name]: value }));
  };

  return (
    <div>
      <form className="text-[15px] grid gap-4 md:grid-cols-2 ">
        {/* Right Container */}
        <div className="grid gap-4">
          <label className="flex gap-1 p-1">
            Basic Salary
            <input
              name="basicSalary"
              type={"number"}
              className="outline-none border-2"
              value={basicSalary}
              onChange={handleChange}
            />
          </label>
          <OtherBenefits name={"Taxable Benefits"} />
          <OtherBenefits name={"Non-Taxable Benefits"} />
        </div>

        {/* Payment Type */}
        <div className="grid gap-2">
          <label className="flex gap-4">
            Payment Type
            <select
              name="paymentType"
              onChange={handleChange}
              Value={paymentType}
            >
              <option value="" selected disabled hidden>
                --Please choose an option--
              </option>
              <option value="Cash">Cash</option>
              <option value="Check">Check</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </label>
          <div>
            {paymentType === "bankTransfer" && (
              <div className="flex gap-x-1">
                <input
                  name={`employeeBankName`}
                  type={"text"}
                  className="outline-none border-2"
                  value={employeeBankName}
                  placeholder="bank name"
                  onChange={handleChange}
                />
                <input
                  name={`employeeAccountNumber`}
                  type={"number"}
                  className="outline-none border-2"
                  placeholder="account number"
                  value={employeeAccountNumber}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentMode;
