import React from "react";
import { SystemHealth } from "./panels/SystemHealth";
import { ModelLifecycle } from "./panels/ModelLifecycle";
import { BiasMonitoring } from "./panels/BiasMonitoring";
import { ComplianceTracking } from "./panels/ComplianceTracking";
import { RiskManagement } from "./panels/RiskManagement";
import { DataQuality } from "./panels/DataQuality";
import { ModelPerformance } from "./panels/ModelPerformance";
import { ActivityLog } from "../activity/ActivityLog";
import { Model } from "../../types/model";

interface DashboardViewProps {
  onViewDetails: (model: Model) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onViewDetails,
}) => {
  return (
    <div className="space-y-6">
      {/* Overview Section */}
      <div className="grid grid-cols-1 gap-6">
        <SystemHealth />
      </div>

      {/* Main Monitoring Grid */}
      <div className="grid grid-cols-2 gap-6">
        <ModelLifecycle onViewDetails={onViewDetails} />
        <BiasMonitoring />
      </div>

      {/* Risk and Compliance Section */}
      <div className="grid grid-cols-2 gap-6">
        <ComplianceTracking />
        <RiskManagement />
      </div>

      {/* Performance and Quality Section */}
      <div className="grid grid-cols-2 gap-6">
        <ModelPerformance />
        <DataQuality />
      </div>

      {/* Activity Tracking */}
      <div className="grid grid-cols-1 gap-6">
        <ActivityLog />
      </div>
    </div>
  );
};
