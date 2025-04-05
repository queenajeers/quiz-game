import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import ButtonIcon from "../components/ButtonIcon";
import { useLocation, useNavigate } from "react-router-dom";

export default function RoomCreated() {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { roomID } = location.state || {};

  const inviteLink = `http://localhost:5173/play/${roomID}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleStart = () => {
    navigate(`/play/${roomID}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center font-overlock bg-[#7820B0]">
      <h1 className="text-4xl font-bold mb-6 text-white">Room Created 🎉</h1>

      <p className="text-lg text-white mb-4">Invite your friend to join:</p>

      <div className="flex items-center gap-2 bg-[#D7B3ED] rounded-xl p-4 shadow-inner max-w-full w-full sm:w-auto">
        <span className="text-base sm:text-lg text-[#2C2C2C] break-all truncate max-w-[250px] sm:max-w-xs">
          {inviteLink}
        </span>
        <button
          onClick={handleCopy}
          className="text-[#611A8E] hover:text-[#4C1471] transition duration-150 ease-in-out"
          aria-label="Copy invite link"
        >
          {copied ? <Check size={22} /> : <Copy size={22} />}
        </button>
      </div>

      <ButtonIcon
        onClick={handleStart}
        className="mt-8 min-w-40 px-6 py-3 text-white text-lg font-semibold rounded-2xl shadow transition-all duration-200 bg-[#20B078] hover:bg-green-600"
      >
        Start Quiz!
      </ButtonIcon>
    </div>
  );
}
