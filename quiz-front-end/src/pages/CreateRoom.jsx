import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { database } from "../config/firebaseConfig";
import { useFirebaseAuth } from "../contexts/FirebaseAuthContext";
import Loading from "../components/Loading";
import { questionsByTemplate, templates } from "../questions/questions";

function generateKey() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let key = "";
  for (let i = 0; i < 7; i++) {
    key += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return key;
}

export default function CreateRoom() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const { uid, username, isRetrievingPreviousUser } = useFirebaseAuth();
  const navigate = useNavigate();

  if (isRetrievingPreviousUser) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const getTotalQuestions = (id) => {
    let q = questionsByTemplate.find((q) => q.templateId === id);
    if (q) {
      return q.questions.length;
    } else {
      return 0;
    }
  };

  const createRoomClicked = () => {
    const newRoomID = generateKey();
    const roomRef = ref(database, `rooms/${newRoomID}/`);
    console.log({ uid, username });
    set(roomRef, {
      createdByUid: uid,
      createdByUsername: username,
      questionTemplateId: selectedTemplate.id,
      totalQuestions: getTotalQuestions(selectedTemplate.id),
      hostCurrentQuestionIndex: 0,
      friendCurrentQuestionIndex: 0,
      friendJoined: false,
      friendUid: "",
      friendUsername: "",
      createdAt: Date.now(),
      status: "waiting", // or "started", "ended"
      hostAnswers: [],
      friendAnswers: [],
    }).then(() => {
      navigate("/room-created", {
        state: {
          roomID: newRoomID,
        },
      });
    });
  };

  const handleSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleCreateRoom = () => {
    if (selectedTemplate) {
      console.log("Creating room with:", selectedTemplate);
    } else {
      alert("Please select a template!");
    }
  };

  return (
    <div className="flex flex-col mx-auto items-center w-full mt-8 gap-10 font-overlock px-4">
      <h1 className="text-4xl font-bold">Room Creation</h1>

      <div className="text-center w-full max-w-md">
        <h2 className="text-2xl font-bold underline mb-4">
          Choose Question Template
        </h2>

        {/* Vertical scroll container */}
        <div className="h-96 overflow-y-auto flex flex-col gap-4">
          {templates.map((template, index) => (
            <div
              key={index}
              onClick={() => handleSelect(template)}
              className={`relative flex items-center gap-4 bg-white border-2 rounded-2xl p-4 shadow-md cursor-pointer transition-all duration-300
                ${
                  selectedTemplate?.name === template.name
                    ? "border-blue-500"
                    : "border-gray-200 hover:border-gray-400"
                }
              `}
            >
              {/* Checkmark */}
              {selectedTemplate?.name === template.name && (
                <CheckIcon
                  className="absolute right-2 text-green-500"
                  size={50}
                />
              )}

              <div className="text-5xl">{template.emoji}</div>
              <div className="font-semibold text-left text-black">
                {template.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ButtonIcon
        onClick={createRoomClicked}
        className="bg-[#20B078] hover:bg-[#1c9c68] text-white my-4 w-50  flex items-center justify-center gap-2 text-2xl"
      >
        Create Room
      </ButtonIcon>
    </div>
  );
}
