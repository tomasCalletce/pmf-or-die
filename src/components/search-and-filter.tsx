"use client";

import React from "react";
import { Search, Filter, Tag, TrendingUp, ArrowDown } from "lucide-react";

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  showSegmentFilters: boolean;
  setShowSegmentFilters: (show: boolean) => void;
  filterStatus: string[];
  filterSegment: string[];
  toggleStatusFilter: (status: string) => void;
  toggleSegmentFilter: (segment: string) => void;
  setFilterStatus: React.Dispatch<React.SetStateAction<string[]>>;
  setFilterSegment: React.Dispatch<React.SetStateAction<string[]>>;
  segments: string[];
  startupCount: number;
}

export const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters,
  showSegmentFilters,
  setShowSegmentFilters,
  filterStatus,
  filterSegment,
  toggleStatusFilter,
  toggleSegmentFilter,
  setFilterStatus,
  setFilterSegment,
  segments,
  startupCount
}: SearchAndFilterProps) => {
  const toggleFilters = () => {
    if (showFilters || showSegmentFilters) {
      setShowFilters(false);
      setShowSegmentFilters(false);
    } else {
      setShowFilters(true);
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-black/95 pt-2 pb-3 -mx-4 px-4 backdrop-blur-sm border-b border-zinc-800/50">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input 
            type="text"
            placeholder="educacion, datos, etc..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-red-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          onClick={toggleFilters} 
          className={`p-2 rounded-md bg-zinc-900/80 border border-zinc-800 text-white ${(filterStatus.length > 0 || filterSegment.length > 0) ? 'ring-1 ring-red-500' : ''}`}
          aria-label="Toggle filters"
        >
          <Filter className="w-5 h-5" />
        </button>
        {!searchTerm && (
          <div className="py-1 px-2 bg-zinc-900/60 border border-zinc-800 rounded-md flex items-center text-xs text-white">
            <span className="font-medium">{startupCount}</span>
          </div>
        )}
      </div>

      {/* Status Filters */}
      {showFilters && (
        <div className="mt-2 space-y-2">
          <div className="flex gap-2 pb-1 overflow-x-auto">
            <button 
              onClick={() => setFilterStatus([])} 
              className={`px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap ${filterStatus.length === 0 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-zinc-800 text-gray-300'}`}
            >
              Todos estados
            </button>
            <button 
              onClick={() => toggleStatusFilter('growing')} 
              className={`px-3 py-1.5 text-xs rounded-md flex items-center gap-1 transition-colors whitespace-nowrap ${filterStatus.includes('growing') ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-zinc-800 text-gray-300'}`}
            >
              <TrendingUp className="w-3 h-3" /> Creciendo
            </button>
            <button 
              onClick={() => toggleStatusFilter('declining')} 
              className={`px-3 py-1.5 text-xs rounded-md flex items-center gap-1 transition-colors whitespace-nowrap ${filterStatus.includes('declining') ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-zinc-800 text-gray-300'}`}
            >
              <ArrowDown className="w-3 h-3" /> Decreciendo
            </button>
            <button 
              onClick={() => toggleStatusFilter('neutral')} 
              className={`px-3 py-1.5 text-xs rounded-md flex items-center gap-1 transition-colors whitespace-nowrap ${filterStatus.includes('neutral') ? 'bg-zinc-500/20 text-zinc-400 border border-zinc-500/30' : 'bg-zinc-800 text-gray-300'}`}
            >
              Neutral
            </button>
          </div>

          <div className="flex flex-wrap gap-2 pb-1 overflow-x-auto">
            <button 
              onClick={() => setFilterSegment([])} 
              className={`px-3 py-1.5 text-xs rounded-md transition-colors whitespace-nowrap ${filterSegment.length === 0 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-zinc-800 text-gray-300'}`}
            >
              Todos segmentos
            </button>
            {segments.map((segment, idx) => (
              <button 
                key={idx}
                onClick={() => toggleSegmentFilter(segment)} 
                className={`px-3 py-1.5 text-xs rounded-md flex items-center gap-1 transition-colors whitespace-nowrap capitalize ${filterSegment.includes(segment) ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-zinc-800 text-gray-300'}`}
              >
                <Tag className="w-3 h-3" /> {segment}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 