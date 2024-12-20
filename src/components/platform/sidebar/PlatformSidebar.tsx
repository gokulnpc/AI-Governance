import React from "react";
import { QuickStats } from "./QuickStats";
import { RecentAlerts } from "./RecentAlerts";
import { QuickActions } from "./QuickActions";
import { SystemStatus } from "./SystemStatus";

export const PlatformSidebar: React.FC = () => {
  return (
    <div className="w-80 border-l border-gray-200 bg-gray-50 p-4 space-y-6 overflow-y-auto">
      <QuickStats />
      <RecentAlerts />
      <QuickActions />
      <SystemStatus />
    </div>
  );
};
