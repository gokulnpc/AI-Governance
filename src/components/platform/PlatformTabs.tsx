import React from "react";
import { usePlatform } from "../../context/PlatformContext";
import { FileBarChart, Upload, History, FileCheck, Shield } from "lucide-react";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: FileBarChart },
  { id: "upload", label: "Upload Model", icon: Upload },
  { id: "models", label: "Model History", icon: History },
  { id: "results", label: "Test Results", icon: FileCheck },
  { id: "compliance", label: "Compliance", icon: Shield },
];

export const PlatformTabs: React.FC = () => {
  const { activeTab, setActiveTab } = usePlatform();

  return (
    <div className="border-b border-gray-200">
      <div className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }
              `}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
