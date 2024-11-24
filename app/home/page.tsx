import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/bg.webp')", // Updated path to absolute
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl px-6 text-white flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="sm:w-[70%]">
          <h1 className="text-5xl font-bold sm:text-6xl">
            Hi, I&#x27;m <span className="text-blue-300">Aqeel Nasrullah</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            I&#x27;m a Full Stack Developer with 3 years of experience in
            building robust web applications using ReactJs, NextJs, NestJs,
            ExpressJs, NodeJs, MongoDB and PostgreSQL.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
            <Button
              asChild
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white rounded-lg text-lg font-semibold"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="px-6 py-3 border border-gray-600 text-gray-200 hover:text-white hover:border-white rounded-lg text-lg font-semibold"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="hidden sm:block sm:w-[30%] mt-6 sm:mt-0">
          <Image
            src="/assets/images/hero.jpeg"
            width={512}
            height={512}
            alt="Your Name"
            className="rounded-full w-3/4 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
