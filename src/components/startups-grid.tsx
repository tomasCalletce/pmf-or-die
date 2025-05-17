"use client";

import React from "react";
import type { Startup } from "../types";
import { StartupCard } from "./startup-card";

interface StartupsGridProps {
  startups: Startup[];
  searchTerm: string;
  formatCurrency: (amount: number) => string;
  filterStatus: string[];
  filterSegment: string[];
  clearFilters: () => void;
}

export const StartupsGrid = ({
  startups,
  searchTerm,
  formatCurrency,
  filterStatus,
  filterSegment,
  clearFilters
}: StartupsGridProps) => {
  const showFiltersBar = searchTerm || filterStatus.length > 0 || filterSegment.length > 0;

  return (
    <>
      {/* Search results summary - compact on mobile */}
      {showFiltersBar && (
        <div className="mb-2 mt-1 px-2 py-1 bg-zinc-800/60 rounded-md flex items-center justify-between text-xs">
          <p className="text-gray-300">
            <span className="font-medium">{startups.length}</span> resultados
          </p>
          <button 
            onClick={clearFilters}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Limpiar
          </button>
        </div>
      )}

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {startups.length > 0 ? (
          startups.map((startup) => (
            <StartupCard 
              key={startup.id} 
              startup={startup} 
              searchTerm={searchTerm}
              formatCurrency={formatCurrency}
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-4">
            <p className="text-gray-400 text-sm">No se encontraron startups que coincidan con los criterios de búsqueda.</p>
          </div>
        )}
      </div>
    </>
  );
}; 