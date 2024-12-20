import React from "react";
import { AlertTriangle, Bell } from "lucide-react";

export const RecentAlerts: React.FC = () => {
  const alerts = [
    {
      id: 1,
      type: "warning",
      message: "Bias detected in Credit Risk Model v2.1",
      time: "5m ago",
    },
    {
      id: 2,
      type: "info",
      message: "Scheduled compliance audit due in 5 days",
      time: "1h ago",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-900">Recent Alerts</h3>
        <Bell className="h-4 w-4 text-gray-500" />
      </div>
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-3 rounded-lg ${
              alert.type === "warning"
                ? "bg-yellow-50 border border-yellow-100"
                : "bg-blue-50 border border-blue-100"
            }`}
          >
            <div className="flex items-start gap-2">
              <AlertTriangle
                className={`h-4 w-4 mt-0.5 ${
                  alert.type === "warning" ? "text-yellow-500" : "text-blue-500"
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
