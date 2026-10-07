import React from "react";
import type { Technology } from "../types";
import TachList from "./TachList";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  technologies: Technology[];
  stack: Technology[];
  loading: boolean;
  error: string | null;
  onAddToStack: (tech: Technology) => void;
  onRemoveFromStack: (id: string) => void;
  onClearAll: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  technologies,
  stack,
  loading,
  error,
  onAddToStack,
  onRemoveFromStack,
  onClearAll,
}) => {
  return (
    <section
      id="technologies"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>

        <p className="text-sm md:text-base text-gray-500 mt-2">
          Explore modern technologies and build your ideal development stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          <TachList
            technologies={technologies}
            stack={stack}
            loading={loading}
            error={error}
            onAddToStack={onAddToStack}
          />
        </div>

        <div className="w-full lg:w-1/4">
          <Sidebar
            stack={stack}
            onRemoveFromStack={onRemoveFromStack}
            onClearAll={onClearAll}
          />
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
