import React from "react";
import type { Technology } from "../types";

interface TechProps {
  tech: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

const TechCard: React.FC<TechProps> = ({ tech, isAdded, onAddToStack }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7 object-contain"
              />
            </div>

            <h3 className="text-base font-bold text-gray-900">{tech.name}</h3>
          </div>

          <span className="text-xs px-2.5 py-1 bg-pink-50 text-pink-600 font-medium rounded-full whitespace-nowrap">
            {tech.badge}
          </span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-4">
          <span className="bg-gray-100 px-2 py-1 rounded-md text-gray-600 font-medium">
            {tech.category}
          </span>

          <span className="text-gray-400">{tech.difficulty}</span>

          <span className="text-amber-500 font-semibold">★ {tech.rating}</span>
        </div>

        <button
          type="button"
          disabled={isAdded}
          onClick={() => onAddToStack(tech)}
          className={`w-full py-2.5 rounded-xl text-sm font-medium transition-all ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-900 text-white hover:bg-black"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
