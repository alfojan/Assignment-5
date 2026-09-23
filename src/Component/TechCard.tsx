import React from "react";
import { type Technology } from "../types";
interface TechProps {
  tech: Technology;
  onAddToStack: (tech: Technology) => void;
}

const TechCard: React.FC<TechProps> = ({ tech, onAddToStack }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Top: Icon + Name & Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 object-contain"
            />
            <h3 className="text-base font-bold text-gray-900">{tech.name}</h3>
          </div>
          <span className="text-xs px-2.5 py-1 bg-pink-50 text-[#e91e63] font-medium rounded-full">
            {tech.badge}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Category, Difficulty, Rating */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">
            {tech.category}
          </span>
          <span>{tech.difficulty}</span>
          <span className="text-amber-500 font-semibold">★ {tech.rating}</span>
        </div>

        {/* Add to Stack Button */}
        <button
          onClick={() => onAddToStack(tech)}
          className="w-full py-2 bg-[#0f172a] hover:bg-black text-white rounded-xl text-sm font-medium transition-colors"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechCard;
