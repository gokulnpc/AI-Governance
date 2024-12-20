import React from "react";
import { Upload, FileBarChart, Shield, Settings } from "lucide-react";

export const QuickActions: React.FC = () => {
  const actions = [
    { icon: Upload, label: "Upload Model", color: "text-blue-500" },
    { icon: FileBarChart, label: "Run Tests", color: "text-green-500" },
    { icon: Shield, label: "Verify Model", color: "text-purple-500" },
    { icon: Settings, label: "Settings", color: "text-gray-500" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2">
        {actions.map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            <Icon className={`h-5 w-5 ${color}`} />
            <span className="text-xs text-gray-600 mt-1">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
