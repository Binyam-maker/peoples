import Link from "next/link";
import React from "react";
import FormRow from "../components/FormRow";

const Login = () => {
  return (
    <div className=" h-screen  grid mx-auto bg-[#f6faff]">
      <div className="p-4 text-center align-middle place-self-center bg-white">
        <h className="font-serif text-2xl font-semibold">Welcome Back</h>
        <p>Sign in to your account and enjoy unlimited perks.</p>
        <form className="grid p-2">
          <FormRow name={"Email"} placeholder={"email"} type={"email"} />

          <FormRow
            name={"Password"}
            placeholder={"password"}
            type={"password"}
          />

          <Link href="/">
            <button className="px-4 py-[2px] text-white rounded-md bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2]">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
