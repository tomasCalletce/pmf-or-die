import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUp, ArrowDown, Linkedin, Users, Tag, Info } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { StartupAvatar } from "./startup-avatar-server";
import type { Startup } from "../types";

import { StartupCardClient } from "./startup-card-client";

interface StartupCardProps {
  startup: Startup;
  searchTerm: string;
  formatCurrency: (amount: number) => string;
}

// Predefined colors for good contrast and visibility add more colors as needed
const SEGMENT_COLORS = [
  'blue', 'purple', 'yellow', 'green', 'pink', 'orange', 'teal', 'indigo', 'red', 'cyan'
] as const;

type SegmentColor = typeof SEGMENT_COLORS[number];


function getSegmentColor(segment: string): SegmentColor {
  let hash = 0;
  const segmentText = segment || '';
  
  for (let i = 0; i < segmentText.length; i++) {
    hash = ((hash << 5) - hash) + segmentText.charCodeAt(i);
    hash = hash & hash;
  }
  
  hash = Math.abs(hash);
  
  
  return SEGMENT_COLORS[hash % SEGMENT_COLORS.length] as SegmentColor;
}

export const StartupCard = ({ startup, searchTerm, formatCurrency }: StartupCardProps) => {
  
  const segmentColor = getSegmentColor(startup.segment);
  
  return (
    <Card
      className="group transition-all duration-300 hover:border-l-red-500 hover:border-l-2 overflow-hidden h-full w-full max-w-sm max-h-[22rem]"
    >
      <CardContent className="p-0 flex flex-col h-full">
        {/* Header with name and status */}
        <header className="p-3 flex items-center gap-3 border-b border-zinc-800/50">
          <StartupAvatar 
            avatarId={startup.avatar_id} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-700/30 shrink-0"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-sm md:text-base text-white truncate">
                {startup.name}
              </h2>
              <Badge 
                variant={startup.status as 'growing' | 'declining' | 'neutral'}
                className="shrink-0 text-[10px] md:text-xs"
              >
                {startup.status === 'growing' ? 'Creciendo' : 
                startup.status === 'declining' ? 'Decreciendo' : 'Neutral'}
              </Badge>
            </div>
          </div>
        </header>

        
        <section aria-label="Descripción" className="px-3 py-2 bg-zinc-900/30">
          <div className="flex items-start gap-2">
            <Info className="w-3 h-3 text-red-500 mt-1 shrink-0" />
            <div>
              <div className="flex items-center gap-1 mb-1">
                <Badge 
                  variant="outline" 
                  className={`px-2 py-0.5 text-[8px] md:text-[10px] capitalize ${
                    segmentColor === 'blue' ? 'bg-blue-950/50 text-blue-300 border-blue-700/30' :
                    segmentColor === 'purple' ? 'bg-purple-950/50 text-purple-300 border-purple-700/30' :
                    segmentColor === 'yellow' ? 'bg-yellow-950/50 text-yellow-300 border-yellow-700/30' :
                    segmentColor === 'green' ? 'bg-green-950/50 text-green-300 border-green-700/30' :
                    segmentColor === 'pink' ? 'bg-pink-950/50 text-pink-300 border-pink-700/30' :
                    segmentColor === 'orange' ? 'bg-orange-950/50 text-orange-300 border-orange-700/30' :
                    segmentColor === 'teal' ? 'bg-teal-950/50 text-teal-300 border-teal-700/30' :
                    segmentColor === 'indigo' ? 'bg-indigo-950/50 text-indigo-300 border-indigo-700/30' :
                    segmentColor === 'red' ? 'bg-red-950/50 text-red-300 border-red-700/30' :
                    segmentColor === 'cyan' ? 'bg-cyan-950/50 text-cyan-300 border-cyan-700/30' :
                    'bg-zinc-900 text-gray-300 border-zinc-700'
                  }`}
                >
                  <Tag className="w-2 h-2 mr-1" />{startup.segment}
                </Badge>
              </div>
              <p className="text-[10px] md:text-xs text-gray-300 line-clamp-2">
                {startup.description}
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Información financiera" className="mt-1 px-3 py-2 flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border-b border-zinc-800/30 pb-2">
              <p className="text-[10px] md:text-xs font-medium text-gray-400">Ingresos</p>
              <p className="text-sm md:text-lg font-bold text-white">{formatCurrency(startup.revenue)}</p>
            </div>
            
            <div className={`flex items-center justify-between px-2 py-1.5 rounded-md ${
              startup.revenue_change > 0 
                ? 'bg-green-500/10 border border-green-500/20' 
                : startup.revenue_change < 0 
                  ? 'bg-red-500/10 border border-red-500/20' 
                  : 'bg-zinc-800/30 border border-zinc-700/20'
            }`}>
              <p className="text-[10px] md:text-xs font-medium text-gray-300">Variación</p>
              <div className={`flex items-center text-xs md:text-sm gap-1 font-medium ${
                startup.revenue_change > 0 
                  ? 'text-green-500' 
                  : startup.revenue_change < 0 
                    ? 'text-red-500' 
                    : 'text-gray-400'
              }`}>
                {startup.revenue_change > 0 && <ArrowUp className="w-3 h-3" />}
                {startup.revenue_change < 0 && <ArrowDown className="w-3 h-3" />}
                {startup.revenue_change !== 0 
                  ? formatCurrency(Math.abs(startup.revenue_change))
                  : 'Sin cambios'
                }
              </div>
            </div>
          </div>

          
          {startup.founders_linkedin && startup.founders_linkedin.length > 0 && (
            <StartupCardClient
              foundersLinkedin={startup.founders_linkedin}
              landingPage={startup.landing_page}
            />
          )}
        </section>
      </CardContent>
    </Card>
  );
}; 