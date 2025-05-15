import { Info } from "./info";
import { Projects } from "./projects";
import { Inscribete } from "./inscribete";

export default function HomePage() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-start bg-black text-white px-4 overflow-x-hidden py-12 md:py-16">
      <Info />
      <Inscribete />
      {/* <Projects /> */}
    </main>
  );
}
