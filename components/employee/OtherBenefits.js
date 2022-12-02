import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";
import { addEntry } from "../../feature/employee/employeeSlice";

const OtherBenefits = ({ name }) => {
  const [benefitRows, setBenefitRows] = useState(0);
  const {
    entry: { allowance },
  } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const handleRowIncrease = () => {
    setBenefitRows(benefitRows + 1);
  };
  const handleRowDecrease = () => {
    if (benefitRows > 0) {
      setBenefitRows(benefitRows - 1);
    }
  };

  const allowance1 = [{ allowanceName: "", allowanceAmount: 6 }];
  const handleChange = (e) => {
    e.preventDefault();
    let name = "";
    let value = 0;

    if (e.target.name === "allowanceName") {
      name = e.target.value;
    } else {
      value = e.target.value;
    }
    const newAllowance = { [name]: value };
    // dispatch(addEntry([...allowance, newAllowance]));
  };
  return (
    <div>
      <div className="flex gap-2 align-middle">
        <h3 className="">{name}</h3>
        <button onClick={handleRowIncrease} type="button">
          <BsPlusCircle />
        </button>
        <button onClick={handleRowDecrease} type="button">
          {benefitRows > 0 && <BsDashCircle />}
        </button>
      </div>
      <div className="grid gap-2">
        {Array.from(Array(benefitRows)).map((i) => {
          return (
            // Benefits Container
            <div className="flex gap-x-1">
              <input
                name={`allowanceName`}
                type={"text"}
                className="outline-none border-2"
                placeholder="allowance name"
                // value={allowance[i].allowanceName}
                // onChange={handleChange}
              />
              <input
                name={`allowanceAmount`}
                type={"number"}
                className="outline-none border-2"
                placeholder="allowance amount"
                // value={allowance[i].allowanceAmount}
                // onChange={handleChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherBenefits;
