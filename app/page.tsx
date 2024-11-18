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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <main className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl font-extrabold text-center drop-shadow-lg">
          My Portfolio is Coming Soon!
        </h1>
        <p className="text-lg text-center max-w-md">
          I&apos;m currently working on my personal portfolio. Stay tuned for
          updates on my projects and skills!
        </p>
        <div className="text-2xl font-mono text-center bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          {timeElapsed.days}d {timeElapsed.hours}h {timeElapsed.minutes}m{" "}
          {timeElapsed.seconds}s
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-8">
        <p className="text-sm text-center">
          Thank you for your patience and support!
        </p>
      </footer>
    </div>
  );
}
