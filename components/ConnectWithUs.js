import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const ConnectWithUs = () => {
  return (
    <div className="grid gap-1 p-4 ">
      <h1 className="font-serif font-semibold">Connect With Ws</h1>
      <div className="grid gap-2">
        {/* Phone Number */}
        <div className="flex gap-2 align-middle">
          <MdOutlineLocalPhone className="my-auto text-lg" />
          <div className="grid">
            <span>+251-947-56-55-07 </span>
            <span>+251-947-56-55-12 </span>
          </div>
        </div>
        {/* Email */}
        <div className="flex gap-2 ">
          <MdOutlineEmail className="my-auto text-lg" />
          <span>taxethiopia@gmail.com</span>
        </div>
        {/* Socials */}
        <div className="flex gap-2 mx-auto text-lg ">
          <BsFacebook />
          <BsTwitter />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
