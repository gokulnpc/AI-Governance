import React from "react";
import { MetricsOverview } from "./sections/MetricsOverview";
import { BiasMatrix } from "./sections/BiasMatrix";

export const MainContent: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            AI Governance Monitor
          </h1>
          <p className="text-gray-600">
            Real-time monitoring and bias detection
          </p>
        </header>

        <MetricsOverview />

        <div className="grid grid-cols-2 gap-8">
          <BiasMatrix />
        </div>
      </div>
    </div>
  );
};
