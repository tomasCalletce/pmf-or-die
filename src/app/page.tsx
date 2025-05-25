import { EventDescription } from "~/app/_components/event-description";
import { StartupsList } from "~/app/_components/startups-list";
import { CountdownTimer } from "~/app/_components/countdown-timer";

export default function HomePage() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-start bg-black text-white px-4 overflow-x-hidden py-12 md:py-16">
      <EventDescription />
      <CountdownTimer />
      <StartupsList />
    </main>
  );
}
