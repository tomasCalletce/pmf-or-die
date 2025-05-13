import { ExternalLink, Linkedin } from "lucide-react";
import { projects } from "../lib/projects-data";
import Link from "next/link";

export const Projects = () => {
  return (
    <div className="w-full mx-auto max-w-4xl mt-16 px-4">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-audiowide)] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-500">
          PARTICIPANTES
        </h2>
        <div className="h-[1px] w-22 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-2"></div>
        <p className="text-center text-gray-400 max-w-lg">
          Conoce los proyectos participantes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-zinc-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all shadow-lg hover:shadow-red-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="p-6">
              <div className="mb-2 flex justify-between items-start">
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {project.name}
                </h3>
                <div className="flex space-x-2">
                  <Link
                    href={project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full cursor-pointer bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full cursor-pointer bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>

            <div className="h-1 w-0 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
