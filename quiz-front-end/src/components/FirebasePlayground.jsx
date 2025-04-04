import { get, push, ref, set, update } from "firebase/database";
import React, { useRef } from "react";
import { database } from "../config/firebaseConfig";

export default function FirebasePlayground() {
  const userIDRef = useRef(null);
  const userNameRef = useRef(null);

  const actionClicked = () => {
    const usersRef = ref(database, `users/`);
    push(usersRef, { name: userNameRef.current.value })
      .then(() => {
        console.log("User Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetUserName = async () => {
    const usersRef = ref(database, `users/${userIDRef.current.value}`);
    const snapshot = await get(usersRef);
    userNameRef.current.value = snapshot.val();
  };

  return (
    <div className="flex flex-col justify-center mt-4 w-fit mx-auto gap-4">
      <input
        placeholder="userID"
        ref={userIDRef}
        className="text-2xl border-2 rounded-md p-2"
        type="text"
      />
      <input
        placeholder="name"
        ref={userNameRef}
        className="text-2xl border-2 rounded-md p-2"
        type="text"
      />
      <button
        onClick={actionClicked}
        className="bg-gray-400 active:bg-gray-700 text-white rounded-md p-4 cursor-pointer"
      >
        Action
      </button>
      <button
        onClick={GetUserName}
        className="bg-gray-400 active:bg-gray-700 text-white rounded-md p-4 cursor-pointer"
      >
        Get
      </button>
    </div>
  );
}
