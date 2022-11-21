import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import links from "../libs/links";

function Navbar() {
  return (
    <div className="container  fixed left-1/2 -translate-x-1/2 z-10 flex justify-between w-screen gap-4 px-4 align-middle bg-white">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt="Tax in ethiopia logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Links */}

      <ul className="items-center hidden gap-8 md:visible md:flex ">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              className="text-[17px] hover:scale-105 hover:text-slate-600 text-slate-800"
              href={link.link}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>

      {/* Auth */}
      <div className="flex items-center gap-4 ">
        <Link href="/login">
          <button className="px-4 py-[2px] text-white rounded-md bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2]">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-4 py-[2px] text-white rounded-md bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2]">
            Signup
          </button>
        </Link>
      </div>
      {/* Hamburger menu */}
      <div className="my-auto text-3xl font-bold md:hidden hover:scale-105 hover:cursor-pointer text-slate-900 hover:text-slate-700">
        <MdMenu />
      </div>
    </div>
  );
}

export default Navbar;
