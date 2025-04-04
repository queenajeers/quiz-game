import React from "react";
import ButtonIcon from "../components/ButtonIcon";

export default function LoginPage() {
  return (
    <div className="w-fit flex flex-col mx-auto mt-12 font-overlock font-bold text-2xl bg-white p-8 text-gray-800 rounded-md">
      What do your friends call you ?
      <input
        placeholder="Enter your name"
        type="text"
        className="p-2 w-100 text-2xl outline-none bg-white mx-auto border rounded-md mt-4"
      />
      <ButtonIcon className="bg-[#20B078] active:bg-[#27a273] text-white mt-12">
        Continue
      </ButtonIcon>
      <p className="text-sm font-normal text-center text-gray-600 mt-4">
        By continuing, you accept our{" "}
        <a href="/terms" className="text-[#20B078] underline">
          Terms and Conditions
        </a>
        .
      </p>
    </div>
  );
}
