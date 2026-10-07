import React from "react";
import { FiTrash2, FiX } from "react-icons/fi";
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
    <aside className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>

        {stack.length > 0 && (
          <span className="text-xs bg-gray-100 px-2.5 py-1 rounded-full text-gray-600">
            {stack.length}
          </span>
        )}
      </div>

      <p className="text-xs text-gray-400 mb-5">
        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
        Selected
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>

          <p className="text-xs text-gray-300 mt-1">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 p-3 bg-gray-50 border border-gray-100 rounded-xl"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-white border border-gray-100 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-gray-800 truncate">
                      {item.name}
                    </h4>

                    <span className="text-[10px] text-gray-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => onRemoveFromStack(item.id)}
                  className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onClearAll}
            className="w-full mt-5 py-2.5 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2"
          >
            <FiTrash2 />
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
