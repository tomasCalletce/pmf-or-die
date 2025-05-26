"use client";

import { useState, useEffect } from "react";

interface TagFilterProps {
  segments: string[];
  selectedSegments: string[];
  onSegmentToggle: (segment: string) => void;
  onClearAll: () => void;
}

export const TagFilter = ({
  segments,
  selectedSegments,
  onSegmentToggle,
  onClearAll,
}: TagFilterProps) => {
  return (
    <div className="w-full mb-3">
      <div className="flex items-center gap-1 flex-wrap">
        {segments.map((segment) => (
          <button
            key={segment}
            onClick={() => onSegmentToggle(segment)}
            className={`inline-block px-1.5 py-0.5 text-xs font-bold tracking-wide rounded-full whitespace-nowrap transition-all duration-200 uppercase ${
              selectedSegments.includes(segment)
                ? "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg"
                : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-gray-300"
            }`}
          >
            {segment}
          </button>
        ))}
      </div>
    </div>
  );
}; 