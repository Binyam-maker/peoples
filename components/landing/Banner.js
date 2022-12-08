import Image from "next/image";
import React from "react";
import users from "../../public/images/users.svg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="   p-4   text-[#2d3748] grid md:grid-cols-2 items-center">
      <div className="grid gap-4 h-fit ">
        <h1 className="text-xl font-semibold text-center md:text-2xl md:text-black lg:text-3xl">
          Why us?
        </h1>
        <p className="text-center">
          People are at the heart of every successful business. We put the tools
          you need to hire, pay, make the right tax deductions, and then get
          everything paid and filed on time in one platform.
        </p>
        <Link href="/plans" className="mx-auto">
          <button className="text-2xl text-white px-8 py-[3px] rounded-md bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2] w-fit">
            Choose Your Plan
          </button>
        </Link>
      </div>

      <div>
        <Image src={users} alt={"Picture of users of the web application"} />
      </div>
    </div>
  );
};

export default Banner;
