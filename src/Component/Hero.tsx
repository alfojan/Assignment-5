import React from "react";
import heroImg from "../assets/banner-stack.png";

export const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-white max-w-7xl mx-auto gap-8">
      {/* Left Text Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-500 text-base max-w-lg leading-relaxed">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-2">
          <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white font-medium rounded-lg shadow-sm hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="px-6 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Content */}
      <div className="flex-1 flex justify-center">
        <img
          src={heroImg}
          alt="Development Stack Illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
