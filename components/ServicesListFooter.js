import Link from "next/link";
import React from "react";

const ProductListFooter = () => {
  return (
    <div className="grid gap-1 p-4">
      <h1 className="font-serif font-semibold ">Services</h1>
      <div className="grid ">
        <Link href={"/"}> Payroll Software</Link>
        <Link href={"/"}> Leave Management System</Link>
        <Link href={"/"}> Mobile App for Employee</Link>
      </div>
    </div>
  );
};

export default ProductListFooter;
