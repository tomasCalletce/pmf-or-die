"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Linkedin, Users, ChevronDown, ChevronUp } from "lucide-react";

interface StartupCardClientProps {
  foundersLinkedin: string[];
  landingPage?: string;
}

export const StartupCardClient = ({ 
  foundersLinkedin,
  landingPage
}: StartupCardClientProps) => {
  const [showAllFounders, setShowAllFounders] = useState(false);
  
  
  const visibleFounders = showAllFounders 
    ? foundersLinkedin 
    : foundersLinkedin.slice(0, 3);
  
  
  const hasMoreFounders = foundersLinkedin.length > 3;
  
  return (
    <>
      <div className="mt-3 border-t border-zinc-800/30 pt-2">
        <p className="text-[10px] md:text-xs font-medium text-gray-400 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" /> Fundadores
          </span>
          {hasMoreFounders && (
            <button 
              onClick={() => setShowAllFounders(!showAllFounders)}
              className="text-gray-400 hover:text-white flex items-center gap-1 text-[10px]"
            >
              {showAllFounders ? (
                <>Ver menos <ChevronUp className="w-3 h-3" /></>
              ) : (
                <>Ver {foundersLinkedin.length - 3} más <ChevronDown className="w-3 h-3" /></>
              )}
            </button>
          )}
        </p>
        <div className="flex flex-wrap gap-1 mt-1 max-h-[80px] overflow-y-auto">
          {visibleFounders.map((linkedinUrl, idx) => (
            <Link
              key={idx}
              href={linkedinUrl.startsWith('http') ? linkedinUrl : `https://${linkedinUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-800/60 rounded-md text-[10px] md:text-xs text-gray-300 hover:bg-zinc-700/60 transition-colors"
            >
              <Linkedin className="w-2.5 h-2.5" />
              <span>Fundador {idx + 1}</span>
            </Link>
          ))}
        </div>
      </div>
      
      {landingPage && (
        <div className="mt-auto border-t border-zinc-800/50 p-2 flex items-center justify-end">
          <Link
            href={landingPage.startsWith('http') ? landingPage : `https://${landingPage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/30 border border-zinc-700/30 text-white hover:bg-black/50 hover:border-red-500/20 transition-colors text-[10px] md:text-xs"
          >
            <ExternalLink className="w-2.5 h-2.5" />
            <span>Ver sitio web</span>
          </Link>
        </div>
      )}
    </>
  );
}; 