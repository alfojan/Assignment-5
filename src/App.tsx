import { useEffect } from "react";
import { useState } from "react";
import type { Technology } from "./types";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import TachList from "./Component/TachList";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
        setError("Failed to load technology data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <TachList />
    </div>
  );
}

export default App;
