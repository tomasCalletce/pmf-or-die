import Link from "next/link";

export const Inscribete = () => {
  return (
    <div className="w-full max-w-xl mx-auto mt-12 flex flex-col items-center relative">
      {/* Background elements */}
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-20 w-60 h-60 bg-red-800/20 rounded-full blur-3xl"></div>
      </div>

      {/* Glowing border */}
      <div className="w-full max-w-md relative border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl overflow-hidden">
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-red-500"></div>
        <div className="absolute top-0 left-0 w-1 h-16 bg-red-500"></div>
        <div className="absolute bottom-0 right-0 w-16 h-1 bg-red-500"></div>
        <div className="absolute bottom-0 right-0 w-1 h-16 bg-red-500"></div>

        <div className="text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-xl shadow-lg border border-zinc-700">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-2 inline-block"></div>
            <span className="text-sm font-medium text-gray-200">
              APLICACIONES ABIERTAS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-audiowide)] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-red-500 to-red-600 mb-4">
            INSCRÍBETE AHORA
          </h2>

          <Link
            href="https://app.youform.com/forms/46kietdc"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-8 py-3 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-red-500 rounded-lg text-white font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 backdrop-blur-sm"
          >
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 group-hover:animate-bounce"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-red-400">
                APLICAR AHORA
              </span>
            </span>
          </Link>

          <p className="mt-6 text-sm text-gray-500 max-w-sm mx-auto">
            <span className="font-medium text-red-500">
              No todos los startups serán aceptados.
            </span>{" "}
            Solo los mejores harán parte del programa.
          </p>
        </div>
      </div>
    </div>
  );
};
