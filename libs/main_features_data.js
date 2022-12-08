import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdTimeToLeave } from "react-icons/md";
import { BsReceiptCutoff } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
const main_features_data = [
  {
    title: "Home",
    icon: <FiHome />,
    components: [],
    link: "/",
  },
  {
    title: "Admin",
    icon: <MdOutlineAdminPanelSettings />,
    components: [
      { name: "Create User", link: "" },
      { name: "Change Password", link: "" },
      { name: "Update User", link: "" },
      { name: "Delete User", link: "" },
    ],
  },
  {
    title: "HR",
    icon: <BsPeople />,
    components: [
      { name: "Overview", link: "/employee/overview" },
      { name: "Employee Directory", link: "/employee/employee_directory" },
      {
        name: "Employee",
        link: "",
        subMenu: [
          { subName: "Add Employee", link: "/employee/add_employee" },
          { subName: "Update Employee", link: "/employee/update_employee" },
          { subName: "Delete Employee", link: "/employee/delete_employee" },
        ],
      },
      { name: "Templates", link: "employee/templates" },
    ],
  },
  {
    title: "Payroll",
    icon: <MdOutlineAttachMoney />,
    components: [
      { name: "Overview", link: "/payroll/overview" },
      { name: "Loan Management", link: "/payroll/loan_management" },
      {
        name: "Severance & Termination",
        link: "/payroll/severance_and_termination",
      },
    ],
  },
  {
    title: "Leave",
    icon: <MdTimeToLeave />,
    components: [
      { name: "Overview", link: "" },
      { name: "Annual Leave", link: "" },
      { name: "Leave Calender", link: "" },
      { name: "Report", link: "" },
    ],
  },
  {
    title: "Tax",
    icon: <BsReceiptCutoff />,
    components: [
      { name: "Income tax", link: "" },
      { name: "Pension", link: "" },
      { name: "Cost Sharing", link: "" },
      { name: "Penalities", link: "" },
      { name: "Pay", link: "" },
      { name: "Interest Calculator", link: "" },
    ],
  },
  {
    title: "Reports",
    icon: <HiOutlineDocumentReport />,
    components: [
      { name: "Income tax", link: "" },
      { name: "Pension", link: "" },
      { name: "Cost Sharing", link: "" },
      { name: "Penalities", link: "" },
      { name: "Pay", link: "" },
      { name: "Interest Calculator", link: "" },
    ],
  },
];

export default main_features_data;
