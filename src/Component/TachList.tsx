import React from "react";
import TechCard from "./TechCard";
import type { Technology } from "../types";

interface TachListProps {
  technologies: Technology[];
  stack: Technology[];
  loading: boolean;
  error: string | null;
  onAddToStack: (tech: Technology) => void;
}

const TachList: React.FC<TachListProps> = ({
  technologies,
  stack,
  loading,
  error,
  onAddToStack,
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-64 rounded-2xl bg-gray-100 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    );
  }

  if (technologies.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-200 p-8 text-center">
        <p className="text-gray-500">No technologies found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
};

export default TachList;
