import { CheckIcon } from "lucide-react";
import React, { useState } from "react";
import ButtonIcon from "../components/ButtonIcon";

const templates = [
  { name: "How Well Do You Know Me?", emoji: "🧠" },
  { name: "Most Likely To...", emoji: "🎯" },
  { name: "This or That", emoji: "⚖️" },
  { name: "Fun Facts About Me", emoji: "🕵️‍♂️" },
  { name: "Would You Rather", emoji: "🤔" },
  { name: "First Impressions", emoji: "👀" },
  { name: "Guess the Memory", emoji: "📸" },
];

export default function CreateRoom() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);

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

      <ButtonIcon className="bg-[#20B078] hover:bg-[#1c9c68] text-white my-4 w-50  flex items-center justify-center gap-2 text-2xl">
        Create Room
      </ButtonIcon>
    </div>
  );
}
