import React from "react";
import { Activity, CheckCircle, AlertTriangle } from "lucide-react";

export const SideNavStats: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="p-3 bg-blue-50 rounded-lg">
        <div className="flex items-center gap-2 mb-1">
          <Activity className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-900">
            Active Models
          </span>
        </div>
        <p className="text-2xl font-bold text-blue-700">156</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1">
            <CheckCircle className="h-3.5 w-3.5 text-green-600" />
            <span className="text-xs font-medium text-green-900">
              Tests Passed
            </span>
          </div>
          <p className="text-lg font-bold text-green-700">2,451</p>
        </div>

        <div className="p-3 bg-yellow-50 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1">
            <AlertTriangle className="h-3.5 w-3.5 text-yellow-600" />
            <span className="text-xs font-medium text-yellow-900">Alerts</span>
          </div>
          <p className="text-lg font-bold text-yellow-700">3</p>
        </div>
      </div>
    </div>
  );
};
