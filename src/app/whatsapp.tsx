"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";

export const Whatsapp = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="mt-8 flex flex-col gap-4 items-center">
      <a
        href="https://chat.whatsapp.com/DqHtEAQM9K6BbBDz8TU1eP"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative px-8 py-4 flex items-center gap-3 rounded-full 
          overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
          w-auto min-w-[240px] justify-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[#222222] rounded-full opacity-90"></div>

        {/* Button content */}
        <div className="relative z-10 flex items-center gap-3">
          <MessageSquare className="w-5 h-5 text-red-500" />
          <span className="font-semibold text-white whitespace-nowrap">
            Únete al grupo de WhatsApp
          </span>

          {/* Simple arrow indicator on hover */}
          <span
            className={`ml-1 transition-opacity duration-300 ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
          >
            →
          </span>
        </div>

        {/* Subtle border that changes on hover */}
        <div
          className={`absolute inset-0 rounded-full border transition-colors duration-300 ${
            isHovering ? "border-red-500 border-opacity-50" : "border-zinc-800"
          }`}
        ></div>
      </a>
    </div>
  );
};
