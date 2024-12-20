import React from "react";
import { Activity } from "../../types/activity";
import { Upload, TestTube, Shield, FileCheck, Clock } from "lucide-react";
import { formatDistanceToNow } from "../../utils/date";

interface ActivityItemProps {
  activity: Activity;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const getIcon = () => {
    switch (activity.type) {
      case "upload":
        return <Upload className="h-4 w-4 text-blue-500" />;
      case "test":
        return <TestTube className="h-4 w-4 text-green-500" />;
      case "verification":
        return <Shield className="h-4 w-4 text-purple-500" />;
      case "compliance":
        return <FileCheck className="h-4 w-4 text-orange-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (activity.status) {
      case "completed":
        return "text-green-600";
      case "in_progress":
        return "text-yellow-600";
      case "failed":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="mt-1">{getIcon()}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="font-medium truncate">{activity.modelName}</span>
          <span className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(activity.timestamp))}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-1">{activity.details}</p>
        {activity.hash && (
          <div className="text-xs font-mono text-gray-500 truncate">
            Hash: {activity.hash}
          </div>
        )}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-500">{activity.user}</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100">
            {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
          </span>
          <span className={`text-xs ${getStatusColor()}`}>
            {activity.status === "in_progress" && (
              <Clock className="h-3 w-3 inline mr-1 animate-spin" />
            )}
            {activity.status.replace("_", " ").charAt(0).toUpperCase() +
              activity.status.slice(1).replace("_", " ")}
          </span>
        </div>
      </div>
    </div>
  );
};
