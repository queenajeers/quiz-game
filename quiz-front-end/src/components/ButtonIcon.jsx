import React from "react";

export default function ButtonIcon({
  icon: IconComponent,
  className,
  onClick,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full transition-all duration-200  gap-2 cursor-pointer  px-4 py-3 ${className}`}
    >
      {IconComponent && <IconComponent className="w-5 h-5" />}
      {children}
    </button>
  );
}
