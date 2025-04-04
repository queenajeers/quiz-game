import React from "react";
import {
  Sparkles,
  Laugh,
  Star,
  Smile,
  ThumbsUp,
  Heart,
  Cloud,
  Ghost,
} from "lucide-react";

// All icons white, light opacities & subtle rotations
const icons = [
  { Icon: Sparkles, className: "text-white opacity-20 rotate-12", size: 28 },
  { Icon: Laugh, className: "text-white opacity-30 -rotate-6", size: 32 },
  { Icon: Star, className: "text-white opacity-25 rotate-45", size: 24 },
  { Icon: Smile, className: "text-white opacity-20 rotate-3", size: 30 },
  { Icon: ThumbsUp, className: "text-white opacity-15 -rotate-12", size: 26 },
  { Icon: Heart, className: "text-white opacity-20 rotate-6", size: 30 },
  { Icon: Cloud, className: "text-white opacity-10 -rotate-3", size: 28 },
  { Icon: Ghost, className: "text-white opacity-25 rotate-2", size: 32 },
];

const positions = [
  "top-4 left-4",
  "top-10 right-10",
  "top-1/4 left-1/5",
  "top-1/3 right-1/4",
  "top-1/2 left-1/3",
  "top-3/5 right-1/6",
  "top-3/4 left-1/4",
  "bottom-1/4 right-1/3",
  "bottom-20 left-8",
  "bottom-16 right-10",
  "bottom-8 left-1/2",
  "top-16 right-1/2",
  "bottom-10 right-1/5",
  "top-1/6 left-1/3",
  "top-2/3 right-1/2",
  "bottom-1/3 left-12",
];

export default function QuizBG({ children }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#7820b0] text-white">
      {/* Decorative angled overlays */}
      <div className="absolute w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[150%] h-1/3 bg-[#8c3cc2] transform -rotate-6 origin-top-left opacity-30" />
        <div className="absolute bottom-0 right-0 w-[150%] h-1/3 bg-[#69269c] transform rotate-6 origin-bottom-right opacity-30" />
      </div>

      {/* White icon pattern background */}
      {positions.map((pos, index) => {
        const { Icon, className, size } = icons[index % icons.length];
        return (
          <div key={index} className={`absolute ${pos} animate-float`}>
            <Icon size={size} className={className} />
          </div>
        );
      })}

      {/* Content Area */}
      <div className="absolute inset-0 z-10">{children}</div>
    </div>
  );
}
