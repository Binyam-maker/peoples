import Link from "next/link";
import React from "react";
import FormRow from "../../components/FormRow";
import { getCsrfToken } from "next-auth/react";

const SignIn = ({ csrfToken }) => {
  return (
    <div className=" h-screen  grid mx-auto bg-[#f6faff]">
      <div className="p-4 text-center align-middle place-self-center bg-white">
        <h className="font-serif text-2xl font-semibold">Welcome Back</h>
        <p>Sign in to your account and enjoy unlimited perks.</p>
        <form
          method="post"
          action="/api/auth/callback/credentials"
          className="grid p-2"
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <input name="username" type="text" placeholder="Username" />
          <FormRow name={"username"} placeholder={"email"} type={"email"} />

          <input name="password" type="password" placeholder="Password" />

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default SignIn;

//  <form className="grid p-2">
//    <FormRow name={"Email"} placeholder={"email"} type={"email"} />

//    <FormRow name={"Password"} placeholder={"password"} type={"password"} />

//    <Link href="/">
//      <button className="px-4 py-[2px] text-white rounded-md bg-[#00A1f2] h-fit hover:bg-white hover:text-[#00A1f2]">
//        Login
//      </button>
//    </Link>
//  </form>;
