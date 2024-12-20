import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AuditLog } from "../../types/dashboard";

interface ActivityLogProps {
  logs: AuditLog[];
  onViewDetails: (modelName: string) => void;
}

export const ActivityLog: React.FC<ActivityLogProps> = ({
  logs,
  onViewDetails,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => onViewDetails(log.model)}
            >
              <div>
                <div className="font-medium">{log.action}</div>
                <div className="text-sm text-gray-500">{log.time}</div>
              </div>
              <div className="text-sm text-gray-600">{log.user}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
