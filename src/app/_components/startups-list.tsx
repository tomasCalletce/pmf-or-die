"use client";

import { useState, useMemo } from "react";
import { StartupCard } from "~/app/_components/startup-card";
import { TagFilter } from "~/app/_components/tag-filter";
import { startups } from "~/lib/startups";

export const StartupsList = () => {
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);

  const segments = useMemo(() => {
    const uniqueSegments = Array.from(
      new Set(startups.map((startup) => startup.segment))
    );
    return uniqueSegments.sort();
  }, []);

  const filteredStartups = useMemo(() => {
    if (selectedSegments.length === 0) {
      return startups;
    }
    return startups.filter((startup) =>
      selectedSegments.includes(startup.segment)
    );
  }, [selectedSegments]);

  const handleSegmentToggle = (segment: string) => {
    setSelectedSegments((prev) =>
      prev.includes(segment)
        ? prev.filter((s) => s !== segment)
        : [...prev, segment]
    );
  };

  const handleClearAll = () => {
    setSelectedSegments([]);
  };

  return (
    <div className="w-full mx-auto max-w-6xl mt-6 md:mt-16 px-4 pb-12 min-h-screen">
      <div className="flex flex-col items-center mb-4 md:mb-8">
        <h2 className="text-3xl md:text-5xl  tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-500">
          STARTUPS
        </h2>
        <div className="h-[1px] w-22 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-2"></div>
        <p className="text-gray-400 text-center mt-1 text-sm">
          45 días para alcanzar Product Market Fit
        </p>
      </div>
      
      <TagFilter
        segments={segments}
        selectedSegments={selectedSegments}
        onSegmentToggle={handleSegmentToggle}
        onClearAll={handleClearAll}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[16rem] md:auto-rows-[18rem]">
        {filteredStartups.map((startup) => (
          <div key={startup.id} className="h-full w-full">
            <StartupCard startup={startup} />
          </div>
        ))}
      </div>
    </div>
  );
};
