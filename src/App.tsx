import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./types";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import MainLayout from "./Component/MainLayout";
import Footer from "./Component/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technology data");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load technology data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);

    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id: string) => {
    const removedTechnology = stack.find((item) => item.id === id);

    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const handleClearAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <MainLayout
          technologies={technologies}
          stack={stack}
          loading={loading}
          error={error}
          onAddToStack={handleAddToStack}
          onRemoveFromStack={handleRemoveFromStack}
          onClearAll={handleClearAll}
        />
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
