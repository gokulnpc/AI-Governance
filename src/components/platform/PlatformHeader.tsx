import React from "react";
import { Shield, RefreshCw } from "lucide-react";

interface PlatformHeaderProps {
  onRefresh: () => void;
}

export const PlatformHeader: React.FC<PlatformHeaderProps> = ({
  onRefresh,
}) => {
  return (
    <div className="flex-1 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">
            AI Governance Monitor
          </h1>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Enterprise AI Quality Management Platform
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onRefresh}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Refresh data"
        >
          <RefreshCw className="h-5 w-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm text-green-700 font-medium">
            Connected to Block Convey
          </span>
        </div>
      </div>
    </div>
  );
};
