import React from "react";
import { User, Settings } from "lucide-react";

export const SideNavProfile: React.FC = () => {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
        <User className="h-5 w-5 text-blue-600" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm truncate">Sarah Chen</h3>
        <p className="text-xs text-gray-500">Lead Data Scientist</p>
      </div>
      <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
        <Settings className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  );
};
