"use client";

import React from "react";

interface ActiveFiltersProps {
  filterStatus: string[];
  filterSegment: string[];
  clearFilters: () => void;
}

export const ActiveFilters = ({ 
  filterStatus, 
  filterSegment, 
  clearFilters 
}: ActiveFiltersProps) => {
  if (filterStatus.length === 0 && filterSegment.length === 0) {
    return null;
  }

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      <span className="text-xs text-gray-400">Filtros:</span>
      {filterStatus.length > 0 && (
        <span className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-white">
          Estados: <span className="font-medium capitalize">{filterStatus.join(', ')}</span>
        </span>
      )}
      {filterSegment.length > 0 && (
        <span className="text-xs px-2 py-0.5 rounded-md bg-zinc-800 text-white">
          Segmentos: <span className="font-medium capitalize">{filterSegment.join(', ')}</span>
        </span>
      )}
      <button 
        onClick={clearFilters}
        className="text-xs text-red-400 hover:text-red-300 ml-auto"
      >
        Limpiar filtros
      </button>
    </div>
  );
}; 