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
  },
  {
    title: "Admin",
    icon: <MdOutlineAdminPanelSettings />,
    components: [
      "Create User",
      "Change Password",
      "Update User",
      "Delete User",
    ],
  },
  {
    title: "HR",
    icon: <BsPeople />,
    components: ["Overview", "Employee Directory", "Employee", "Template"],
  },
  {
    title: "Payroll",
    icon: <MdOutlineAttachMoney />,
    components: [
      "Attendance",
      "Loan Management",
      "Severance & Termination payments",
    ],
  },
  {
    title: "Leave",
    icon: <MdTimeToLeave />,
    components: ["Overview", "Annual Leave", "Leave Calender", "Report"],
  },
  {
    title: "Tax",
    icon: <BsReceiptCutoff />,
    components: [
      "Income tax",
      "Pension",
      "Cost Sharing",
      "Penalities",
      "Pay",
      "Interest Calculator",
    ],
  },
  {
    title: "Reports",
    icon: <HiOutlineDocumentReport />,
    components: [
      "Income tax",
      "Pension",
      "Cost Sharing",
      "Penalities",
      "Pay",
      "Interest Calculator",
    ],
  },
];

export default main_features_data;
