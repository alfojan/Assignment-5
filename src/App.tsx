import { useEffect } from "react";
import { useState } from "react";
import type { Technology } from "./types";

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
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div>
          {technologies.map((tech) => (
            <p key={tech.id}>{tech.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
