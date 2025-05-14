import { ExternalLink, Linkedin } from "lucide-react";
import { projects } from "../lib/projects-data";
import Link from "next/link";

export const Projects = () => {
  return (
    <div className="w-full mx-auto max-w-3xl mt-16 px-4">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-audiowide)] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-500">
          PARTICIPANTES
        </h2>
        <div className="h-[1px] w-22 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-2"></div>
      </div>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-zinc-900 to-zinc-900/90 rounded-lg border-l-2 border-red-500/40 border-y border-r border-zinc-800/50 backdrop-blur-sm"
          >
            <div className="p-3 flex flex-row items-center">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-xs mt-0.5">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-2 ml-3 shrink-0">
                <Link
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/30 border border-zinc-700/30 text-white hover:bg-black/50 hover:border-red-500/20 transition-colors text-xs"
                >
                  <Linkedin className="w-3 h-3" />
                  <span>LinkedIn</span>
                </Link>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/30 border border-zinc-700/30 text-white hover:bg-black/50 hover:border-red-500/20 transition-colors text-xs"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Web</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
