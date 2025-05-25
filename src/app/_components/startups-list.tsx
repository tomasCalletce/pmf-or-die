import { StartupCard } from "~/app/_components/startup-card";
import { startups } from "~/lib/startups";

export const StartupsList = () => {
  return (
    <div className="w-full mx-auto max-w-6xl mt-6 md:mt-16 px-4 pb-12 min-h-screen">
      <div className="flex flex-col items-center mb-4 md:mb-8">
        <h2 className="text-3xl md:text-5xl  tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-500">
          STARTUPS
        </h2>
        <div className="h-[1px] w-22 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto my-2"></div>
        <p className="text-gray-400 text-center mt-1 text-sm">
          45 días para alcanzar Product Market Fit
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[16rem] md:auto-rows-[18rem]">
        {startups.map((startup) => (
          <div key={startup.id} className="h-full w-full">
            <StartupCard startup={startup} />
          </div>
        ))}
      </div>
    </div>
  );
};
