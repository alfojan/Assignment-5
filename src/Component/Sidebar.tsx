import React from "react";
import type { Technology } from "../types";

interface SidebarProps {
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onClearAll: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  stack,
  onRemoveFromStack,
  onClearAll,
}) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-20">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="text-xs text-gray-400 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-xs text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3">
          {/* Selected Items */}
          <div className="space-y-2">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2.5 bg-gray-50 border border-gray-100 rounded-xl"
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-5 h-5 object-contain"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-gray-400">
                      {item.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="text-gray-400 hover:text-gray-600 p-1 text-sm font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={onClearAll}
            className="w-full mt-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl text-xs font-medium transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
