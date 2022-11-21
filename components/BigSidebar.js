import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-blue-700 h-full ">
      <Link href="/">one</Link>
      <Link href="/">two</Link>
      <Link href="/">three</Link>
      <Link href="/">four</Link>
      <Link href="/">five</Link>
    </div>
  );
};

export default Sidebar;
