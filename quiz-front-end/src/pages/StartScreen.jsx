import React from "react";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import RoomsPage from "./RoomsPage";
import LoginPage from "./LoginPage";
import Loading from "../components/Loading";

export default function StartScreen() {
  const { username, isRetrievingPreviousUser } = useFirebaseAuth();

  if (isRetrievingPreviousUser) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <div>
        <img src="/gameLogo.png" alt="" className="mx-auto w-24 mt-8" />
      </div>
      {username ? <RoomsPage /> : <LoginPage />}
    </div>
  );
}
