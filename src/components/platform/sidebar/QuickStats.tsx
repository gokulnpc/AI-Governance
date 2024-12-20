import React from "react";
import { Activity, Users, CheckCircle } from "lucide-react";

export const QuickStats: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900">Quick Stats</h3>
      <div className="space-y-2">
        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-600">Active Models</span>
          </div>
          <p className="text-2xl font-bold mt-1">156</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-600">Team Members</span>
          </div>
          <p className="text-2xl font-bold mt-1">12</p>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-purple-500" />
            <span className="text-sm text-gray-600">Tests Completed</span>
          </div>
          <p className="text-2xl font-bold mt-1">2,451</p>
        </div>
      </div>
    </div>
  );
};
