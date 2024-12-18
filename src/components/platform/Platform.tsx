import React from "react";
import { PlatformHeader } from "./PlatformHeader";
import { PlatformTabs } from "./PlatformTabs";
import { PlatformContent } from "./PlatformContent";
import { usePlatform } from "../../context/PlatformContext";
import { ArrowLeft } from "lucide-react";

interface PlatformProps {
  onExit: () => void;
}

export const Platform: React.FC<PlatformProps> = ({ onExit }) => {
  const { activeTab, refreshData } = usePlatform();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onExit}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <PlatformHeader onRefresh={refreshData} />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <PlatformTabs />
          <div className="p-6">
            <PlatformContent activeTab={activeTab} />
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 AI Governance Monitor. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
