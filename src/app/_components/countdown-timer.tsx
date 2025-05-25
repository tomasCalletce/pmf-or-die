"use client";

import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("July 4, 2025 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalSeconds: 0,
        });
        return;
      }

      const totalSeconds = Math.floor(distance / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        totalSeconds,
      });
    };

    // Update immediately and then every second
    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="flex flex-col items-center">
        <div className="text-center mb-2">
          <h3 className="text-xl font-[var(--font-audiowide)] tracking-wider text-red-500">
            TIEMPO RESTANTE
          </h3>
        </div>

        <div className="flex justify-between w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">{timeRemaining.days}</span>
            <span className="text-xs text-gray-400">DÍAS</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">
              {timeRemaining.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400">HORAS</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">
              {timeRemaining.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400">MINUTOS</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">
              {timeRemaining.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400">SEGUNDOS</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-400">
            {timeRemaining.totalSeconds.toLocaleString()} segundos para alcanzar
            PMF
          </span>
        </div>
      </div>
    </div>
  );
};
