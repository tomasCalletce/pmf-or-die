"use client";

import React, { useState, useEffect } from "react";
import type { Startup } from "../types";
import { SearchAndFilter } from "./search-and-filter";
import { ActiveFilters } from "./active-filters";
import { StartupsGrid } from "./startups-grid";

export const StartupsList = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [filterSegment, setFilterSegment] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showSegmentFilters, setShowSegmentFilters] = useState(false);
  const [segments, setSegments] = useState<string[]>([]);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await fetch('/startups.json');
        const data = await response.json();
        
        // Sort startups by submitted date
        const sortedStartups = data.sort((a: Startup, b: Startup) => 
          new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime()
        );
        
        // Extract unique segments
        const uniqueSegments = Array.from(new Set(sortedStartups.map((startup: Startup) => startup.segment))) as string[];
        setSegments(uniqueSegments);
        
        setStartups(sortedStartups);
      } catch (error) {
        console.error("Error fetching startups:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStartups();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const searchAllFields = (startup: Startup, term: string): boolean => {
    const searchLower = term.toLowerCase();
    
    // Search in basic text fields
    if (
      startup.name.toLowerCase().includes(searchLower) ||
      startup.description.toLowerCase().includes(searchLower) ||
      startup.landing_page.toLowerCase().includes(searchLower) ||
      startup.submitted_at.toLowerCase().includes(searchLower) ||
      startup.status.toLowerCase().includes(searchLower) ||
      startup.segment.toLowerCase().includes(searchLower)
    ) {
      return true;
    }
    
    // Search in founders' LinkedIn URLs
    if (startup.founders_linkedin && startup.founders_linkedin.some((url: string) => 
      url.toLowerCase().includes(searchLower)
    )) {
      return true;
    }
    
    // Search in revenue values (as strings)
    if (
      startup.revenue.toString().includes(searchLower) ||
      startup.revenue_change.toString().includes(searchLower) ||
      formatCurrency(startup.revenue).toLowerCase().includes(searchLower) ||
      formatCurrency(Math.abs(startup.revenue_change)).toLowerCase().includes(searchLower)
    ) {
      return true;
    }
    
    return false;
  };

  const filteredStartups = startups.filter(startup => {
    // Filter by search term - search across all available fields
    const matchesSearch = searchTerm === "" || searchAllFields(startup, searchTerm);
    
    // Filter by status - if no status filters are selected, show all
    const matchesStatus = filterStatus.length === 0 || filterStatus.includes(startup.status);
    
    // Filter by segment - if no segment filters are selected, show all
    const matchesSegment = filterSegment.length === 0 || filterSegment.includes(startup.segment);
    
    return matchesSearch && matchesStatus && matchesSegment;
  });

  const toggleStatusFilter = (status: string) => {
    setFilterStatus(prevStatus => {
      if (prevStatus.includes(status)) {
        return prevStatus.filter(s => s !== status);
      } else {
        return [...prevStatus, status];
      }
    });
  };

  const toggleSegmentFilter = (segment: string) => {
    setFilterSegment(prevSegment => {
      if (prevSegment.includes(segment)) {
        return prevSegment.filter(s => s !== segment);
      } else {
        return [...prevSegment, segment];
      }
    });
  };

  const clearFilters = () => {
    setFilterStatus([]);
    setFilterSegment([]);
    setSearchTerm("");
    setShowFilters(false);
    setShowSegmentFilters(false);
  };

  if (isLoading) {
    return (
      <div className="w-full mx-auto max-w-6xl mt-16 px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-audiowide)] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-500">
            STARTUPS
          </h2>
          <div className="h-[1px] w-22 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-2"></div>
          <p className="text-gray-400 text-center mt-4">Cargando startups...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto max-w-6xl mt-6 md:mt-16 px-4 pb-12 min-h-screen">
      <div className="flex flex-col items-center mb-4 md:mb-8">
        <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-audiowide)] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-500">
          STARTUPS
        </h2>
        <div className="h-[1px] w-22 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-2"></div>
        <p className="text-gray-400 text-center mt-1 text-sm">
          45 días para alcanzar Product Market Fit
        </p>
      </div>

      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        showSegmentFilters={showSegmentFilters}
        setShowSegmentFilters={setShowSegmentFilters}
        filterStatus={filterStatus}
        filterSegment={filterSegment}
        toggleStatusFilter={toggleStatusFilter}
        toggleSegmentFilter={toggleSegmentFilter}
        setFilterStatus={setFilterStatus}
        setFilterSegment={setFilterSegment}
        segments={segments}
        startupCount={startups.length}
      />

      <ActiveFilters
        filterStatus={filterStatus}
        filterSegment={filterSegment}
        clearFilters={clearFilters}
      />

      <StartupsGrid
        startups={filteredStartups}
        searchTerm={searchTerm}
        formatCurrency={formatCurrency}
        filterStatus={filterStatus}
        filterSegment={filterSegment}
        clearFilters={clearFilters}
      />
    </div>
  );
};

export default StartupsList; 