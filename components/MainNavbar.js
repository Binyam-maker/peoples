import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import links from "../libs/links";

function MainNavbar() {
  return (
    <div className="container  fixed left-1/2 -translate-x-1/2 z-10 flex justify-between w-screen gap-4 p-4 align-middle bg-blue-100 ">
      {/* Logo */}
      <div>
        <Image
          src={"/images/logo_placeholder.png"}
          alt="Tax in ethiopia logo"
          width={100}
          height={100}
        />
      </div>

      {/* Hamburger menu */}
      <div className="my-auto text-3xl font-bold md:hidden hover:scale-105 hover:cursor-pointer text-slate-900 hover:text-slate-700">
        <MdMenu />
      </div>
    </div>
  );
}

export default MainNavbar;
