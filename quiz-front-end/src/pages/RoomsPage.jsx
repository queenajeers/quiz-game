import React from "react";
import ButtonIcon from "../components/ButtonIcon";
import { PlusCircle, LogIn } from "lucide-react"; // Example icons from lucide-react
import { useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";

export default function RoomsPage() {
  const { username } = useFirebaseAuth();
  const navigate = useNavigate();
  const createRoomClicked = () => {
    navigate("/create-room");
  };
  return (
    <div className="w-fit flex flex-col mx-auto mt-12 font-overlock font-bold text-2xl bg-white p-8 text-gray-800 rounded-md">
      Welcome {username}! How do you wanna play?
      <div className="mt-12 w-full">
        <ButtonIcon
          onClick={createRoomClicked}
          className="bg-[#20B078] hover:bg-[#1c9c68] text-white my-4 w-full flex items-center justify-center gap-2"
        >
          <PlusCircle size={20} />
          Create Room
        </ButtonIcon>
        <ButtonIcon className="bg-[#2563EB] hover:bg-[#1e4fc1] text-white my-4 w-full flex items-center justify-center gap-2">
          <LogIn size={20} />
          Join Room
        </ButtonIcon>
      </div>
    </div>
  );
}
