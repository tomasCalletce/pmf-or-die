import { Whatsapp } from "./whatsapp";

export const Info = () => {
  return (
    <>
      <div className="w-full mx-auto flex flex-col items-center relative z-10">
        <a
          href="https://www.linkedin.com/in/tomas-calle/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-gray-300 hover:bg-zinc-800 transition flex items-center shadow-md"
        >
          <span>Organizado por Tomás Calle</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 ml-1.5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </a>
        <div className="mb-2 text-center">
          <div className="flex gap-2 justify-center flex-wrap mb-4">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-800 to-red-600 rounded-full shadow-lg transform -rotate-2">
              <span className="text-xs md:text-sm font-bold tracking-widest">
                #LATAM
              </span>
            </div>
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-700 to-red-500 rounded-full shadow-lg transform rotate-1">
              <span className="text-xs md:text-sm font-bold tracking-widest">
                #ACCELERATE_LATAM
              </span>
            </div>
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full shadow-lg transform -rotate-1">
              <span className="text-xs md:text-sm font-bold tracking-widest">
                #PMF_OR_DIE
              </span>
            </div>
          </div>
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-xl shadow-lg border border-zinc-700">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-gray-200">
              MAYO 20 - JULIO 4, 2025
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold font-[var(--font-audiowide)] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white from-40% via-white via-60% to-red-600 drop-shadow-lg">
            PMF OR DIE
          </h1>
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-red-500 to-red-400 mx-auto my-3 backdrop-blur-sm"></div>
          <h2 className="text-xl md:text-2xl font-[var(--font-audiowide)] text-gray-400 tracking-widest">
            PRODUCT MARKET FIT OR DIE
          </h2>
        </div>
        <p className="text-center text-xs text-gray-500 mb-6">
          credit to{" "}
          <a
            href="https://x.com/blakeandersonw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 underline decoration-dotted"
          >
            @blakeandersonw
          </a>{" "}
          for the name.
        </p>
        <p className="text-center text-lg md:text-xl leading-relaxed max-w-xl mx-auto text-gray-300 font-light mb-6">
          45 días para crear un producto y llegar a revenue.{" "}
          <span className="font-bold underline decoration-red-500">
            Por encima de todo, el objetivo es ventas.
          </span>{" "}
          El producto no tiene que ser nuevo pero sí debe ser pre-revenue. Aquí
          todos se ayudan para subir las probabilidades de construir cosas
          increíbles.
        </p>

        <div className="w-full max-w-xl mx-auto">
          <p className="text-center text-base md:text-lg leading-relaxed text-gray-300 font-light">
            Escríbele a Tomás (
            <a
              href="https://www.linkedin.com/in/tomas-calle/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-300"
            >
              @tomas-calle
            </a>
            ) para participar y aparecer en la{" "}
            <span className="font-bold underline decoration-red-500">
              lista de startups participantes
            </span>
            .
          </p>

          <p className="text-center text-base md:text-lg leading-relaxed text-gray-300 font-light mt-4">
            Al final el{" "}
            <span className="font-bold underline decoration-red-500">
              top 3
            </span>{" "}
            podrá presentar su startup a un grupo de ángeles y mentores.
          </p>

          <p className="text-center text-base md:text-lg leading-relaxed text-gray-600 font-light mt-4">
            <span className="font-light italic tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-red-500 to-gray-600">
              más sorpresas en camino
              <span className="tracking-widest">...</span>
            </span>
          </p>

          <Whatsapp />
        </div>
      </div>
    </>
  );
};
