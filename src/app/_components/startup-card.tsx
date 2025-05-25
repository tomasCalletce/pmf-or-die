import Link from "next/link";
import { type Startup } from "~/lib/startups";
import { Tag, Info, Users, ExternalLink, TrendingUp } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { StartupAvatar } from "~/app/_components/startup-avatar-server";

interface StartupCardProps {
  startup: Startup;
}

export const StartupCard = ({ startup }: StartupCardProps) => {
  return (
    <Card
      className="group w-full max-w-sm h-[16rem] md:h-[18rem] overflow-hidden 
                     transition-all duration-700 
                     border-l-2 border-l-transparent 
                     hover:border-l-red-500"
    >
      <CardContent className="p-0 flex flex-col h-full">
        <div
          className="p-3 flex items-center gap-3 
                          border-b border-zinc-800/50 shrink-0"
        >
          <StartupAvatar
            avatarId={startup.avatar_id}
            className="w-8 h-8 md:w-10 md:h-10 
                       rounded-full border border-zinc-700/30 
                       shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h2
                className="font-semibold text-sm md:text-base 
                            text-white truncate"
              >
                {startup.name}
              </h2>
              <Badge variant="outline" className="text-white text-[10px]">
                <Tag className="w-2 h-2 mr-1" />
                {startup.segment}
              </Badge>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 bg-zinc-900/30 shrink-0">
          <div className="flex items-start gap-2">
            <Info className="w-3 h-3 text-red-500 mt-0.5 shrink-0" />
            <div className="min-w-0 flex-1">
              <p
                className="text-[10px] md:text-xs 
                           text-gray-300 line-clamp-2"
              >
                {startup.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col px-3 py-2 min-h-0 gap-2">
          <div
            className="relative overflow-hidden shrink-0
                          bg-gradient-to-br from-red-500/10 via-zinc-900/50 to-zinc-800/30
                          border border-red-500/20
                          rounded-lg p-2.5
                          backdrop-blur-sm
                          hover:from-red-500/20 hover:border-red-500/40
                          transition-all duration-300"
          >
            <div
              className="absolute inset-0 
                           bg-gradient-to-r from-transparent via-red-500/5 to-transparent
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-500"
            />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-red-400" />
                <p className="text-[10px] md:text-xs font-medium text-gray-300">
                  Ingresos
                </p>
              </div>
              <div className="text-right">
                <p
                  className="text-sm md:text-lg font-bold 
                             bg-gradient-to-r from-white to-gray-300
                             bg-clip-text text-transparent"
                >
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(startup.revenue)}
                </p>
                <div
                  className="w-full h-0.5 
                               bg-gradient-to-r from-red-500/50 to-transparent
                               mt-0.5"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <p
              className="text-[10px] md:text-xs font-medium 
                         text-gray-400 flex items-center gap-1 mb-1.5"
            >
              <Users className="w-3 h-3" />
              Fundadores
            </p>
            <div className="flex flex-wrap gap-1">
              {startup.founders_linkedin.slice(0, 2).map((linkedinUrl, idx) => (
                <Link
                  key={idx}
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 
                            px-2 py-0.5 
                            bg-zinc-800/60 rounded-md 
                            text-[9px] md:text-[10px] text-gray-300 
                            hover:bg-zinc-700/60 
                            transition-colors"
                >
                  <span>F{idx + 1}</span>
                </Link>
              ))}
              {startup.founders_linkedin.length > 2 && (
                <span
                  className="inline-flex items-center 
                                px-2 py-0.5 
                                bg-zinc-800/60 rounded-md 
                                text-[9px] md:text-[10px] text-gray-400"
                >
                  +{startup.founders_linkedin.length - 2}
                </span>
              )}
            </div>
          </div>
          <div className="shrink-0">
            <Link
              href={startup.landing_page}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 
                        px-2 py-1.5 rounded-md 
                        bg-gradient-to-r from-red-500/10 to-red-600/10
                        border border-red-500/30 
                        text-white text-[10px] md:text-xs font-medium
                        hover:from-red-500/20 hover:to-red-600/20
                        hover:border-red-500/50
                        transition-all duration-300
                        group/link"
            >
              <ExternalLink className="w-2.5 h-2.5 group-hover/link:scale-110 transition-transform" />
              <span>Sitio web</span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
