export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-black text-white px-4 overflow-hidden">
      <div className="w-full mx-auto flex flex-col items-center relative z-10">
        <a
          href="https://www.linkedin.com/in/tomas-calle/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-gray-300 hover:bg-zinc-800 transition duration-300 flex items-center shadow-md animate-in fade-in duration-700"
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
        <div className="mb-10 text-center">
          <div className="flex gap-2 justify-center flex-wrap mb-4">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-800 to-red-600 rounded-full shadow-lg transform -rotate-2 animate-in fade-in duration-1000">
              <span className="text-xs md:text-sm font-bold tracking-widest">
                #LATAM
              </span>
            </div>
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-700 to-red-500 rounded-full shadow-lg transform rotate-1 animate-in fade-in duration-1000 delay-100">
              <span className="text-xs md:text-sm font-bold tracking-widest">
                #ACCELERATE_LATAM
              </span>
            </div>
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full shadow-lg transform -rotate-1 animate-in fade-in duration-1000 delay-200">
              <span className="text-xs md:text-sm font-bold tracking-widest">
                #PMF_OR_DIE
              </span>
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold font-[var(--font-audiowide)] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white from-40% via-white via-60% to-red-600 animate-in fade-in duration-1000 drop-shadow-lg">
            PMF OR DIE
          </h1>
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-red-500 to-red-400 mx-auto my-3 animate-in fade-in duration-1000 delay-300 backdrop-blur-sm"></div>
          <h2 className="text-xl md:text-2xl font-[var(--font-audiowide)] text-gray-400 tracking-widest animate-in fade-in duration-1000 delay-500">
            PRODUCT MARKET FIT OR DIE
          </h2>
        </div>
        <p className="text-center text-lg md:text-xl leading-relaxed max-w-xl mx-auto text-gray-300 font-light mb-8 animate-in fade-in duration-1000 delay-700">
          45 días para crear un producto a llegar a revenue. Todo se vale. Lo
          único importa es llegar a $.
        </p>

        <div className="w-full max-w-xl mx-auto mt-4 animate-in fade-in duration-1000 delay-800">
          <p className="text-center text-base md:text-lg leading-relaxed text-gray-300 font-light">
            Construir solo es duro.{" "}
            <span className="font-bold text-white underline decoration-red-500 decoration-2 underline-offset-4">
              Únete a una llamada de meet
            </span>{" "}
            que estará abierta 24 horas al día durante 45 días para que entre
            todos podamos ayudarnos a construir cosas increíbles.
          </p>
          <p className="mt-4 text-center text-base md:text-lg leading-relaxed text-gray-300 font-light">
            <span className="font-bold text-white underline decoration-red-500 decoration-2 underline-offset-4 hover:text-red-400 transition-colors cursor-pointer">
              Escríbele a Tomás
            </span>{" "}
            para que tu proyecto aparezca en la lista de participantes.
          </p>

          <div className="mt-8 flex flex-col gap-4 items-center">
            <a
              href="https://chat.whatsapp.com/DqHtEAQM9K6BbBDz8TU1eP"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 flex items-center gap-3 rounded-full bg-black bg-opacity-60 backdrop-blur-md border border-zinc-800 hover:border-zinc-700 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all w-80 justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[#222222] rounded-full opacity-60"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#25D366"
                className="w-5 h-5 relative z-10"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-medium text-white relative z-10">
                Únete al grupo de WhatsApp
              </span>
            </a>

            <a
              href="https://meet.google.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 flex items-center gap-3 rounded-full bg-black bg-opacity-60 backdrop-blur-md border border-zinc-800 hover:border-zinc-700 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all w-80 justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#111111] to-[#222222] rounded-full opacity-60"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#EA4335"
                className="w-5 h-5 relative z-10"
              >
                <path d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12z" />
              </svg>
              <span className="font-medium text-white relative z-10">
                Únete al meet 24-7
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
