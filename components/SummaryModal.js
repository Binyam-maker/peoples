import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { closeModal } from "../feature/summary/summarySlice";
import { useRouter } from "next/router";
import {
  addEmployee,
  deleteEmployee,
  updateEmployee,
} from "../feature/employee/employeeSlice";

const modalVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
    x: "-50%",
  },
  visible: {
    opacity: 1,
    y: "0",
    x: "-50%",
    transition: {
      duration: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: "100vh",
  },
};
function SummaryItem({ name, text }) {
  return (
    <p className="text-darkGray border-b-2 p-1 text-sm">
      <span className="text-lightGray">{name}:</span> {text}
    </p>
  );
}
const SummaryModal = () => {
  const dispatch = useDispatch();
  const { update } = useSelector((state) => state.employee);
  const { summary } = useSelector((state) => state.summary);

  const router = useRouter();
  const title =
    router.pathname === "/employee/update_employee"
      ? "Confirm Update"
      : router.pathname === "/employee/delete_employee"
      ? "Confirm Deletion"
      : "Confirm Submission";

  const handleConfirm = () => {
    router.pathname === "/employee/update_employee"
      ? dispatch(updateEmployee(update))
      : router.pathname === "/employee/delete_employee"
      ? dispatch(deleteEmployee(summary.id))
      : dispatch(addEmployee(summary));
  };

  return (
    <motion.div
      className="absolute left-0 top-0 grid  items-center justify-center bg-gray-100 w-full  z-20 h-full "
      onClick={() => dispatch(closeModal())}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Main Modal Box */}
      <motion.div
        className="absolute  left-1/2 -translate-x-1/2  w-full max-w-4xl   overflow-y-auto scrollbar-hide bg-white h-[90%] rounded-lg"
        // Stop propagation of of parent container onclick for close modal
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key="modal"
      >
        <h1 className="text-2xl font-semibold font-serif m-8 text-center">
          {title}
        </h1>
        <div className="grid gap-4 grid-cols-2 content-center p-4">
          <div className="grid ">
            <SummaryItem name={"Name"} text={summary.name} />
            <SummaryItem name={"Employee No."} text={summary.employeeNumber} />
            <SummaryItem name={"Email"} text={summary.email} />
            <SummaryItem name={"Mobile No."} text={summary.mobileNumber} />
            <SummaryItem name={"Location"} text={summary.location} />
            <SummaryItem
              name={"Employment Type"}
              text={summary.employmentType}
            />
            <SummaryItem name={"DOB"} text={summary.dateOfBirth} />
            <SummaryItem name={"Gender"} text={summary.gender} />
            <SummaryItem
              name={"Emergency Contact"}
              text={summary.emergencyContactName}
            />
            <SummaryItem
              name={"Emergency Contact No."}
              text={summary.emergencyContactNumber}
            />
          </div>
          <div className="grid ">
            <SummaryItem
              name={"Date OF Joining"}
              text={summary.dateOfJoining}
            />
            <SummaryItem
              name={"Probation Period"}
              text={summary.probationPeriod}
            />
            <SummaryItem
              name={"Confirmation Date"}
              text={summary.confirmationDate}
            />
            <SummaryItem name={"Designation"} text={summary.mobileNumber} />

            <SummaryItem name={"Department"} text={summary.department} />
            <SummaryItem name={"TIN"} text={summary.employeeTIN} />
            <SummaryItem name={"Basic Salary"} text={summary.basicSalary} />
            <SummaryItem name={"Payment Type"} text={summary.paymentType} />
            <SummaryItem
              name={"Employee Bank"}
              text={summary.employeeBankName}
            />
            <SummaryItem
              name={"Bank Account No."}
              text={summary.employeeAccountNumber}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 absolute  left-1/2 -translate-x-1/2 mt-8"
        >
          Confirm
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SummaryModal;
