import React from "react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import RoomsPage from "./RoomsPage";
import LoginPage from "./LoginPage";

export default function StartScreen() {
  const { username } = useFirebaseAuth();
  return (
    <div>
      <div>
        <img src="/gameLogo.png" alt="" className="mx-auto w-24 mt-8" />
      </div>
      {!username ? <RoomsPage /> : <LoginPage />}
    </div>
  );
}
