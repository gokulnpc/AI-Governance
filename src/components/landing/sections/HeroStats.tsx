import React from "react";
import { StatsCard } from "../stats/StatsCard";

export const HeroStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <StatsCard
        value={1000}
        label="Models Protected"
        suffix="+"
        color="blue"
      />
      <StatsCard
        value={100}
        label="Verification Rate"
        suffix="%"
        color="green"
      />
    </div>
  );
};
