import { useEffect, useState } from "react";

const VisitCounter = () => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    let mounted = true;

    const incrementVisits = async () => {
      try {
        const res = await fetch("/api/visits", { method: "POST" });
        if (!res.ok) return;
        const json = await res.json();
        if (mounted) setVisits(json.count);
      } catch (error) {
        console.error("Visit counter error", error);
      }
    };

    incrementVisits();
    return () => {
      mounted = false;
    };
  }, []);

  return <>{visits === null ? "—" : visits.toLocaleString()}</>;
};

export default VisitCounter;
