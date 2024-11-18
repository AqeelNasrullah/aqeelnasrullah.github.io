"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timeElapsed, setTimeElapsed] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startTime = new Date("2024-11-18 23:30:00").getTime(); // Updated start time to when work began

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const elapsed = now - startTime;

      const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-gradient-to-br from-purple-600 to-blue-400 text-white">
      <main className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-5xl font-extrabold text-center drop-shadow-2xl animate-pulse">
          My Portfolio is Coming Soon!
        </h1>
        <p className="text-xl text-center max-w-md italic">
          I&apos;m currently working on my personal portfolio. Stay tuned for
          updates on my projects and skills!
        </p>
        <div className="text-3xl font-mono text-center bg-white bg-opacity-20 p-6 rounded-lg shadow-2xl backdrop-blur-md">
          {timeElapsed.days}d {timeElapsed.hours}h {timeElapsed.minutes}m{" "}
          {timeElapsed.seconds}s
        </div>
      </main>
      <footer className="flex gap-8 flex-wrap items-center justify-center mt-10">
        <p className="text-sm text-center text-gray-200">
          Thank you for your patience and support!
        </p>
      </footer>
    </div>
  );
}
