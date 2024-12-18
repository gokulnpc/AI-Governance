import React from "react";
import { AlertTriangle } from "lucide-react";
import { FailuresChart } from "../charts/FailuresChart";

export const FailuresSection: React.FC = () => {
  return (
    <div className="bg-red-50/90 backdrop-blur-sm rounded-2xl p-8 border border-red-100 max-w-4xl mx-auto mt-12">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="h-6 w-6 text-red-600" />
        <h3 className="text-xl font-semibold text-red-900">
          Recent AI Governance Failures
        </h3>
      </div>

      <FailuresChart />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white/50 rounded-xl p-4">
          <div className="font-semibold">Hello Digit</div>
          <div className="text-red-600 font-bold">$2.7M Fine</div>
          <div className="text-sm text-gray-600 mt-1">
            2022: Algorithm-caused overdraft fees
          </div>
        </div>

        <div className="bg-white/50 rounded-xl p-4">
          <div className="font-semibold">Townstone Financial</div>
          <div className="text-red-600 font-bold">$105K Fine</div>
          <div className="text-sm text-gray-600 mt-1">
            2024: Discriminatory lending practices
          </div>
        </div>

        <div className="bg-white/50 rounded-xl p-4">
          <div className="font-semibold">Major Credit Card Provider</div>
          <div className="text-red-600 font-bold">Gender Bias</div>
          <div className="text-sm text-gray-600 mt-1">
            2019: Discriminatory credit limit algorithms
          </div>
        </div>
      </div>
    </div>
  );
};
