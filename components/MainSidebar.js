import Link from "next/link";
import React from "react";

const BigSidebar = () => {
  return (
    <div className="flex">
      <div className="bg-blue-600 h-full grid gap-4 relative top-28 w-1/6 text-white">
        <Link href="/">Admin</Link>
        <Link href="/">HR</Link>
        <Link href="/">Payroll </Link>
        <Link href="/">Leave</Link>
        <Link href="/">Tax</Link>
        <Link href="/">Reports</Link>
      </div>
    </div>
  );
};

export default BigSidebar;
