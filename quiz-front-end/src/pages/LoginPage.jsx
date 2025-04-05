import React, { useRef } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";

export default function LoginPage() {
  const { login } = useFirebaseAuth();
  const nameInputRef = useRef(null);

  const loginClicked = () => {
    if (nameInputRef.current.value.length > 0) {
      login(nameInputRef.current.value);
    }
  };

  return (
    <div className="w-fit flex flex-col mx-auto mt-12 font-overlock font-bold text-2xl bg-white p-8 text-gray-800 rounded-md">
      What do your friends call you ?
      <input
        ref={nameInputRef}
        placeholder="Enter your name"
        type="text"
        className="p-2 w-100 text-2xl outline-none bg-white mx-auto border rounded-md mt-4"
      />
      <ButtonIcon
        onClick={loginClicked}
        className="bg-[#20B078] active:bg-[#27a273] text-white mt-12"
      >
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
