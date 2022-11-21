import React from "react";

const EmailSubscription = () => {
  return (
    <form className="grid gap-2 p-4 my-auto text-center h-fit">
      <input
        type={"email"}
        placeholder="email"
        className="p-1 rounded-sm"
      ></input>
      <button
        type={"submit"}
        className="px-4 py-1 mx-auto text-center bg-black rounded-lg w-fit h-fit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default EmailSubscription;
