import React from "react";

export default function Question({
  question,
  isHost,
  hostName,
  friendName,
  optionClicked,
}) {
  if (!question) return null;

  const { questionHost, questionFriend, correctAnswerFrom, options } = question;

  // Determine which version of the question to display
  let displayQuestion = "";

  if (isHost) {
    // Host is answering: show host version of question
    // If the friend is the one whose answer is correct, personalize with friend's name
    displayQuestion =
      correctAnswerFrom === "friend"
        ? questionHost.replace("[name-of-friend]", friendName)
        : questionHost;
  } else {
    // Friend is answering: show friend version of question
    // If the host is the one whose answer is correct, personalize with host's name
    displayQuestion =
      correctAnswerFrom === "host"
        ? questionFriend.replace("[name-of-host]", hostName)
        : questionFriend;
  }

  return (
    <div className="p-4 space-y-4  w-[70%] mx-auto">
      <h2 className="text-xl font-semibold">{displayQuestion}</h2>
      <div className="flex flex-col gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              optionClicked(index);
            }}
            className="px-4 py-2 rounded-lg border-2 bg-white text-black hover:border-green-400 hover:text-green-400"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
