import React, { useState, useEffect } from "react";
import TechCard from "./TechCard";
import Sidebar from "./Sidebar";
import type { Technology } from "../types";

const TachList: React.FC = () => {
  const [technologiesData, setTechnologiesData] = useState<Technology[]>([]);
  const [myStack, setMyStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologiesData(data))
      .catch((err) => console.error("Error loading json data:", err));
  }, []);

  const handleAddToStack = (tech: Technology) => {
    if (!myStack.find((item) => item.id === tech.id)) {
      setMyStack([...myStack, tech]);
    }
  };

  const handleRemoveFromStack = (id: string) => {
    setMyStack(myStack.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    setMyStack([]);
  };

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      {/* Title Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Explore the <span className="text-[#e91e63]">Technologies</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Tech Cards Section */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {technologiesData.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              onAddToStack={handleAddToStack}
            />
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="lg:col-span-1">
          <Sidebar
            stack={myStack}
            onRemoveFromStack={handleRemoveFromStack}
            onClearAll={handleClearAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TachList;
